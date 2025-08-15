
import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorDisplay from '@/components/ErrorDisplay';
import { useReview } from '@/hooks/useApi';

const ProductReview = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <NotFound />;
  }

  const { data: review, loading, error, retry } = useReview(slug);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <LoadingSpinner size="lg" text="Loading review..." className="py-12" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
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

  // TODO: Implement actual review display component
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">{review.title}</h1>
        <p className="mt-4">{review.content}</p>
      </div>
    </div>
  );
};

export default ProductReview;
