
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Star, Search, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Reviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Kitchen', 'Fitness', 'Desk Gear', 'Outdoor', 'Tools', 'Family Tech', 'Disney'];

  const reviews = [
    {
      slug: 'lowes-halloween-decorations',
      title: '🎃 Lowe\'s Halloween Decorations: 2025 Ultimate Guide',
      excerpt: 'Transform your home into the ultimate Halloween destination with the most impressive outdoor decorations from Lowe\'s incredible 2025 collection.',
      category: 'Outdoor',
      rating: 4.8,
      date: '2025-08-14',
      isAI: false
    },
    {
      slug: 'lowes-12ft-bone-collector-animatronic-review',
      title: 'Lowe\'s 12ft Bone Collector Review: Worth $449?',
      excerpt: 'In-depth analysis of Lowe\'s flagship Halloween animatronic. Complete setup guide, features breakdown, and value comparison.',
      category: 'Outdoor',
      rating: 4.8,
      date: '2025-08-14',
      isAI: false
    },
    {
      slug: 'lowes-giant-halloween-inflatables',
      title: 'Best Lowe\'s Giant Halloween Inflatables 2025',
      excerpt: 'Complete buyer\'s guide to Lowe\'s inflatable Halloween decorations. Compare features, prices, and find the best options for your yard.',
      category: 'Outdoor',
      rating: 4.6,
      date: '2025-08-14',
      isAI: false
    },
    {
      slug: 'lowes-haunted-mansion-collection',
      title: 'Disney Haunted Mansion Halloween Collection Guide',
      excerpt: 'Complete guide to Disney\'s Haunted Mansion Halloween decorations available at Lowe\'s. Create authentic Disney magic in your yard.',
      category: 'Disney',
      rating: 4.6,
      date: '2025-08-14',
      isAI: false
    },
    {
      slug: 'lowes-kraken-halloween-yard-decoration',
      title: 'Lowe\'s Kraken Halloween Decoration Review',
      excerpt: 'Detailed review of Lowe\'s unique 3.5ft Kraken decoration. Features, setup guide, and creating a Haunted Harbor theme.',
      category: 'Outdoor',
      rating: 4.3,
      date: '2025-08-14',
      isAI: false
    },
    {
      slug: 'lowes-best-outdoor-halloween-decorations-2025',
      title: 'Best Lowe\'s Outdoor Halloween Decorations 2025',
      excerpt: 'Ultimate buyer\'s guide to Lowe\'s outdoor Halloween decorations. Top picks across all categories with prices, reviews, and setup tips.',
      category: 'Outdoor',
      rating: 4.7,
      date: '2025-08-14',
      isAI: false
    }
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || review.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
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

        {/* Halloween Seasonal Spotlight */}
        <div className="mb-12 bg-gradient-to-br from-orange-50 to-purple-50 rounded-lg p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🎃 SEASONAL SPOTLIGHT
            </div>
            <h2 className="text-2xl font-bold mb-2">Halloween Decorations 2025</h2>
            <p className="text-gray-600">Our complete guide to the best Halloween decorations from Lowe's</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/lowes-halloween-decorations">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">🏆</div>
                  <h3 className="font-semibold mb-1">Complete Guide</h3>
                  <p className="text-sm text-gray-600">Everything Halloween 2025</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/lowes-12ft-bone-collector-animatronic-review">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">💀</div>
                  <h3 className="font-semibold mb-1">Bone Collector</h3>
                  <p className="text-sm text-gray-600">$449 Animatronic Review</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/lowes-haunted-mansion-collection">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">🏰</div>
                  <h3 className="font-semibold mb-1">Disney Collection</h3>
                  <p className="text-sm text-gray-600">Haunted Mansion Theme</p>
                </CardContent>
              </Card>
            </Link>
          </div>
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
          {filteredReviews.map((review) => (
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
                    <span className="text-sm text-gray-500">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">No reviews found matching your criteria.</p>
            <Button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Reviews;
