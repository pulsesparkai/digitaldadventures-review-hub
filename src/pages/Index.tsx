
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ArrowRight, TrendingUp, Users, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';

const Index = () => {
  const categories = [
    { name: 'Kitchen', icon: '🍳', count: 15, color: 'bg-orange-100 text-orange-800' },
    { name: 'Fitness', icon: '💪', count: 12, color: 'bg-green-100 text-green-800' },
    { name: 'Desk Gear', icon: '💻', count: 18, color: 'bg-blue-100 text-blue-800' },
    { name: 'Outdoor', icon: '🏕️', count: 10, color: 'bg-emerald-100 text-emerald-800' },
    { name: 'Tools', icon: '🔧', count: 8, color: 'bg-gray-100 text-gray-800' },
    { name: 'Family Tech', icon: '📱', count: 14, color: 'bg-purple-100 text-purple-800' },
  ];

  const featuredReviews = [];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Honest Reviews for Smart Families
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We recommend products based on research, hands-on experience, industry trends, and advanced AI analysis. 
            Discover the best gear, gadgets, and tools for modern family life.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Browse Reviews <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Submit a Product
            </Button>
          </div>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Family-Focused</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Transparent AI Disclosure</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span>Trending Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link key={category.name} to={`/category/${category.name.toLowerCase().replace(' ', '-')}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="font-semibold mb-2">{category.name}</h3>
                    <Badge className={category.color}>{category.count} reviews</Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Reviews</h2>
            <Link to="/reviews" className="text-orange-600 hover:text-orange-700 flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredReviews.map((review) => (
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
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(review.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
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
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />
      
      <Footer />
    </div>
  );
};

export default Index;
