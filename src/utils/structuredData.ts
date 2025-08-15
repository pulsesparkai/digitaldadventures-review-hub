// Structured data generators for SEO
// Only use for real products and content - never for placeholder/fake data

export const generateWebsiteStructuredData = (siteName: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": siteName,
  "url": url,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${url}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

export const generateOrganizationStructuredData = (name: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": name,
  "url": url,
  "sameAs": [
    // Add social media profiles when available
  ]
});

export const generateBreadcrumbStructuredData = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateProductStructuredData = (product: {
  name: string;
  description: string;
  image: string;
  brand?: string;
  price?: string;
  availability?: string;
  rating?: number;
  reviewCount?: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image,
  ...(product.brand && { "brand": { "@type": "Brand", "name": product.brand } }),
  ...(product.price && {
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "USD",
      "availability": `https://schema.org/${product.availability || 'InStock'}`
    }
  }),
  ...(product.rating && product.reviewCount && {
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount
    }
  })
});

export const generateArticleStructuredData = (article: {
  title: string;
  description: string;
  image: string;
  author: string;
  publishedAt: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "datePublished": article.publishedAt,
  "url": article.url
});

export const generateCollectionPageStructuredData = (collection: {
  name: string;
  description: string;
  url: string;
  items: Array<{ name: string; url: string }>;
}) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": collection.name,
  "description": collection.description,
  "url": collection.url,
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": collection.items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "url": item.url
    }))
  }
});