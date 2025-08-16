
import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorDisplay from '@/components/ErrorDisplay';
import SEO from '@/components/SEO';
import { useReview } from '@/hooks/useApi';
import { generateArticleStructuredData, generateBreadcrumbStructuredData } from '@/utils/structuredData';

const ProductReview = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <NotFound />;
  }

  const { data: review, loading, error, retry } = useReview(slug);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <SEO
          title="Loading Review..."
          description="Loading product review"
          noIndex={true}
        />
        <div className="container mx-auto px-4 py-8">
          <LoadingSpinner size="lg" text="Loading review..." className="py-12" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <SEO
          title="Review Not Found"
          description="The requested product review could not be found"
          noIndex={true}
        />
        <div className="container mx-auto px-4 py-8">
          <ErrorDisplay 
            error={error} 
            onRetry={retry}
            title="Failed to load review"
            className="max-w-md mx-auto mt-12"
          />
        </div>
      </div>
    );
  }

  if (!review) {
    return <NotFound />;
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const breadcrumbItems = [
    { name: 'Home', url: window.location?.origin || '' },
    { name: 'Reviews', url: `${window.location?.origin}/reviews` },
    { name: review.title, url: currentUrl }
  ];
  
  const structuredData = [
    generateBreadcrumbStructuredData(breadcrumbItems),
    generateArticleStructuredData({
      title: review.title,
      description: review.excerpt,
      image: review.featuredImage,
      author: review.author,
      publishedAt: review.publishedAt,
      url: currentUrl
    })
  ];

  // TODO: Implement actual review display component
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={review.seoTitle || review.title}
        description={review.seoDescription || review.excerpt}
        canonicalUrl={currentUrl}
        ogType="article"
        ogImage={review.featuredImage}
        structuredData={structuredData}
        publishedTime={review.publishedAt}
        modifiedTime={review.updatedAt}
        articleTags={review.tags}
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">{review.title}</h1>
        <p className="mt-4">{review.content}</p>
      </div>
    </div>
  );
};

export default ProductReview;
