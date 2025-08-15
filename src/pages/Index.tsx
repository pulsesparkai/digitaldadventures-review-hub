
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ArrowRight, TrendingUp, Users, Shield, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';
import ProductImage from '@/components/ProductImage';
import SEO from '@/components/SEO';
import { generateWebsiteStructuredData, generateOrganizationStructuredData } from '@/utils/structuredData';

const Index = () => {
  const categories = [
    { name: 'Kitchen', icon: '🍳', color: 'bg-orange-100 text-orange-800' },
    { name: 'Fitness', icon: '💪', color: 'bg-green-100 text-green-800' },
    { name: 'Desk Gear', icon: '💻', color: 'bg-blue-100 text-blue-800' },
    { name: 'Outdoor 🎃', icon: '🏕️', color: 'bg-emerald-100 text-emerald-800' },
    { name: 'Tools', icon: '🔧', color: 'bg-gray-100 text-gray-800' },
    { name: 'Family Tech', icon: '📱', color: 'bg-purple-100 text-purple-800' },
  ];

  // Empty array for now - reviews will be populated from CMS/database
  const featuredReviews: any[] = [];

  const currentUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const structuredData = [
    generateWebsiteStructuredData('Family Product Reviews & Recommendations', currentUrl),
    generateOrganizationStructuredData('Family Product Reviews', currentUrl)
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Family Product Reviews & Recommendations"
        description="Discover the best products for your family through honest reviews, research, and AI analysis. Find top-rated kitchen, fitness, tech, and home improvement products."
        canonicalUrl={currentUrl}
        ogType="website"
        structuredData={structuredData}
        keywords="family products, product reviews, honest reviews, kitchen appliances, fitness equipment, home improvement, tech gadgets"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Honest Reviews for Smart Families
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
            We recommend products based on research, hands-on experience, industry trends, and advanced AI analysis. 
            Discover the best gear, gadgets, and tools for modern family life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Button size="lg" className="w-full sm:w-auto min-h-[48px]">
              Browse Reviews <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto min-h-[48px]">
              Submit a Product
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Family-Focused</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Transparent AI Disclosure</span>
              <span className="sm:hidden">AI Transparent</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span>Trending Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* Halloween Seasonal Promotion */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
              🎃 SEASONAL SPOTLIGHT
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ultimate Halloween Decorations Guide</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto">
              Transform your home with Lowe's best Halloween decorations for 2025. From 12ft animatronics to Disney collections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <ProductImage
                  src="https://mobileimages.lowes.com/productimages/f0ed1bd3-5a72-480f-a909-35256aa2247d/72605872.jpeg"
                  alt="Lowe's Halloween Decorations Guide - Complete 2025 collection"
                  size="large"
                  priority={true}
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-orange-600">🏆 COMPLETE GUIDE</Badge>
                <h3 className="text-xl font-bold mb-3">2025 Halloween Hub</h3>
                <p className="text-gray-600 mb-4">Everything you need to create the ultimate Halloween display</p>
                <Button asChild className="w-full">
                  <Link to="/lowes-halloween-decorations">
                    Explore All Decorations <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <ProductImage
                  src="https://mobileimages.lowes.com/productimages/c3f26281-2bf0-4f86-9cdf-22cefef84649/49420451.jpg"
                  alt="Disney Haunted Mansion Halloween Collection - Official Disney theming"
                  size="large"
                  priority={true}
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-purple-600">✨ DISNEY MAGIC</Badge>
                <h3 className="text-xl font-bold mb-3">Haunted Mansion Collection</h3>
                <p className="text-gray-600 mb-4">Authentic Disney theming for your Halloween display</p>
                <Button asChild className="w-full" variant="outline">
                  <Link to="/lowes-haunted-mansion-collection">
                    View Disney Collection <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <ProductImage
                  src="https://mobileimages.lowes.com/productimages/f0ed1bd3-5a72-480f-a909-35256aa2247d/72605872.jpeg"
                  alt="Best Halloween Decorations 2025 - Top picks across all categories"
                  size="large"
                  priority={true}
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-green-600">💰 BUYER'S GUIDE</Badge>
                <h3 className="text-xl font-bold mb-3">Best Picks 2025</h3>
                <p className="text-gray-600 mb-4">Top-rated decorations across all budgets and categories</p>
                <Button asChild className="w-full" variant="outline">
                  <Link to="/lowes-best-outdoor-halloween-decorations-2025">
                    View Top Picks <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button size="lg" asChild className="w-full sm:w-auto min-h-[48px]">
              <a href="https://shoplowes.me/3V5TZUg" target="_blank" rel="noopener noreferrer">
                Shop Halloween at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {categories.map((category) => (
              <Link key={category.name} to={`/category/${category.name.toLowerCase().replace(' ', '-')}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full min-h-[120px] sm:min-h-[140px]">
                  <CardContent className="p-3 sm:p-4 md:p-6 text-center flex flex-col justify-center h-full">
                    <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-4">{category.icon}</div>
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base">{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Featured Reviews</h2>
            <Link to="/reviews" className="text-orange-600 hover:text-orange-700 flex items-center text-sm sm:text-base min-h-[44px]">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {featuredReviews.length === 0 ? (
            <div className="text-center py-16">
              <Star className="mx-auto h-16 w-16 text-gray-300 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Featured Reviews Coming Soon</h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                We're working on comprehensive product reviews to help you make informed decisions. 
                Be the first to know when new reviews are published!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/submit-product">Request a Product Review</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/newsletter">Get Notified of New Reviews</Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {featuredReviews.map((review) => (
                <Link key={review.link} to={review.link}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                      <ProductImage
                        src={review.image}
                        alt={`${review.title} - Product review`}
                        className="rounded-t-lg"
                        size="medium"
                        priority={false}
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{review.category}</Badge>
                        {review.badge && (
                          <Badge variant="outline" className="text-xs">
                            {review.badge}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="hover:text-orange-600 transition-colors">
                        {review.title}
                      </CardTitle>
                      <CardDescription>{review.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
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
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />
      
      <Footer />
    </div>
  );
};

export default Index;
