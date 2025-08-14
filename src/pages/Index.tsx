
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ArrowRight, TrendingUp, Users, Shield, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';

const Index = () => {
  const categories = [
    { name: 'Kitchen', icon: '🍳', color: 'bg-orange-100 text-orange-800' },
    { name: 'Fitness', icon: '💪', color: 'bg-green-100 text-green-800' },
    { name: 'Desk Gear', icon: '💻', color: 'bg-blue-100 text-blue-800' },
    { name: 'Outdoor 🎃', icon: '🏕️', color: 'bg-emerald-100 text-emerald-800' },
    { name: 'Tools', icon: '🔧', color: 'bg-gray-100 text-gray-800' },
    { name: 'Family Tech', icon: '📱', color: 'bg-purple-100 text-purple-800' },
  ];

  const featuredReviews = [
    {
      title: "🎃 Lowe's Halloween Decorations 2025",
      description: "Ultimate guide to the best outdoor Halloween decorations", 
      category: "Seasonal",
      rating: 4.8,
      link: "/lowes-halloween-decorations",
      image: "https://mobileimages.lowes.com/productimages/9b6a0a7e-0b4d-4a6f-b4a5-0c8f3d7f0e4c/64649649.jpg",
      badge: "🔥 TRENDING"
    },
    {
      title: "12ft Bone Collector Review",
      description: "Worth the $449? Complete analysis of Lowe's flagship animatronic",
      category: "Halloween", 
      rating: 4.8,
      link: "/lowes-12ft-bone-collector-animatronic-review",
      image: "https://mobileimages.lowes.com/productimages/9b6a0a7e-0b4d-4a6f-b4a5-0c8f3d7f0e4c/64649649.jpg",
      badge: "IN-DEPTH"
    },
    {
      title: "Disney Haunted Mansion Collection",
      description: "Create authentic Disney magic in your yard",
      category: "Disney",
      rating: 4.6, 
      link: "/lowes-haunted-mansion-collection",
      image: "https://mobileimages.lowes.com/productimages/6c7d8e9f-0g1h-2i3j-4k5l-6m7n8o9p0q1r/64649654.jpg",
      badge: "OFFICIAL"
    }
  ];

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

      {/* Halloween Seasonal Promotion */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🎃 SEASONAL SPOTLIGHT
            </div>
            <h2 className="text-3xl font-bold mb-4">Ultimate Halloween Decorations Guide</h2>
            <p className="text-xl text-gray-600 mb-8">
              Transform your home with Lowe's best Halloween decorations for 2025. From 12ft animatronics to Disney collections.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-100">
                <img 
                  src="https://mobileimages.lowes.com/productimages/9b6a0a7e-0b4d-4a6f-b4a5-0c8f3d7f0e4c/64649649.jpg"
                  alt="Lowe's Halloween Decorations Guide"
                  className="w-full h-full object-cover"
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
              <div className="aspect-video bg-gray-100">
                <img 
                  src="https://mobileimages.lowes.com/productimages/6c7d8e9f-0g1h-2i3j-4k5l-6m7n8o9p0q1r/64649654.jpg"
                  alt="Disney Haunted Mansion Halloween Collection"
                  className="w-full h-full object-cover"
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
              <div className="aspect-video bg-gray-100">
                <img 
                  src="https://mobileimages.lowes.com/productimages/1f2d3e4a-5b6c-4e6f-9d7e-3f4b5d6g7h8i/64649651.jpg"
                  alt="Best Halloween Decorations 2025"
                  className="w-full h-full object-cover"
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
            <Button size="lg" asChild className="bg-orange-600 hover:bg-orange-700">
              <a href="https://shoplowes.me/3V5TZUg" target="_blank" rel="noopener noreferrer">
                Shop Halloween at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
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
              <Link key={review.link} to={review.link}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <div className="aspect-video bg-gray-200 rounded-t-lg">
                    <img 
                      src={review.image} 
                      alt={review.title}
                      className="w-full h-full object-cover rounded-t-lg"
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
