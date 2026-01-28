/**
 * SecureLink Component
 * Безопасный компонент для внешних ссылок с защитой от:
 * - Open Redirect атак
 * - Clickjacking
 * - Rate Limiting (защита от спама)
 * - Tabnabbing
 */

import { useState, useCallback } from 'react';
import { RateLimiter, isValidExternalURL, secureLog } from '../utils/security';
import { toast } from 'sonner@2.0.3';

interface SecureLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  rateLimitKey?: string;
  rateLimitMax?: number;
  rateLimitWindowMs?: number;
  showToastOnLimit?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

export default function SecureLink({
  href,
  children,
  className = '',
  rateLimitKey,
  rateLimitMax = 5,
  rateLimitWindowMs = 60000,
  showToastOnLimit = true,
  onClick,
  ariaLabel,
}: SecureLinkProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      // 1. Валидация URL
      if (!isValidExternalURL(href)) {
        e.preventDefault();
        console.error('Invalid or untrusted URL:', href);
        if (showToastOnLimit) {
          toast.error('Недействительная ссылка');
        }
        return;
      }

      // 2. Rate Limiting (если указан ключ)
      if (rateLimitKey) {
        if (!RateLimiter.check(rateLimitKey, rateLimitMax, rateLimitWindowMs)) {
          e.preventDefault();
          
          const status = RateLimiter.getStatus(rateLimitKey);
          const resetInSeconds = status ? Math.ceil(status.resetIn / 1000) : 60;
          
          secureLog('Rate limit exceeded', { key: rateLimitKey });
          
          if (showToastOnLimit) {
            toast.error(
              `Слишком много запросов. Попробуйте через ${resetInSeconds} сек.`,
              {
                duration: 3000,
              }
            );
          }
          return;
        }
      }

      // 3. Предотвращение двойного клика
      if (isProcessing) {
        e.preventDefault();
        return;
      }

      setIsProcessing(true);
      setTimeout(() => setIsProcessing(false), 1000);

      // 4. Callback перед переходом
      if (onClick) {
        onClick();
      }

      // 5. Логирование (только в dev)
      secureLog('External link clicked', { href, rateLimitKey });
    },
    [href, rateLimitKey, rateLimitMax, rateLimitWindowMs, showToastOnLimit, onClick, isProcessing]
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer" // Защита от tabnabbing
      className={`${className} ${isProcessing ? 'pointer-events-none opacity-75' : ''}`}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

/**
 * Hook для использования Rate Limiter в других компонентах
 */
export function useRateLimiter(key: string, max: number = 5, windowMs: number = 60000) {
  const [isLimited, setIsLimited] = useState(false);

  const checkLimit = useCallback(() => {
    const allowed = RateLimiter.check(key, max, windowMs);
    
    if (!allowed) {
      setIsLimited(true);
      const status = RateLimiter.getStatus(key);
      
      if (status) {
        setTimeout(() => setIsLimited(false), status.resetIn);
      }
    }
    
    return allowed;
  }, [key, max, windowMs]);

  const reset = useCallback(() => {
    RateLimiter.reset(key);
    setIsLimited(false);
  }, [key]);

  const getStatus = useCallback(() => {
    return RateLimiter.getStatus(key);
  }, [key]);

  return { checkLimit, reset, getStatus, isLimited };
}
