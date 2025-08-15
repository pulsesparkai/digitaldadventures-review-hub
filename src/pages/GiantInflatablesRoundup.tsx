import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ExternalLink, ArrowRight, Star, Filter, ChevronRight, Eye, Wind, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductImage from '@/components/ProductImage';

const GiantInflatablesRoundup = () => {
  const [sortBy, setSortBy] = useState('featured');
  const [filterSize, setFilterSize] = useState('all');

  const inflatables = [
    {
      id: 1,
      name: "Haunted Hill Farm 12-ft Pre-lit Inflatable Grim Reaper",
      price: "$199.00",
      originalPrice: "$249.00",
      affiliateLink: "https://shoplowes.me/3UxnCOe",
      image: "https://mobileimages.lowes.com/productimages/e46e38aa-1668-483c-942c-d0c0ff7bde7c/16990718.jpg",
      size: "12ft",
      sizeCategory: "large",
      theme: "scary",
      features: ["Pre-lit with 3 LEDs", "90-second setup", "Weather resistant", "Storage bag included"],
      setupTime: "5 minutes",
      powerDraw: "45W",
      bestFor: "Maximum scare factor and yard domination",
      description: "Towering inflatable Grim Reaper that commands attention with impressive LED lighting",
      badge: "Editor's Choice"
    },
    {
      id: 2,
      name: "Gemmy 6-ft Lighted Disney The Haunted Mansion Hitchhiking Ghosts Inflatable",
      price: "$99.98",
      originalPrice: "$129.99",
      affiliateLink: "https://shoplowes.me/4fy9FsU",
      image: "https://mobileimages.lowes.com/productimages/c3f26281-2bf0-4f86-9cdf-22cefef84649/49420451.jpg", 
      size: "6ft",
      sizeCategory: "medium",
      theme: "disney",
      features: ["Disney licensed", "Internal LEDs", "Iconic characters", "Weather resistant"],
      setupTime: "3 minutes",
      powerDraw: "25W", 
      bestFor: "Disney fans and family-friendly displays",
      description: "Authentic Disney Haunted Mansion characters beloved by kids and adults",
      badge: "Best Theme"
    },
    {
      id: 3,
      name: "Joyfy 8-ft LED Archway Pumpkin Halloween Inflatable", 
      price: "$59.98",
      originalPrice: "$79.99",
      affiliateLink: "https://shoplowes.me/4mHIGNU",
      image: "https://mobileimages.lowes.com/productimages/de53733a-4fbe-48d0-8782-872af324e6de/70622944.jpeg",
      size: "8ft",
      sizeCategory: "medium",
      theme: "family",
      features: ["LED soft glow", "Archway design", "Family-friendly", "Stakes included"],
      setupTime: "4 minutes",
      powerDraw: "20W",
      bestFor: "Welcoming entrance displays and trick-or-treaters",
      description: "Creates a magical entrance that welcomes guests with warm pumpkin glow",
      badge: "Best Value"
    }
  ];

  const bundles = [
    {
      name: "Spooky Starter Bundle",
      price: "$260-300",
      savings: "Save $40",
      items: [
        "Joyfy 8-ft Pumpkin Archway ($59.98)",
        "Tombstone Signs 10-pack ($16.86)", 
        "Fog Machine ($59.98)",
        "Extension cord and timer ($25)"
      ],
      description: "Perfect first-time Halloween display with welcoming yet spooky elements",
      ideal: "Small to medium yards, family-friendly neighborhoods"
    },
    {
      name: "Maximum Scare Package", 
      price: "$450-550",
      savings: "Save $75",
      items: [
        "Haunted Hill Farm 12-ft Grim Reaper ($199.00)",
        "Haunted Living 3.5-ft Kraken ($199.00)",
        "Fog Machine with timer ($79.98)",
        "Red LED spotlights ($45)"
      ],
      description: "Dominate your neighborhood with towering terror and unique centerpieces",
      ideal: "Large yards, maximum impact displays"
    },
    {
      name: "Disney Magic Collection",
      price: "$350-450", 
      savings: "Save $60",
      items: [
        "Disney Hitchhiking Ghosts Inflatable ($99.98)",
        "Disney Madame Leota Tombstone ($109.00)",
        "AtmosFX Jack-O-Lantern Jamboree ($49.98)",
        "Purple LED lighting kit ($35)"
      ],
      description: "Create an authentic Disney Haunted Mansion experience in your yard",
      ideal: "Disney fans, family-friendly magical displays"
    }
  ];

  const sizeGuide = [
    {
      size: "6-8 ft",
      description: "Perfect for smaller yards, porches, or as accent pieces",
      powerNeeds: "Standard outlet, 15-30W",
      spaceRequired: "4x4 ft minimum",
      bestFor: "Apartments, townhomes, accent decorating"
    },
    {
      size: "10-12 ft", 
      description: "Statement pieces that dominate yard displays",
      powerNeeds: "Dedicated circuit recommended, 40-60W",
      spaceRequired: "8x8 ft minimum", 
      bestFor: "Large yards, main focal points, maximum impact"
    }
  ];

  const setupTips = [
    {
      title: "Location Planning",
      tips: [
        "Choose level ground away from trees and power lines",
        "Ensure 15+ ft overhead clearance for large inflatables", 
        "Position near walkways for maximum trick-or-treater impact",
        "Consider neighbor sightlines and local HOA rules"
      ]
    },
    {
      title: "Power & Safety",
      tips: [
        "Use outdoor-rated extension cords and GFCI outlets",
        "Keep electrical connections elevated and dry",
        "Install timers to save energy and extend inflatable life",
        "Have backup power plan for outages during peak season"
      ]
    },
    {
      title: "Weather Protection",
      tips: [
        "Deflate during high winds (25+ mph sustained)",
        "Clear snow accumulation promptly to prevent damage",
        "Use UV protectant spray for extended season use",
        "Store in dry location when not in use"
      ]
    }
  ];

  const faqs = [
    {
      question: "How long do Halloween inflatables typically last?",
      answer: "Quality inflatables like those from Lowe's typically last 3-5 seasons with proper care. The LED lighting usually lasts longer than the fabric, making these a good long-term investment."
    },
    {
      question: "Can inflatables stay up 24/7 during Halloween season?",
      answer: "Yes, but using a timer extends their lifespan significantly. Most people run them dusk to midnight, then deflate overnight. This reduces wear and saves on electricity costs."
    },
    {
      question: "How much do inflatables add to electric bills?",
      answer: "Large 12ft inflatables use about 45W (similar to a small LED bulb). Running 6 hours nightly for October costs approximately $3-8 depending on local rates."
    },
    {
      question: "What's the setup time for large inflatables?",
      answer: "Most inflatables self-inflate in 90 seconds to 3 minutes. Total setup including positioning, staking, and electrical connection takes 5-10 minutes for experienced users."
    },
    {
      question: "Do I need special electrical setup?",
      answer: "Standard outdoor outlets work for most inflatables. Large displays may benefit from dedicated circuits. Always use GFCI protection and outdoor-rated cords."
    },
    {
      question: "How do inflatables handle wind and rain?",
      answer: "Modern inflatables are designed for outdoor use and handle normal weather well. Deflate during severe weather (25+ mph winds) to prevent damage."
    }
  ];

  const filteredInflatables = inflatables.filter(item => {
    if (filterSize === 'all') return true;
    return item.sizeCategory === filterSize;
  });

  const sortedInflatables = [...filteredInflatables].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'price-high': return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
      case 'size': return parseInt(b.size) - parseInt(a.size);
      default: return 0;
    }
  });

  // Schema markup
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Lowe's Giant Halloween Inflatables 2025",
    "description": "Comprehensive guide to the best large Halloween inflatables available at Lowe's",
    "itemListElement": inflatables.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": item.name,
        "description": item.description,
        "offers": {
          "@type": "Offer",
          "price": item.price.replace('$', ''),
          "priceCurrency": "USD"
        },
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://digitaldadventures.com"},
      {"@type": "ListItem", "position": 2, "name": "Outdoor", "item": "https://digitaldadventures.com/category/outdoor"},
      {"@type": "ListItem", "position": 3, "name": "Lowe's Halloween", "item": "https://digitaldadventures.com/lowes-halloween-decorations"},
      {"@type": "ListItem", "position": 4, "name": "Giant Inflatables Guide"}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Best Lowe's Giant Halloween Inflatables 2025: Top 3 Picks Reviewed</title>
        <meta name="description" content="Complete guide to Lowe's giant Halloween inflatables for 2025. Compare features, prices, and find the best options for your yard display." />
        <meta name="keywords" content="lowe's halloween inflatables, giant halloween decorations, halloween inflatable reviews, outdoor halloween inflatables, large halloween decorations" />
        <link rel="canonical" href="https://digitaldadventures.com/lowes-giant-halloween-inflatables" />
      </Helmet>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Breadcrumb */}
        <nav className="container mx-auto px-4 py-4">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <ChevronRight className="h-4 w-4" />
            <li><Link to="/category/outdoor" className="hover:text-primary">Outdoor</Link></li>
            <ChevronRight className="h-4 w-4" />
            <li><Link to="/lowes-halloween-decorations" className="hover:text-primary">Lowe's Halloween</Link></li>
            <ChevronRight className="h-4 w-4" />
            <li className="text-gray-900">Giant Inflatables Guide</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 to-orange-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Best Lowe's Giant Halloween Inflatables: 2025 Buyer's Guide
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto">
              Transform your yard in minutes with these show-stopping inflatable decorations. 
              Our comprehensive analysis covers the top picks from Lowe's 2025 collection, 
              with detailed comparisons, setup guides, and bundle recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://shoplowes.me/3UxnCOe" target="_blank" rel="noopener noreferrer">
                  Shop Giant Inflatables at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Badge variant="secondary" className="text-lg px-4 py-2">Available at 1,700+ Lowe's stores nationwide</Badge>
            </div>
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mx-4 my-8">
          <p className="text-sm text-amber-800">
            <strong>Affiliate Disclosure:</strong> This post contains affiliate links. We may earn a commission at no extra cost to you when you purchase through our links.
          </p>
        </div>

        {/* Filter and Sort */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-4">
                <Filter className="h-5 w-5 text-gray-500" />
                <Select value={filterSize} onValueChange={setFilterSize}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Filter by size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sizes</SelectItem>
                    <SelectItem value="medium">6-8 ft</SelectItem>
                    <SelectItem value="large">10-12 ft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    
                    <SelectItem value="size">Size: Largest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Top Picks Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top Inflatable Picks for 2025</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {sortedInflatables.map((item) => (
                <Card key={item.id} className="overflow-hidden relative flex flex-col h-full">
                  {item.badge && (
                    <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">{item.badge}</Badge>
                  )}
                  <div className="aspect-square bg-gray-100">
                    <ProductImage 
                      src={item.image} 
                      alt={`${item.name} - ${item.size} Halloween inflatable decoration at Lowe's with ${item.features.join(', ')}`}
                      className="w-full h-full"
                      size="medium"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold mb-2 line-clamp-2">{item.name}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{item.price}</div>
                        {item.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">{item.originalPrice}</div>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm flex-grow">{item.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                      <div><strong>Size:</strong> {item.size}</div>
                      <div><strong>Setup:</strong> {item.setupTime}</div>
                      <div><strong>Power:</strong> {item.powerDraw}</div>
                      <div><strong>Theme:</strong> {item.theme}</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {item.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{feature}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4 p-3 bg-gray-50 rounded text-xs">
                      <strong>Best For:</strong> {item.bestFor}
                    </div>
                    
                    <Button className="w-full mt-auto" asChild>
                      <a href={item.affiliateLink} target="_blank" rel="noopener noreferrer">
                        Get it at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Complete Comparison</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Features</TableHead>
                    <TableHead>Setup Time</TableHead>
                    <TableHead>Best For</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inflatables.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>{item.size}</TableCell>
                      <TableCell>{item.features.slice(0,2).join(', ')}</TableCell>
                      <TableCell>{item.setupTime}</TableCell>
                      <TableCell className="text-sm">{item.bestFor}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Size Guide */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Inflatable Size Guide</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {sizeGuide.map((guide, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{guide.size} Inflatables</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{guide.description}</p>
                    <div className="space-y-2 text-sm">
                      <div><strong>Power Needs:</strong> {guide.powerNeeds}</div>
                      <div><strong>Space Required:</strong> {guide.spaceRequired}</div>
                      <div><strong>Best For:</strong> {guide.bestFor}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bundle Packages */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Complete Display Bundles</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {bundles.map((bundle, index) => (
                <Card key={index} className="relative">
                  <Badge className="absolute top-4 right-4 bg-green-600">{bundle.savings}</Badge>
                  <CardHeader>
                    <CardTitle>{bundle.name}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{bundle.price}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm">{bundle.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Package Includes:</h4>
                      <ul className="space-y-1 text-sm">
                        {bundle.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <Badge variant="outline" className="mr-2 mt-0.5 text-xs">✓</Badge>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 bg-blue-50 rounded text-sm">
                      <strong>Ideal For:</strong> {bundle.ideal}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Setup Tips */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Setup & Maintenance Tips</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {setupTips.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      {index === 0 && <Eye className="h-5 w-5 mr-2 text-orange-600" />}
                      {index === 1 && <Zap className="h-5 w-5 mr-2 text-orange-600" />}
                      {index === 2 && <Wind className="h-5 w-5 mr-2 text-orange-600" />}
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {section.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start">
                          <Badge variant="outline" className="mr-2 mt-0.5 text-xs">•</Badge>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-orange-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Create an Amazing Halloween Display?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              These giant inflatables are available now at Lowe's stores nationwide. 
              Start with one centerpiece or go all-out with a complete bundle!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
                <a href="https://shoplowes.me/3UxnCOe" target="_blank" rel="noopener noreferrer">
                  Shop All Halloween Inflatables <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600" asChild>
                <Link to="/lowes-halloween-decorations">
                  View Complete Halloween Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Related Halloween Guides</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">
                    <Link to="/lowes-12ft-bone-collector-animatronic-review" className="text-orange-600 hover:text-orange-700">
                      12ft Bone Collector Review
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Detailed analysis of Lowe's flagship 12ft animatronic Halloween decoration</p>
                  <Link to="/lowes-12ft-bone-collector-animatronic-review" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                    Read Review →
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">
                    <Link to="/lowes-haunted-mansion-collection" className="text-orange-600 hover:text-orange-700">
                      Haunted Mansion Collection
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Complete guide to Disney's Haunted Mansion Halloween decorations</p>
                  <Link to="/lowes-haunted-mansion-collection" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                    Explore Collection →
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">
                    <Link to="/lowes-halloween-decorations" className="text-orange-600 hover:text-orange-700">
                      Complete Halloween Guide
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Ultimate guide to all the best Halloween decorations at Lowe's for 2025</p>
                  <Link to="/lowes-halloween-decorations" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                    View All →
                  </Link>
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

export default GiantInflatablesRoundup;