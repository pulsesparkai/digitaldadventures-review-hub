import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductImage from '@/components/ProductImage';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink, Home, ChevronRight } from 'lucide-react';
import { generateBreadcrumbStructuredData, generateCollectionPageStructuredData } from '@/utils/structuredData';

const Category = () => {
  const { category } = useParams();
  
  // Define all supported categories
  const categoryMap = {
    'kitchen': {
      title: 'Kitchen',
      description: 'Discover the best kitchen appliances, gadgets, and tools for modern cooking',
      icon: '🍳'
    },
    'fitness': {
      title: 'Fitness',
      description: 'Find top-rated fitness equipment and accessories for home workouts',
      icon: '💪'
    },
    'desk-gear': {
      title: 'Desk Gear',
      description: 'Essential tech gear and accessories for productive workspaces',
      icon: '💻'
    },
    'outdoor': {
      title: 'Outdoor',
      description: 'Complete guide to outdoor decorations, tools, and seasonal items',
      icon: '🏕️'
    },
    'tools': {
      title: 'Tools',
      description: 'Professional and DIY tools for home improvement projects',
      icon: '🔧'
    },
    'family-tech': {
      title: 'Family Tech',
      description: 'Smart devices and technology solutions for modern families',
      icon: '📱'
    }
  };

  // Halloween content for Outdoor category
  const halloweenContent = [
    {
      title: '🎃 Lowe\'s Halloween Decorations 2025',
      description: 'Complete guide to the best outdoor Halloween decorations from Lowe\'s incredible 2025 collection',
      link: '/lowes-halloween-decorations',
      badge: 'COMPLETE GUIDE',
      image: 'https://mobileimages.lowes.com/productimages/f0ed1bd3-5a72-480f-a909-35256aa2247d/72605872.jpeg'
    },
    {
      title: '12ft Bone Collector Review',
      description: 'In-depth analysis of Lowe\'s flagship $449 Halloween animatronic',
      link: '/lowes-12ft-bone-collector-animatronic-review',
      badge: 'FLAGSHIP REVIEW',
      image: 'https://mobileimages.lowes.com/productimages/f0ed1bd3-5a72-480f-a909-35256aa2247d/72605872.jpeg'
    },
    {
      title: 'Giant Halloween Inflatables',
      description: 'Complete buyer\'s guide to Lowe\'s inflatable Halloween decorations',
      link: '/lowes-giant-halloween-inflatables',
      badge: 'BUYER\'S GUIDE',
      image: 'https://mobileimages.lowes.com/productimages/e46e38aa-1668-483c-942c-d0c0ff7bde7c/16990718.jpg'
    },
    {
      title: 'Disney Haunted Mansion Collection',
      description: 'Authentic Disney theming for your Halloween display',
      link: '/lowes-haunted-mansion-collection',
      badge: 'DISNEY OFFICIAL',
      image: 'https://mobileimages.lowes.com/productimages/c3f26281-2bf0-4f86-9cdf-22cefef84649/49420451.jpg'
    },
    {
      title: 'Kraken Sea Monster Review',
      description: 'Unique alternative for haunted harbor themes',
      link: '/lowes-kraken-halloween-yard-decoration',
      badge: 'UNIQUE PICK',
      image: 'https://mobileimages.lowes.com/productimages/178de7ab-27e8-4d2b-aa1e-835d342b4a69/72605862.jpeg'
    },
    {
      title: 'Best Outdoor Decorations 2025',
      description: 'Ultimate guide to top picks across all categories',
      link: '/lowes-best-outdoor-halloween-decorations-2025',
      badge: 'TOP PICKS',
      image: 'https://mobileimages.lowes.com/productimages/a5360f9c-35ec-4a48-bc75-430b9e28e4cd/67929429.jpeg'
    }
  ];
  
  const currentCategory = categoryMap[category as keyof typeof categoryMap];
  
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const breadcrumbItems = [
    { name: 'Home', url: window.location?.origin || '' },
    { name: 'Categories', url: `${window.location?.origin}/categories` },
    { name: currentCategory?.title || 'Category', url: currentUrl }
  ];
  
  const structuredData = [
    generateBreadcrumbStructuredData(breadcrumbItems),
    ...(currentCategory ? [generateCollectionPageStructuredData({
      name: `${currentCategory.title} Products`,
      description: currentCategory.description,
      url: currentUrl,
      items: category === 'outdoor' ? halloweenContent.map(item => ({
        name: item.title,
        url: `${window.location?.origin}${item.link}`
      })) : []
    })] : [])
  ];

  const isOutdoorCategory = category === 'outdoor';
  
  // Handle invalid categories
  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-white">
        <SEO
          title="Category Not Found"
          description="The requested category was not found. Explore our available product categories."
          noIndex={true}
        />
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            The category "{category}" doesn't exist. Browse our available categories below.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto mb-8">
            {Object.entries(categoryMap).map(([key, cat]) => (
              <Link key={key} to={`/category/${key}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-2">{cat.icon}</div>
                    <h3 className="font-semibold text-sm">{cat.title}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${currentCategory.title} Products & Reviews`}
        description={`${currentCategory.description}. Find the best ${currentCategory.title.toLowerCase()} products through comprehensive reviews and analysis.`}
        canonicalUrl={currentUrl}
        structuredData={structuredData}
        keywords={`${currentCategory.title.toLowerCase()}, ${currentCategory.title.toLowerCase()} reviews, best ${currentCategory.title.toLowerCase()}, ${currentCategory.title.toLowerCase()} products`}
      />
      <Navbar />
        
        {/* Breadcrumb Navigation */}
        <nav className="bg-gray-50 py-3">
          <div className="container mx-auto px-4">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-primary flex items-center"><Home className="h-4 w-4 mr-1" />Home</Link></li>
              <ChevronRight className="h-4 w-4" />
              <li className="text-gray-900 font-medium">{currentCategory.title}</li>
            </ol>
          </div>
        </nav>
        
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{currentCategory.icon}</div>
            <h1 className="text-4xl font-bold mb-4">{currentCategory.title} Reviews</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentCategory.description}
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
                  <Button size="lg" asChild>
                    <a href="https://shoplowes.me/3V5TZUg" target="_blank" rel="noopener noreferrer">
                      Shop Halloween at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {halloweenContent.map((item, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
                      <div className="aspect-video">
                        <ProductImage
                          src={item.image}
                          alt={item.title}
                          size="medium"
                          className="rounded-t-lg"
                        />
                      </div>
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <Badge className="mb-3 bg-primary text-primary-foreground">{item.badge}</Badge>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm flex-grow">{item.description}</p>
                        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" variant="default">
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
                  : `${currentCategory.title} Reviews Coming Soon`
                }
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                {isOutdoorCategory 
                  ? "We're expanding our outdoor product reviews beyond Halloween decorations. Check back soon for reviews of patio furniture, grills, outdoor tools, and more!"
                  : `We're building comprehensive reviews for ${currentCategory.title.toLowerCase()} products. Our team is testing the latest items to bring you honest, family-focused recommendations.`
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline">
                  <Link to="/reviews">Browse All Reviews</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/newsletter">Get Notified When We Add Reviews</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Footer />
      </div>
    );
};

export default Category;
