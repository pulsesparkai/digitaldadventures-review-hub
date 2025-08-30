import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Fuel, Users, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductImage from '@/components/ProductImage';

const YardCategory = () => {
  const featuredGuides = [
    {
      title: "Battery vs Gas Lawn Mowers: Which Wins in 2025?",
      description: "Complete comparison including 5-year cost analysis, runtime by yard size, and decision framework for homeowners.",
      path: "/yard/battery-vs-gas-lawn-mowers",
      image: "/images/battery-vs-gas-mowers-2025.jpg",
      badge: "🏆 FEATURED GUIDE",
      badgeColor: "bg-green-600"
    },
    {
      title: "Best Electric Lawn Mowers for 2025",
      description: "Top battery mower picks organized by yard size with runtime analysis and buying recommendations.",
      path: "/yard/best-electric-mowers-2025", 
      image: "/images/best-electric-mowers-2025.jpg",
      badge: "⚡ BUYER'S GUIDE",
      badgeColor: "bg-blue-600"
    },
    {
      title: "EGO vs Ryobi Leaf Blower Comparison",
      description: "Head-to-head comparison of the top battery-powered leaf blowers for yard cleanup.",
      path: "/yard/ego-vs-ryobi-leaf-blower",
      image: "/images/ego-vs-ryobi-leaf-blower.jpg", 
      badge: "🍂 COMPARISON",
      badgeColor: "bg-orange-600"
    }
  ];

  const popularTopics = [
    {
      name: "Lawn Mowers",
      description: "Electric vs gas mowers, buying guides, and maintenance tips",
      path: "/yard/battery-vs-gas-lawn-mowers",
      icon: "🚜"
    },
    {
      name: "Leaf Blowers", 
      description: "Battery vs gas blowers, power comparisons, and reviews",
      path: "/yard/ego-vs-ryobi-leaf-blower",
      icon: "🍃"
    },
    {
      name: "Garden Tools",
      description: "Essential tools for gardening and yard maintenance", 
      path: "/category/tools",
      icon: "🛠️"
    },
    {
      name: "Outdoor Projects",
      description: "DIY projects to transform your backyard space",
      path: "/projects/kid-safe-backyard-makeover",
      icon: "🏡"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Yard & Garden Guides - DigitalDadVentures</title>
        <meta name="description" content="Complete guides for yard and garden equipment including lawn mowers, leaf blowers, and outdoor tools. Expert reviews and buying advice for homeowners." />
        <meta name="keywords" content="yard equipment, lawn mowers, leaf blowers, garden tools, battery vs gas, electric mowers, yard maintenance" />
        <link rel="canonical" href="https://digitaldadventures.com/category/yard" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Breadcrumb */}
        <nav className="container mx-auto px-4 py-4">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <ChevronRight className="h-4 w-4" />
            <li className="text-foreground">Yard & Garden</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Yard & Garden Equipment Guides
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Expert reviews and buying guides for lawn mowers, leaf blowers, and outdoor equipment. 
                Make informed decisions with our comprehensive comparisons and real-world testing.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Guide */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-r from-green-50 to-blue-50">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="p-8">
                    <Badge className="mb-4 bg-green-600">🏆 MOST POPULAR</Badge>
                    <h2 className="text-3xl font-bold mb-4">Battery vs Gas Lawn Mowers: Complete 2025 Guide</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      The definitive comparison covering power, runtime, 5-year cost analysis, and decision framework 
                      to help you choose the right mower type for your yard size and lifestyle.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild size="lg">
                        <Link to="/yard/battery-vs-gas-lawn-mowers">
                          Read Complete Guide <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Zap className="h-4 w-4" />
                          <span>Battery Power</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Fuel className="h-4 w-4" />
                          <span>Gas Engine</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>Family-Focused</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <ProductImage
                      src="/images/battery-vs-gas-mowers-comparison.jpg"
                      alt="Battery vs Gas Lawn Mower Comparison Guide"
                      size="large"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* All Guides */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">All Yard & Garden Guides</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredGuides.map((guide, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <ProductImage
                      src={guide.image}
                      alt={guide.title}
                      size="large"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className={`mb-3 ${guide.badgeColor}`}>{guide.badge}</Badge>
                    <h3 className="text-xl font-bold mb-3">{guide.title}</h3>
                    <p className="text-muted-foreground mb-4">{guide.description}</p>
                    <Button asChild className="w-full">
                      <Link to={guide.path}>
                        Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Topics in Yard & Garden</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularTopics.map((topic, index) => (
                <Link key={index} to={topic.path}>
                  <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="text-4xl mb-2">{topic.icon}</div>
                      <CardTitle className="text-lg">{topic.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{topic.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* You Might Also Like */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">You Might Also Like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Solo Stove vs Breeo Fire Pits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete comparison of smokeless fire pits for outdoor entertaining.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/outdoor/solo-stove-vs-breeo">
                      Read Comparison <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Best Cordless Drills 2025</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete buying guide for cordless drills and outdoor projects.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/tools/best-cordless-drills-2025">
                      Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Kid-Safe Backyard Makeover</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Transform your yard into a family-friendly outdoor space.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/projects/kid-safe-backyard-makeover">
                      Read Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default YardCategory;