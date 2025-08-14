import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ExternalLink, ArrowRight, Star, Calendar, DollarSign, ChevronRight, Trophy, Zap, Users, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BestOutdoorDecorations = () => {
  const [budgetFilter, setBudgetFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const allProducts = [
    {
      id: 1,
      name: "Haunted Living 12-ft Talking LED Bone Collector Animatronic",
      price: 449.00,
      category: "animatronics",
      budgetTier: "premium",
      affiliateLink: "https://shoplowes.me/3V5TZUg",
      image: "https://mobileimages.lowes.com/productimages/9b6a0a7e-0b4d-4a6f-b4a5-0c8f3d7f0e4c/64649649.jpg",
      rating: 4.8,
      reviews: 234,
      setupTime: "45-60 min",
      scareLevel: "Maximum",
      bestFor: "Large yards, maximum impact",
      badge: "Overall Best",
      features: ["12ft height", "LED eyes", "Motion activated", "Talking features"]
    },
    {
      id: 2,
      name: "Haunted Hill Farm 12-ft Pre-lit Inflatable Grim Reaper",
      price: 199.00,
      category: "inflatables", 
      budgetTier: "mid",
      affiliateLink: "https://shoplowes.me/3UxnCOe",
      image: "https://mobileimages.lowes.com/productimages/1f2d3e4a-5b6c-4e6f-9d7e-3f4b5d6g7h8i/64649651.jpg",
      rating: 4.5,
      reviews: 156,
      setupTime: "5 min",
      scareLevel: "High",
      bestFor: "Quick setup, impressive height",
      badge: "Best Inflatable",
      features: ["12ft height", "Pre-lit LEDs", "90-second setup", "Weather resistant"]
    },
    {
      id: 3,
      name: "Disney 6-ft The Haunted Mansion Musical Headless Knight Animatronic",
      price: 329.00,
      category: "themed",
      budgetTier: "mid",
      affiliateLink: "https://shoplowes.me/45yzBjt", 
      image: "https://mobileimages.lowes.com/productimages/6c7d8e9f-0g1h-2i3j-4k5l-6m7n8o9p0q1r/64649654.jpg",
      rating: 4.6,
      reviews: 87,
      setupTime: "30 min",
      scareLevel: "Medium",
      bestFor: "Disney fans, themed displays",
      badge: "Best Themed",
      features: ["Disney licensed", "Musical", "Authentic details", "6ft height"]
    },
    {
      id: 4,
      name: "Haunted Living 3.5-ft LED Kraken Monster Yard Decoration",
      price: 199.00,
      category: "unique",
      budgetTier: "mid", 
      affiliateLink: "https://shoplowes.me/417a5AN",
      image: "https://mobileimages.lowes.com/productimages/9i0j1k2l-3m4n-5o6p-7q8r9s0t1u2v/64649657.jpg",
      rating: 4.3,
      reviews: 89,
      setupTime: "20 min",
      scareLevel: "Medium",
      bestFor: "Unique themes, sea monster displays",
      badge: "Most Unique",
      features: ["LED eyes", "Poseable tentacles", "Unique theme", "Weather resistant"]
    },
    {
      id: 5,
      name: "Joyfy 8-ft LED Archway Pumpkin Halloween Inflatable",
      price: 59.98,
      category: "inflatables",
      budgetTier: "budget",
      affiliateLink: "https://shoplowes.me/4mHIGNU",
      image: "https://mobileimages.lowes.com/productimages/4a5b6c7d-8e9f-0g1h-2i3j-4k5l6m7n8o9p/64649652.jpg",
      rating: 4.3,
      reviews: 134,
      setupTime: "3 min", 
      scareLevel: "Family",
      bestFor: "Family-friendly, budget displays",
      badge: "Best Value",
      features: ["Archway design", "LED lighting", "Family-friendly", "Quick setup"]
    },
    {
      id: 6,
      name: "Haunted Living 10-ft Poseable Skeleton Decoration",
      price: 129.00,
      category: "animatronics",
      budgetTier: "budget",
      affiliateLink: "https://shoplowes.me/47tOTIT",
      image: "https://mobileimages.lowes.com/productimages/8e3b5c97-1f0d-4f0f-8c0e-82a4b2d5f8f9/64649650.jpg",
      rating: 4.6,
      reviews: 189,
      setupTime: "15 min",
      scareLevel: "High",
      bestFor: "Budget-conscious, large impact",
      badge: "Budget Pick",
      features: ["10ft height", "Poseable", "No power needed", "Collapsible"]
    },
    {
      id: 7,
      name: "Disney 2-ft Madame Leota Tombstone Animatronic",
      price: 109.00,
      category: "themed",
      budgetTier: "budget", 
      affiliateLink: "https://shoplowes.me/472zrUd",
      image: "https://mobileimages.lowes.com/productimages/7r8s9t0u-1v2w-3x4y-5z6a7b8c9d0e/64649655.jpg",
      rating: 4.8,
      reviews: 143,
      setupTime: "5 min",
      scareLevel: "Medium",
      bestFor: "Disney fans, compact spaces",
      badge: "Fan Favorite",
      features: ["Talking", "Eyes flash", "Sound activated", "Battery operated"]
    },
    {
      id: 8,
      name: "HoliScapes AtmosFX Jack-O-Lantern Jamboree Digital Decoration",
      price: 49.98,
      category: "tech",
      budgetTier: "budget",
      affiliateLink: "https://shoplowes.me/45MjsZb",
      image: "https://mobileimages.lowes.com/productimages/0v1w2x3y-4z5a-6b7c-8d9e0f1g2h3i/64649658.jpg",
      rating: 4.4,
      reviews: 67,
      setupTime: "10 min",
      scareLevel: "Family", 
      bestFor: "Tech lovers, projection effects",
      badge: "Tech Innovation",
      features: ["Digital projection", "8 scenes", "USB/DVD", "Family-friendly"]
    }
  ];

  const budgetBreakdown = [
    {
      range: "Under $75",
      description: "Perfect starter pieces and accent decorations",
      recommendations: ["AtmosFX Digital Decoration ($49.98)", "Pumpkin Archway Inflatable ($59.98)", "Tombstone sets ($16.86)"],
      ideal: "First-time decorators, budget-conscious families, accent pieces"
    },
    {
      range: "$75-200", 
      description: "Mid-tier options with great impact",
      recommendations: ["10ft Poseable Skeleton ($129)", "Madame Leota Tombstone ($109)", "Grim Reaper Inflatable ($199)"],
      ideal: "Balanced budget and impact, most popular price range"
    },
    {
      range: "$200-350",
      description: "Premium decorations for serious displays", 
      recommendations: ["Headless Knight ($329)", "LED Kraken ($199)", "Disney Caretaker ($249)"],
      ideal: "Disney fans, unique themes, premium quality seekers"
    },
    {
      range: "$350+",
      description: "Ultimate centerpiece decorations",
      recommendations: ["12ft Bone Collector ($449)", "Complete themed collections ($500+)"],
      ideal: "Maximum impact, large yards, serious Halloween enthusiasts"
    }
  ];

  const seasonalTimeline = [
    {
      month: "July",
      availability: "Limited Preview",
      pricing: "MSRP",
      strategy: "Research and plan your display",
      tip: "Sign up for Lowe's alerts for early access notifications"
    },
    {
      month: "August", 
      availability: "Full Launch",
      pricing: "MSRP",
      strategy: "Buy popular items immediately - peak selection",
      tip: "This is when Bone Collector and Disney items first arrive"
    },
    {
      month: "September",
      availability: "Peak Season",
      pricing: "MSRP", 
      strategy: "Last chance for full selection",
      tip: "Popular animatronics start selling out mid-month"
    },
    {
      month: "October 1-15",
      availability: "Limited Stock",
      pricing: "MSRP",
      strategy: "Focus on inflatables and smaller items",
      tip: "Large animatronics often sold out by now"
    },
    {
      month: "October 16-31",
      availability: "Clearance Items",
      pricing: "25-50% off",
      strategy: "Grab deals for next year",
      tip: "Perfect time to buy for next year's display"
    },
    {
      month: "November+",
      availability: "Deep Clearance", 
      pricing: "50-75% off",
      strategy: "Stock up for next year",
      tip: "Best prices but very limited selection"
    }
  ];

  const completeSceneBundles = [
    {
      name: "Starter Spook Setup",
      budget: "$200-300",
      description: "Perfect first Halloween display with immediate impact",
      items: [
        "10ft Poseable Skeleton ($129)",
        "Pumpkin Archway Inflatable ($59.98)", 
        "Basic lighting kit ($35)",
        "Tombstone signs ($16.86)"
      ],
      coverage: "Small to medium yard (15x20 ft)",
      difficulty: "Beginner",
      impact: "High"
    },
    {
      name: "Family Halloween Spectacular", 
      budget: "$400-600",
      description: "Balanced scary and family-friendly elements",
      items: [
        "Disney Headless Knight ($329)",
        "Madame Leota Tombstone ($109)",
        "AtmosFX Projection ($49.98)",
        "Purple LED lighting ($45)",
        "Fog machine ($59.98)"
      ],
      coverage: "Medium yard (20x25 ft)",
      difficulty: "Intermediate",
      impact: "Maximum"
    },
    {
      name: "Ultimate Scare Experience",
      budget: "$800-1200",
      description: "Dominate your neighborhood with professional-level display", 
      items: [
        "12ft Bone Collector ($449)",
        "12ft Grim Reaper Inflatable ($199)",
        "LED Kraken ($199)",
        "Professional lighting system ($150)",
        "Multiple fog machines ($120)",
        "Sound system ($85)"
      ],
      coverage: "Large yard (25x40 ft)",
      difficulty: "Advanced", 
      impact: "Legendary"
    },
    {
      name: "Disney Haunted Mansion Estate",
      budget: "$650-850", 
      description: "Complete Disney Haunted Mansion experience",
      items: [
        "Headless Knight ($329)",
        "Madame Leota Tombstone ($109)",
        "Disney Caretaker ($249)",
        "Hitchhiking Ghosts Inflatable ($99.98)",
        "AtmosFX Projection ($49.98)",
        "Themed lighting ($65)"
      ],
      coverage: "Medium to large yard (20x30 ft)",
      difficulty: "Intermediate",
      impact: "Magical"
    }
  ];

  const setupDifficultyGuide = [
    {
      level: "Beginner (30 min or less)",
      products: ["All inflatables", "AtmosFX Digital Decoration", "Madame Leota Tombstone"],
      requirements: "Basic tools, one person",
      powerNeeds: "Standard outlets"
    },
    {
      level: "Intermediate (30-60 min)",
      products: ["10ft Poseable Skeleton", "LED Kraken", "Disney Caretaker"],
      requirements: "Basic tools, two people recommended", 
      powerNeeds: "Multiple outlets, extension cords"
    },
    {
      level: "Advanced (60+ min)",
      products: ["12ft Bone Collector", "Disney Headless Knight", "Complete scene setups"],
      requirements: "Tools, two people, planning",
      powerNeeds: "Dedicated circuits, professional-grade cords"
    }
  ];

  const faqs = [
    {
      question: "When should I start shopping for Halloween decorations at Lowe's?",
      answer: "August is ideal for the best selection. Popular items like the Bone Collector and Disney pieces arrive in early August and sell out quickly. For deals, shop late October for next year."
    },
    {
      question: "Which decorations give the biggest impact for the price?",
      answer: "The 10ft Poseable Skeleton ($129) and 12ft Grim Reaper Inflatable ($199) offer exceptional height and visibility for mid-range prices. For maximum impact, the 12ft Bone Collector ($449) is unmatched."
    },
    {
      question: "Can I mix different themes together?",
      answer: "Absolutely! The LED Kraken pairs surprisingly well with traditional skeletons, and Disney pieces can complement non-Disney items. Focus on color coordination and lighting for cohesive looks."
    },
    {
      question: "How much do these decorations add to my electric bill?",
      answer: "Most items use 15-45 watts (similar to LED bulbs). Running a large display 6 hours nightly for October typically adds $5-15 to your electric bill, depending on local rates."
    },
    {
      question: "What's the best strategy for storage after Halloween?",
      answer: "Invest in plastic storage bins and label everything. Animatronics often break down into smaller pieces. Store in climate-controlled areas and remove batteries from battery-operated items."
    },
    {
      question: "Are Lowe's Halloween decorations better than Home Depot's?",
      answer: "Lowe's generally offers superior animatronic quality, exclusive Disney licensing, and better seasonal customer support. Their Haunted Living brand consistently receives higher customer ratings than competitors."
    }
  ];

  const filteredProducts = allProducts.filter(product => {
    const budgetMatch = budgetFilter === 'all' || product.budgetTier === budgetFilter;
    const categoryMatch = categoryFilter === 'all' || product.category === categoryFilter;
    return budgetMatch && categoryMatch;
  });

  // Schema markup
  const guideSchema = {
    "@context": "https://schema.org",
    "@type": "Guide",
    "name": "Best Lowe's Outdoor Halloween Decorations 2025: Complete Buyer's Guide",
    "description": "Comprehensive guide to the best outdoor Halloween decorations available at Lowe's for 2025, including animatronics, inflatables, and themed collections.",
    "author": {
      "@type": "Organization",
      "name": "DigitalDadVentures"
    },
    "datePublished": "2025-08-14",
    "about": allProducts.map(product => ({
      "@type": "Product",
      "name": product.name,
      "offers": {
        "@type": "Offer",
        "price": product.price,
        "priceCurrency": "USD"
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
      {"@type": "ListItem", "position": 4, "name": "Best Outdoor Decorations 2025"}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Best Lowe's Outdoor Halloween Decorations 2025: Complete Buyer's Guide</title>
        <meta name="description" content="Ultimate guide to Lowe's outdoor Halloween decorations for 2025. Top picks across all categories with prices, reviews, and setup tips." />
        <meta name="keywords" content="best lowe's halloween decorations 2025, outdoor halloween decorations, halloween buying guide, lowe's halloween animatronics, halloween decoration reviews" />
        <link rel="canonical" href="https://digitaldadventures.com/lowes-best-outdoor-halloween-decorations-2025" />
      </Helmet>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Breadcrumb */}
        <nav className="container mx-auto px-4 py-4">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
            <ChevronRight className="h-4 w-4" />
            <li><Link to="/category/outdoor" className="hover:text-orange-600">Outdoor</Link></li>
            <ChevronRight className="h-4 w-4" />
            <li><Link to="/lowes-halloween-decorations" className="hover:text-orange-600">Lowe's Halloween</Link></li>
            <ChevronRight className="h-4 w-4" />
            <li className="text-gray-900">Best Outdoor Decorations 2025</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <Trophy className="h-16 w-16 mx-auto mb-4 text-orange-300" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Best Lowe's Outdoor Halloween Decorations 2025: Complete Buyer's Guide
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto">
              The ultimate resource for creating spectacular Halloween displays. We've analyzed every major decoration 
              at Lowe's to bring you the definitive guide to 2025's best outdoor Halloween pieces, complete with 
              pricing, setup guides, and scene-building strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
                <a href="https://shoplowes.me/3V5TZUg" target="_blank" rel="noopener noreferrer">
                  Shop Top Picks at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Badge variant="secondary" className="text-lg px-4 py-2">Updated August 2025</Badge>
            </div>
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mx-4 my-8">
          <p className="text-sm text-amber-800">
            <strong>Affiliate Disclosure:</strong> This post contains affiliate links. We may earn a commission at no extra cost to you when you purchase through our links.
          </p>
        </div>

        {/* Top 5 Overall Picks */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">2025 Top Picks by Category</h2>
            
            <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-6 mb-12">
              {allProducts.slice(0, 5).map((product) => (
                <Card key={product.id} className="relative overflow-hidden">
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 z-10 bg-orange-600 text-xs">{product.badge}</Badge>
                  )}
                  <div className="aspect-square bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={`${product.name} - ${product.bestFor}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-sm mb-2 line-clamp-2">{product.name}</h3>
                    <div className="text-lg font-bold text-orange-600 mb-2">${product.price}</div>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 mr-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">{product.rating}</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">{product.bestFor}</p>
                    <Button size="sm" className="w-full text-xs" asChild>
                      <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                        Get it at Lowe's <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Filters and Product Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex items-center gap-4">
                <span className="font-semibold">Filter by:</span>
                <Select value={budgetFilter} onValueChange={setBudgetFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Budgets</SelectItem>
                    <SelectItem value="budget">Under $150</SelectItem>
                    <SelectItem value="mid">$150-300</SelectItem>
                    <SelectItem value="premium">$300+</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="animatronics">Animatronics</SelectItem>
                    <SelectItem value="inflatables">Inflatables</SelectItem>
                    <SelectItem value="themed">Disney/Themed</SelectItem>
                    <SelectItem value="unique">Unique Items</SelectItem>
                    <SelectItem value="tech">Tech/Digital</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="relative overflow-hidden">
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 z-10 bg-orange-600">{product.badge}</Badge>
                  )}
                  <div className="aspect-square bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={`${product.name} - ${product.bestFor}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-2xl font-bold text-orange-600">${product.price}</div>
                      <Badge variant="outline">{product.category}</Badge>
                    </div>
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{product.rating} ({product.reviews})</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                      <div><strong>Setup:</strong> {product.setupTime}</div>
                      <div><strong>Scare:</strong> {product.scareLevel}</div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{product.bestFor}</p>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{feature}</Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full" asChild>
                      <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                        Get it at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Budget Breakdown */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Budget Planning Guide</h2>
            <div className="grid lg:grid-cols-4 gap-6">
              {budgetBreakdown.map((budget, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                      {budget.range}
                    </CardTitle>
                    <CardDescription>{budget.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Top Recommendations:</h4>
                      <ul className="space-y-1 text-sm">
                        {budget.recommendations.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <Badge variant="outline" className="mr-2 mt-0.5 text-xs">•</Badge>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 bg-gray-50 rounded text-sm">
                      <strong>Ideal For:</strong> {budget.ideal}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Seasonal Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">2025 Halloween Shopping Timeline</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Month</TableHead>
                    <TableHead>Availability</TableHead>
                    <TableHead>Pricing</TableHead>
                    <TableHead>Strategy</TableHead>
                    <TableHead>Pro Tip</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {seasonalTimeline.map((period, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{period.month}</TableCell>
                      <TableCell>{period.availability}</TableCell>
                      <TableCell>{period.pricing}</TableCell>
                      <TableCell>{period.strategy}</TableCell>
                      <TableCell className="text-sm">{period.tip}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Complete Scene Bundles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Complete Display Bundles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {completeSceneBundles.map((bundle, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <CardTitle>{bundle.name}</CardTitle>
                    <div className="text-2xl font-bold text-orange-600">{bundle.budget}</div>
                    <CardDescription>{bundle.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                      <div><strong>Coverage:</strong> {bundle.coverage}</div>
                      <div><strong>Difficulty:</strong> {bundle.difficulty}</div>
                      <div><strong>Impact:</strong> {bundle.impact}</div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Complete Package:</h4>
                      <ul className="space-y-1 text-sm">
                        {bundle.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <Badge variant="outline" className="mr-2 mt-0.5 text-xs">✓</Badge>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Setup Difficulty Guide */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Setup Difficulty Guide</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {setupDifficultyGuide.map((guide, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      {index === 0 && <Users className="h-5 w-5 mr-2 text-green-600" />}
                      {index === 1 && <Zap className="h-5 w-5 mr-2 text-yellow-600" />}
                      {index === 2 && <Shield className="h-5 w-5 mr-2 text-red-600" />}
                      {guide.level}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Products:</h4>
                        <ul className="text-sm space-y-1">
                          {guide.products.map((product, productIndex) => (
                            <li key={productIndex}>• {product}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-sm">
                        <div><strong>Requirements:</strong> {guide.requirements}</div>
                        <div><strong>Power Needs:</strong> {guide.powerNeeds}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Master Comparison Table */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Master Comparison Table</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Setup</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Best For</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700">
                          {product.name} <ExternalLink className="inline h-3 w-3 ml-1" />
                        </a>
                      </TableCell>
                      <TableCell>${product.price}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.setupTime}</TableCell>
                      <TableCell>{product.rating}/5 ⭐</TableCell>
                      <TableCell className="text-sm">{product.bestFor}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Create the Ultimate Halloween Display?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start with one centerpiece or go all-out with a complete bundle. 
              These decorations are available now at 1,700+ Lowe's stores nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
                <a href="https://shoplowes.me/3V5TZUg" target="_blank" rel="noopener noreferrer">
                  Shop All Halloween Decorations <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600" asChild>
                <Link to="/lowes-halloween-decorations">
                  View Complete Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Detailed Product Guides</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">
                    <Link to="/lowes-12ft-bone-collector-animatronic-review" className="text-orange-600 hover:text-orange-700">
                      Bone Collector Review
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Complete analysis of the flagship $449 animatronic</p>
                  <Link to="/lowes-12ft-bone-collector-animatronic-review" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                    Read Review →
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">
                    <Link to="/lowes-giant-halloween-inflatables" className="text-orange-600 hover:text-orange-700">
                      Giant Inflatables Guide
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Complete roundup with comparison tables and tips</p>
                  <Link to="/lowes-giant-halloween-inflatables" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                    View Guide →
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">
                    <Link to="/lowes-haunted-mansion-collection" className="text-orange-600 hover:text-orange-700">
                      Disney Collection
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Complete Disney Haunted Mansion themed guide</p>
                  <Link to="/lowes-haunted-mansion-collection" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                    Explore Collection →
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">
                    <Link to="/lowes-kraken-halloween-yard-decoration" className="text-orange-600 hover:text-orange-700">
                      Kraken Sea Monster
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Unique alternative for haunted harbor themes</p>
                  <Link to="/lowes-kraken-halloween-yard-decoration" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                    Read Review →
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

export default BestOutdoorDecorations;