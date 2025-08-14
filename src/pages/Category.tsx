import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Category = () => {
  const { category } = useParams();
  
  // Halloween content for Outdoor category
  const halloweenContent = [
    {
      title: '🎃 Lowe\'s Halloween Decorations 2025',
      description: 'Complete guide to the best outdoor Halloween decorations from Lowe\'s incredible 2025 collection',
      link: '/lowes-halloween-decorations',
      badge: 'COMPLETE GUIDE',
      image: 'https://mobileimages.lowes.com/productimages/9b6a0a7e-0b4d-4a6f-b4a5-0c8f3d7f0e4c/64649649.jpg'
    },
    {
      title: '12ft Bone Collector Review',
      description: 'In-depth analysis of Lowe\'s flagship $449 Halloween animatronic',
      link: '/lowes-12ft-bone-collector-animatronic-review',
      badge: 'FLAGSHIP REVIEW',
      image: 'https://mobileimages.lowes.com/productimages/9b6a0a7e-0b4d-4a6f-b4a5-0c8f3d7f0e4c/64649649.jpg'
    },
    {
      title: 'Giant Halloween Inflatables',
      description: 'Complete buyer\'s guide to Lowe\'s inflatable Halloween decorations',
      link: '/lowes-giant-halloween-inflatables',
      badge: 'BUYER\'S GUIDE',
      image: 'https://mobileimages.lowes.com/productimages/1f2d3e4a-5b6c-4e6f-9d7e-3f4b5d6g7h8i/64649651.jpg'
    },
    {
      title: 'Disney Haunted Mansion Collection',
      description: 'Authentic Disney theming for your Halloween display',
      link: '/lowes-haunted-mansion-collection',
      badge: 'DISNEY OFFICIAL',
      image: 'https://mobileimages.lowes.com/productimages/6c7d8e9f-0g1h-2i3j-4k5l-6m7n8o9p0q1r/64649654.jpg'
    },
    {
      title: 'Kraken Sea Monster Review',
      description: 'Unique alternative for haunted harbor themes',
      link: '/lowes-kraken-halloween-yard-decoration',
      badge: 'UNIQUE PICK',
      image: 'https://mobileimages.lowes.com/productimages/9i0j1k2l-3m4n-5o6p-7q8r9s0t1u2v/64649657.jpg'
    },
    {
      title: 'Best Outdoor Decorations 2025',
      description: 'Ultimate guide to top picks across all categories',
      link: '/lowes-best-outdoor-halloween-decorations-2025',
      badge: 'TOP PICKS',
      image: 'https://mobileimages.lowes.com/productimages/1f2d3e4a-5b6c-4e6f-9d7e-3f4b5d6g7h8i/64649651.jpg'
    }
  ];
  
  const isOutdoorCategory = category === 'outdoor';
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 capitalize">
            {category?.replace('-', ' ')} Reviews
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best {category?.replace('-', ' ')} products through our honest reviews and analysis.
          </p>
        </div>

        {isOutdoorCategory && (
          <>
            {/* Halloween Seasonal Promotion */}
            <section className="mb-12 bg-gradient-to-br from-orange-50 to-purple-50 rounded-lg p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  🎃 HALLOWEEN 2025 SPOTLIGHT
                </div>
                <h2 className="text-3xl font-bold mb-4">Ultimate Halloween Decorations Guide</h2>
                <p className="text-xl text-gray-600 mb-6">
                  Transform your outdoor space with Lowe's best Halloween decorations for 2025
                </p>
                <Button size="lg" asChild className="bg-orange-600 hover:bg-orange-700">
                  <a href="https://shoplowes.me/3V5TZUg" target="_blank" rel="noopener noreferrer">
                    Shop Halloween at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {halloweenContent.map((item, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-gray-100">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-orange-600">{item.badge}</Badge>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                      <Button asChild className="w-full" variant="outline">
                        <Link to={item.link}>
                          Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Regular Category Content */}
        <Card>
          <CardHeader>
            <CardTitle>
              {isOutdoorCategory 
                ? "More Outdoor Reviews Coming Soon" 
                : "Category Page (In Development)"
              }
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              {isOutdoorCategory 
                ? "We're expanding our outdoor product reviews beyond Halloween decorations. Check back soon for reviews of patio furniture, grills, outdoor tools, and more!"
                : `This category page is currently being built. Soon you'll find all our ${category} reviews, comparisons, and buying guides here.`
              }
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Category;