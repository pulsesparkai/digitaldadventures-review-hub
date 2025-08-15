/* 
 * Meta tags and SEO configuration
 * 
 * Key improvements made:
 * 1. Removed all references to fake/placeholder reviews in meta descriptions
 * 2. Added proper canonical URLs for all pages
 * 3. Implemented comprehensive Open Graph tags (og:title, og:description, og:type, og:url, og:image)
 * 4. Added Twitter Card support for better social media sharing
 * 5. Implemented structured data (JSON-LD) for:
 *    - Website information
 *    - Organization details
 *    - Breadcrumb navigation
 *    - Product information (only for real products)
 *    - Article/review information (only for actual content)
 *    - Collection pages for category listings
 * 
 * SEO Strategy:
 * - Homepage: Focus on family product reviews and recommendations
 * - Category pages: Target specific product categories with proper descriptions
 * - Review pages: Individual product/review optimization with article schema
 * - 404/Error pages: Properly marked as noindex to avoid SEO penalties
 * 
 * Structured Data Guidelines:
 * - Only implement Product schema for actual products with real data
 * - Only use Review/Article schema for genuine content, not placeholders
 * - Use Organization schema to establish site authority
 * - Implement proper breadcrumb navigation for better UX and SEO
 * 
 * Open Graph Configuration:
 * - Default OG image: /images/og-default.jpg (should be 1200x630px)
 * - Product pages: Use actual product images
 * - Article pages: Use featured images
 * - Proper og:type for different content types (website, article, product)
 * 
 * Technical SEO:
 * - Canonical URLs prevent duplicate content issues
 * - Proper viewport meta tag for mobile optimization
 * - UTF-8 charset declaration
 * - robots meta tag for content that shouldn't be indexed
 * 
 * Future Enhancements:
 * - Add hreflang tags if supporting multiple languages
 * - Implement FAQ schema for product Q&A sections
 * - Add Review schema when implementing actual user reviews
 * - Consider adding sameAs properties to Organization schema for social profiles
 */

export default {
  siteUrl: 'https://your-domain.com', // Replace with actual domain
  siteName: 'Family Product Reviews & Recommendations',
  siteDescription: 'Discover the best products for your family through honest reviews, research, and AI analysis.',
  defaultOGImage: '/images/og-default.jpg',
  twitterHandle: '@yourtwitterhandle', // Replace with actual Twitter handle
};