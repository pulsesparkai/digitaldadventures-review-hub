import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Search, BookOpen, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const popularPages = [
    { title: 'Halloween Decorations Hub', path: '/lowes-halloween-decorations', description: 'Complete guide to 2025 Halloween decorations' },
    { title: 'Product Reviews', path: '/reviews', description: 'Browse all our honest product reviews' },
    { title: 'Outdoor Category', path: '/category/outdoor', description: 'Outdoor products and seasonal items' },
    { title: 'About Us', path: '/about', description: 'Learn about our review process' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Page Not Found (404)"
        description="The page you're looking for doesn't exist. Explore our product reviews and recommendations instead."
        noIndex={true}
      />
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-8xl font-bold text-gray-200 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/reviews">
                <Search className="mr-2 h-4 w-4" />
                Browse Reviews
              </Link>
            </Button>
          </div>

          <Card className="text-left">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="mr-2 h-5 w-5" />
                Popular Pages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {popularPages.map((page, index) => (
                  <Link 
                    key={index}
                    to={page.path}
                    className="block p-4 rounded-lg border hover:border-orange-300 hover:bg-orange-50 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900 mb-1">{page.title}</h3>
                    <p className="text-gray-600 text-sm">{page.description}</p>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-sm text-gray-500">
            <p>
              If you believe this is an error, please{' '}
              <Link to="/contact" className="text-orange-600 hover:text-orange-700 underline">
                contact us
              </Link>{' '}
              and let us know about the broken link.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;