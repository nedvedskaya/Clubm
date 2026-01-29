import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
}

export function SEO({ 
  title, 
  description, 
  keywords, 
  image = 'https://da-school.online/public/club_preview_og.jpg', // Fallback image (mock path)
  url = 'https://club-managers.ru/',
  type = 'website'
}: SEOProps) {
  useEffect(() => {
    // 1. Update Basic Meta
    document.title = title;

    const updateMeta = (name: string, content: string, attrName: string = 'name') => {
      let element = document.querySelector(`meta[${attrName}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);

    // 2. Open Graph (Facebook, LinkedIn, WhatsApp)
    updateMeta('og:title', title, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:image', image, 'property');
    updateMeta('og:url', url, 'property');
    updateMeta('og:type', type, 'property');
    updateMeta('og:site_name', 'Клуб менеджеров детейлинга', 'property');
    updateMeta('og:locale', 'ru_RU', 'property');

    // 3. Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);

  }, [title, description, keywords, image, url, type]);

  return null;
}
