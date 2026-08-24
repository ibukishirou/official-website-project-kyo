import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoConfig } from '../utils/seo';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  path,
  structuredData 
}) => {
  const location = useLocation();
  const baseUrl = 'https://project-kyo.jp';
  const currentUrl = path ? `${baseUrl}${path}` : `${baseUrl}${location.pathname}`;
  const { siteName, twitterSite, ogType, locale } = seoConfig.default;

  useEffect(() => {
    // Title更新
    if (title) {
      document.title = title;
    }

    // Meta tag更新用ヘルパー関数
    const updateMetaTag = (attr, attrValue, content) => {
      if (!content) return;
      
      let element = document.querySelector(`meta[${attr}="${attrValue}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attr, attrValue);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Link tag更新用ヘルパー関数
    const updateLinkTag = (rel, href) => {
      if (!href) return;
      
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (element) {
        element.setAttribute('href', href);
      } else {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        element.setAttribute('href', href);
        document.head.appendChild(element);
      }
    };

    // 基本メタタグ
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);

    // OGP
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:url', currentUrl);
    updateMetaTag('property', 'og:site_name', siteName);
    updateMetaTag('property', 'og:type', ogType);
    updateMetaTag('property', 'og:locale', locale);
    
    if (ogImage) {
      updateMetaTag('property', 'og:image', ogImage);
      updateMetaTag('property', 'og:image:width', '1200');
      updateMetaTag('property', 'og:image:height', '630');
    }

    // Twitter Card
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:site', twitterSite);
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    if (ogImage) {
      updateMetaTag('name', 'twitter:image', ogImage);
    }

    // Canonical URL
    updateLinkTag('canonical', currentUrl);

    // 構造化データ（JSON-LD）
    if (structuredData) {
      // 既存のJSON-LDスクリプトを削除
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => script.remove());

      // 新しいJSON-LDスクリプトを追加
      if (Array.isArray(structuredData)) {
        structuredData.forEach(data => {
          const script = document.createElement('script');
          script.type = 'application/ld+json';
          script.text = JSON.stringify(data);
          document.head.appendChild(script);
        });
      } else {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }

    // クリーンアップ：ページ遷移時に古いJSON-LDを削除
    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, [title, description, keywords, ogImage, currentUrl, structuredData]);

  return null;
};

export default SEO;
