/**
 * Security Utilities
 * Защита от OWASP Top 10 уязвимостей и Rate Limiting
 */

import DOMPurify from 'dompurify';

// Rate Limiting Store
interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

/**
 * Client-side Rate Limiting
 * Защита от спама и множественных кликов (Anti-Bot)
 */
export class RateLimiter {
  private static readonly CLEANUP_INTERVAL = 60000; // 1 минута
  private static cleanupTimer: number | null = null;

  /**
   * Проверка лимита запросов
   * @param key - Уникальный ключ (например, 'whatsapp-click')
   * @param limit - Максимальное количество действий
   * @param windowMs - Временное окно в миллисекундах
   * @returns true если действие разрешено
   */
  static check(key: string, limit: number = 5, windowMs: number = 60000): boolean {
    const now = Date.now();
    const entry = rateLimitStore.get(key);

    // Первый запрос или время сброса прошло
    if (!entry || now > entry.resetTime) {
      rateLimitStore.set(key, {
        count: 1,
        resetTime: now + windowMs,
      });
      this.scheduleCleanup();
      return true;
    }

    // Проверяем лимит
    if (entry.count >= limit) {
      console.warn(`[Security] Rate limit exceeded for ${key}`);
      return false;
    }

    // Увеличиваем счетчик
    entry.count++;
    return true;
  }

  /**
   * Сброс лимита для конкретного ключа
   */
  static reset(key: string): void {
    rateLimitStore.delete(key);
  }

  /**
   * Очистка устаревших записей
   */
  private static scheduleCleanup(): void {
    if (this.cleanupTimer) return;

    this.cleanupTimer = window.setInterval(() => {
      const now = Date.now();
      for (const [key, entry] of rateLimitStore.entries()) {
        if (now > entry.resetTime) {
          rateLimitStore.delete(key);
        }
      }

      // Если хранилище пусто, останавливаем таймер
      if (rateLimitStore.size === 0 && this.cleanupTimer) {
        clearInterval(this.cleanupTimer);
        this.cleanupTimer = null;
      }
    }, this.CLEANUP_INTERVAL);
  }

  /**
   * Получить информацию о текущем состоянии лимита
   */
  static getStatus(key: string): { remaining: number; resetIn: number } | null {
    const entry = rateLimitStore.get(key);
    if (!entry) return null;

    const now = Date.now();
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
      return null;
    }

    return {
      remaining: Math.max(0, 5 - entry.count),
      resetIn: Math.max(0, entry.resetTime - now),
    };
  }
}

/**
 * Sanitize HTML для защиты от XSS (OWASP A03: Injection)
 * Использует DOMPurify вместо регулярных выражений
 */
export function sanitizeHTML(html: string): string {
  if (typeof window === 'undefined') return html; // SSR check
  
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'li', 'span'],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'class', 'style'],
    FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'form', 'style'],
    FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover'],
  });
}

/**
 * Валидация URL для защиты от Open Redirect (OWASP A01)
 */
export function isValidExternalURL(url: string): boolean {
  try {
    // Handle relative URLs
    if (url.startsWith('/')) return true;
    
    const parsed = new URL(url);
    
    // Разрешенные протоколы
    const allowedProtocols = ['https:', 'http:', 'tel:', 'mailto:'];
    if (!allowedProtocols.includes(parsed.protocol)) {
      return false;
    }

    // Whitelist доменов (добавьте свои доверенные домены)
    const trustedDomains = [
      'wa.me',
      'api.whatsapp.com',
      'web.whatsapp.com',
      'da-school.online',
      'getcourse.ru',
      't.me',
      'telegram.me',
      'tlgg.ru',
      'vk.com',
      'instagram.com'
    ];

    // Проверка для абсолютных URL
    if (parsed.hostname) {
      const isWhitelisted = trustedDomains.some(domain => 
        parsed.hostname === domain || parsed.hostname.endsWith('.' + domain)
      );
      
      if (!isWhitelisted && parsed.protocol !== 'tel:' && parsed.protocol !== 'mailto:') {
        console.warn(`[Security] Untrusted domain detected: ${parsed.hostname}`);
        // В production режиме блокируем
        if (process.env.NODE_ENV === 'production') return false;
        return true; 
      }
    }

    return true;
  } catch (e) {
    console.error('Invalid URL:', url);
    return false;
  }
}

/**
 * Защита от Data Exposure: Очистка чувствительных данных перед логированием
 */
export function secureLog(message: string, data?: any): void {
  if (process.env.NODE_ENV === 'development') {
    // Deep clone to avoid mutating original data
    const safeData = data ? JSON.parse(JSON.stringify(data)) : undefined;
    
    // Mask potential PII
    if (safeData) {
      if (safeData.email) safeData.email = '***@***.***';
      if (safeData.phone) safeData.phone = '***-***-**-**';
      if (safeData.password) safeData.password = '******';
      if (safeData.token) safeData.token = '******';
    }
    
    console.log(`[Security] ${message}`, safeData);
  }
}

/**
 * Content Security Policy helpers
 */
export const CSP_DIRECTIVES = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://mc.yandex.ru", "https://yastatic.net"], 
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'img-src': ["'self'", 'data:', 'https:', 'blob:', "https://mc.yandex.ru"],
  'font-src': ["'self'", 'data:', 'https://fonts.gstatic.com'],
  'connect-src': ["'self'", 'https://wa.me', 'https://api.whatsapp.com', "https://mc.yandex.ru"],
  'frame-ancestors': ["'none'"], // Защита от clickjacking
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
};
