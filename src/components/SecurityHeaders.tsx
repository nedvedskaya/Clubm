/**
 * Security Headers Component
 * Добавляет meta-теги для безопасности (OWASP защита)
 */

import { useEffect } from 'react';

export default function SecurityHeaders() {
  useEffect(() => {
    // Добавляем security headers через meta теги
    // В production лучше настроить на уровне сервера
    
    // X-Content-Type-Options
    const contentTypeOptions = document.createElement('meta');
    contentTypeOptions.httpEquiv = 'X-Content-Type-Options';
    contentTypeOptions.content = 'nosniff';
    document.head.appendChild(contentTypeOptions);

    // X-Frame-Options (защита от clickjacking)
    const frameOptions = document.createElement('meta');
    frameOptions.httpEquiv = 'X-Frame-Options';
    frameOptions.content = 'DENY';
    document.head.appendChild(frameOptions);

    // Referrer Policy
    const referrerPolicy = document.createElement('meta');
    referrerPolicy.name = 'referrer';
    referrerPolicy.content = 'strict-origin-when-cross-origin';
    document.head.appendChild(referrerPolicy);

    // Permissions Policy
    const permissionsPolicy = document.createElement('meta');
    permissionsPolicy.httpEquiv = 'Permissions-Policy';
    permissionsPolicy.content = 'geolocation=(), microphone=(), camera=()';
    document.head.appendChild(permissionsPolicy);

    return () => {
      // Cleanup при размонтировании
      document.head.removeChild(contentTypeOptions);
      document.head.removeChild(frameOptions);
      document.head.removeChild(referrerPolicy);
      document.head.removeChild(permissionsPolicy);
    };
  }, []);

  return (
    <>
      {/* CSP и другие мета-теги */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      
      {/* Robots */}
      <meta name="robots" content="index, follow" />
      
      {/* Безопасность */}
      <meta httpEquiv="Content-Security-Policy" 
        content="upgrade-insecure-requests" 
      />
    </>
  );
}
