
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { Star, ExternalLink, Info, ShoppingCart, Check, X, FileSearch, AlertCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProductReview = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        // Simulate API call - replace with actual data fetching
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // No products available yet
        setProduct(null);
      } catch (err) {
        setError('Failed to load product review');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-8 w-64 mb-4" />
            <Skeleton className="h-6 w-96 mb-8" />
            <Skeleton className="aspect-video w-full mb-8" />
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Skeleton className="h-6 w-48 mb-4" />
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
              <div>
                <Skeleton className="h-64 w-full" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <AlertCircle className="mx-auto h-16 w-16 text-red-500 mb-6" />
          <h1 className="text-3xl font-bold mb-4">Error Loading Review</h1>
          <p className="text-gray-600 mb-8">{error}</p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
            <Button variant="outline" asChild>
              <Link to="/reviews">Browse All Reviews</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // No product found
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20 text-center">
        <FileSearch className="mx-auto h-16 w-16 text-gray-400 mb-6" />
        <h1 className="text-3xl font-bold mb-4">Review Not Found</h1>
        <p className="text-gray-600 mb-4">
          The product review you're looking for doesn't exist yet or has been moved.
        </p>
        <p className="text-gray-500 mb-8">
          We're constantly adding new reviews. Check back soon or browse our existing content!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/reviews">Browse All Reviews</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/submit-product">Request a Review</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/">Back to Homepage</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductReview;
