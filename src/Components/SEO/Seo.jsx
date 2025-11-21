import { useEffect } from 'react';

const upsertTag = (selector, createFn) => {
  let element = document.querySelector(selector);
  if (!element) {
    element = createFn();
    document.head.appendChild(element);
  }
  return element;
};

const setMetaTag = (name, content, isProperty = false) => {
  if (!content) return;
  const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  const meta = upsertTag(selector, () => {
    const tag = document.createElement('meta');
    if (isProperty) {
      tag.setAttribute('property', name);
    } else {
      tag.setAttribute('name', name);
    }
    return tag;
  });
  meta.setAttribute('content', content);
};

const setLinkTag = (rel, href) => {
  if (!href) return;
  const selector = `link[rel="${rel}"]`;
  const link = upsertTag(selector, () => {
    const tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    return tag;
  });
  link.setAttribute('href', href);
};

const removeExistingStructuredData = () => {
  document
    .querySelectorAll('script[data-managed="seo-structured-data"]')
    .forEach((node) => node.remove());
};

const addStructuredData = (structuredData) => {
  if (!structuredData) return;
  const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
  dataArray.forEach((data) => {
    if (!data) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-managed', 'seo-structured-data');
    script.innerHTML = JSON.stringify(data);
    document.head.appendChild(script);
  });
};

function Seo({
  title,
  description,
  keywords = [],
  canonical,
  ogImage,
  structuredData,
}) {
  useEffect(() => {
    if (title) {
      document.title = title;
      setMetaTag('og:title', title, true);
      setMetaTag('twitter:title', title);
    }

    if (description) {
      setMetaTag('description', description);
      setMetaTag('og:description', description, true);
      setMetaTag('twitter:description', description);
    }

    if (keywords.length) {
      setMetaTag('keywords', keywords.join(', '));
    }

    if (canonical) {
      setLinkTag('canonical', canonical);
      setMetaTag('og:url', canonical, true);
    }

    if (ogImage) {
      setMetaTag('og:image', ogImage, true);
      setMetaTag('twitter:image', ogImage);
    }

    setMetaTag('og:type', 'website', true);
    setMetaTag('twitter:card', 'summary_large_image');

    removeExistingStructuredData();
    addStructuredData(structuredData);

    return () => {
      removeExistingStructuredData();
    };
  }, [title, description, keywords, canonical, ogImage, structuredData]);

  return null;
}

export default Seo;

