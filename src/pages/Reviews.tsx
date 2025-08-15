import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Star, Search, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorDisplay from '@/components/ErrorDisplay';
import SEO from '@/components/SEO';
import { useReviews } from '@/hooks/useApi';
import { SearchFilters } from '@/types';
import { generateCollectionPageStructuredData } from '@/utils/structuredData';

const Reviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', 'Kitchen', 'Fitness', 'Desk Gear', 'Outdoor', 'Tools', 'Family Tech', 'Disney'];

  const filters: SearchFilters = {
    query: searchTerm,
    category: selectedCategory === 'all' ? undefined : selectedCategory
  };

  const { data: reviews = [], loading, error, retry } = useReviews(filters);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const structuredData = reviews.length > 0 ? [
    generateCollectionPageStructuredData({
      name: 'Product Reviews',
      description: 'Comprehensive product reviews and recommendations for families',
      url: currentUrl,
      items: reviews.map(review => ({
        name: review.title,
        url: `${window.location.origin}/review/${review.slug}`
      }))
    })
  ] : [];

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <SEO
          title="Product Reviews - Loading"
          description="Loading comprehensive product reviews and recommendations for families"
          noIndex={true}
        />
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <LoadingSpinner size="lg" text="Loading reviews..." className="py-12" />
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <SEO
          title="Product Reviews - Error"
          description="Error loading product reviews"
          noIndex={true}
        />
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <ErrorDisplay 
            error={error} 
            onRetry={retry}
            title="Failed to load reviews"
            className="max-w-md mx-auto mt-12"
          />
        </div>
        <Footer />
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <SEO
          title="Product Reviews"
          description="Comprehensive product reviews and recommendations for families. Discover the best products through research, hands-on testing, and analysis."
          canonicalUrl={currentUrl}
          structuredData={structuredData}
        />
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No Reviews Available</h3>
            <p className="text-gray-600">Check back soon for honest product reviews!</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Product Reviews"
        description="Comprehensive product reviews and recommendations for families. Discover the best products through research, hands-on testing, and analysis."
        canonicalUrl={currentUrl}
        structuredData={structuredData}
      />
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Product Reviews</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Honest, in-depth reviews based on hands-on testing, research, and AI analysis. 
            Find the best products for your family and lifestyle.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search reviews..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Filter className="h-5 w-5 text-gray-400 mt-2.5" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-orange-600 hover:bg-orange-700" : ""}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Link key={review.slug} to={`/review/${review.slug}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{review.category}</Badge>
                    {review.isAI && (
                      <Badge variant="outline" className="text-xs">
                        AI Analysis
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="hover:text-orange-600 transition-colors">
                    {review.title}
                  </CardTitle>
                  <CardDescription>{review.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-gray-300"
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">{review.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(review.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reviews;