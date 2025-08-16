// SEO Helper utilities for consistent implementation across the site

export const seoConfig = {
  siteUrl: 'https://digitaldadventures.com',
  siteName: 'DigitalDadVentures',
  defaultTitle: 'Family Product Reviews & Recommendations',
  defaultDescription: 'Discover the best products for your family through honest reviews, research, and AI analysis.',
  twitterHandle: '@digitaldadventures',
  defaultImage: '/images/og-default.jpg',
  themeColor: '#ea580c'
};

// Generate proper article meta data for blog posts and reviews
export const generateArticleMeta = (article: {
  title: string;
  description: string;
  slug: string;
  publishedAt?: string;
  updatedAt?: string;
  tags?: string[];
  featuredImage?: string;
  author?: string;
}) => {
  const fullUrl = `${seoConfig.siteUrl}/${article.slug}`;
  const ogImage = article.featuredImage?.startsWith('http') 
    ? article.featuredImage 
    : `${seoConfig.siteUrl}${article.featuredImage || seoConfig.defaultImage}`;

  return {
    title: `${article.title} | ${seoConfig.siteName}`,
    description: article.description,
    canonicalUrl: fullUrl,
    ogType: 'article' as const,
    ogImage,
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
    articleTags: article.tags,
    keywords: article.tags?.join(', ')
  };
};

// Generate proper product meta data for product pages
export const generateProductMeta = (product: {
  name: string;
  description: string;
  slug: string;
  price?: string;
  brand?: string;
  image?: string;
  category?: string;
}) => {
  const fullUrl = `${seoConfig.siteUrl}/product/${product.slug}`;
  const ogImage = product.image?.startsWith('http') 
    ? product.image 
    : `${seoConfig.siteUrl}${product.image || seoConfig.defaultImage}`;

  return {
    title: `${product.name} Review | ${seoConfig.siteName}`,
    description: `${product.description} Read our detailed review and find the best deals.`,
    canonicalUrl: fullUrl,
    ogType: 'product' as const,
    ogImage,
    keywords: `${product.name}, ${product.brand || ''}, ${product.category || ''}, product review, family products`
  };
};

// Generate proper category page meta data
export const generateCategoryMeta = (category: {
  name: string;
  description: string;
  slug: string;
}) => {
  const fullUrl = `${seoConfig.siteUrl}/category/${category.slug}`;

  return {
    title: `Best ${category.name} Products | ${seoConfig.siteName}`,
    description: category.description,
    canonicalUrl: fullUrl,
    ogType: 'website' as const,
    keywords: `${category.name} products, ${category.name} reviews, best ${category.name}, family ${category.name}`
  };
};

// Ensure proper URL formatting
export const ensureAbsoluteUrl = (url: string): string => {
  if (url.startsWith('http')) {
    return url;
  }
  return `${seoConfig.siteUrl}${url.startsWith('/') ? url : `/${url}`}`;
};

// Generate robots meta content based on page type
export const generateRobotsMeta = (pageType: 'index' | 'noindex' | 'nofollow' | 'none'): string => {
  switch (pageType) {
    case 'noindex':
      return 'noindex,follow,max-image-preview:large,max-snippet:-1';
    case 'nofollow':
      return 'index,nofollow,max-image-preview:large,max-snippet:-1';
    case 'none':
      return 'noindex,nofollow';
    default:
      return 'index,follow,max-image-preview:large,max-snippet:-1';
  }
};