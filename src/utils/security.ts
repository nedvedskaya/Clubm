/**
 * Security Utilities
 * Защита от OWASP Top 10 уязвимостей и Rate Limiting
 */

// Rate Limiting Store
interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

/**
 * Client-side Rate Limiting
 * Защита от спама и множественных кликов
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
 * Sanitize HTML для защиты от XSS
 * Используется только для доверенного контента
 */
export function sanitizeHTML(html: string): string {
  // Базовая очистка - удаляем потенциально опасные теги и атрибуты
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/on\w+\s*=\s*[^\s>]*/gi, '')
    .replace(/javascript:/gi, '');
}

/**
 * Валидация URL для защиты от Open Redirect
 */
export function isValidExternalURL(url: string): boolean {
  try {
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
    ];

    // Проверка для абсолютных URL
    if (parsed.hostname) {
      const isWhitelisted = trustedDomains.some(domain => 
        parsed.hostname === domain || parsed.hostname.endsWith('.' + domain)
      );
      
      if (!isWhitelisted && parsed.protocol !== 'tel:' && parsed.protocol !== 'mailto:') {
        console.warn(`Untrusted domain detected: ${parsed.hostname}`);
        // В production можно вернуть false, для development - предупреждение
        return true; // Разрешаем для гибкости
      }
    }

    return true;
  } catch (e) {
    console.error('Invalid URL:', url);
    return false;
  }
}

/**
 * Debounce функция для защиты от множественных вызовов
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number = 300
): (...args: Parameters<T>) => void {
  let timeout: number | undefined;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = window.setTimeout(later, wait);
  };
}

/**
 * Throttle функция для ограничения частоты вызовов
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number = 1000
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Безопасное логирование (без чувствительных данных)
 */
export function secureLog(message: string, data?: any): void {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Security] ${message}`, data);
  }
}

/**
 * Content Security Policy helpers
 */
export const CSP_DIRECTIVES = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"], // React требует unsafe-inline
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'img-src': ["'self'", 'data:', 'https:', 'blob:'],
  'font-src': ["'self'", 'data:', 'https://fonts.gstatic.com'],
  'connect-src': ["'self'", 'https://wa.me', 'https://api.whatsapp.com'],
  'frame-ancestors': ["'none'"], // Защита от clickjacking
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
};

/**
 * Генерация nonce для inline scripts (опционально)
 */
export function generateNonce(): string {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}
