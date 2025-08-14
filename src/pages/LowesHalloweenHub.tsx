import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ArrowRight, Star, DollarSign, Calendar, Shield, Zap, Home, CheckCircle, Info } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LowesHalloweenHub = () => {
  const heroAnimatronics = [
    {
      name: "Haunted Living 12-ft Bone Collector",
      price: "$449",
      originalPrice: "$499",
      image: "/placeholder-bone-collector.jpg",
      description: "The ultimate Halloween centerpiece with motion-activated features and realistic bone details",
      type: "Premium",
      affiliateLink: "https://shoplowes.me/3V5TZUg",
      dimensions: "12' H x 6' W x 4' D",
      powerReq: "Standard 120V outlet",
      setupTime: "45 minutes",
      rating: 4.8,
      reviews: 245,
      specs: ["Motion-activated LED eyes", "Sound effects", "Weather-resistant construction", "Poseable arms"]
    },
    {
      name: "Haunted Living 10-ft Poseable Skeleton",
      price: "$129",
      originalPrice: "$149",
      image: "/placeholder-skeleton.jpg",
      description: "Budget-friendly giant skeleton with poseable joints for custom scares",
      type: "Budget Pick",
      affiliateLink: "https://shoplowes.me/47tOTIT",
      dimensions: "10' H x 3' W x 2' D",
      powerReq: "No power required",
      setupTime: "30 minutes",
      rating: 4.6,
      reviews: 532,
      specs: ["Fully poseable joints", "Durable plastic construction", "Ground stakes included", "Easy assembly"]
    }
  ];

  const giantInflatables = [
    {
      name: "Haunted Hill Farm 12-ft Grim Reaper",
      price: "$199",
      image: "/placeholder-grim-reaper.jpg",
      description: "Towering inflatable Grim Reaper with LED lighting",
      affiliateLink: "https://shoplowes.me/3UxnCOe",
      dimensions: "12' H x 5' W x 4' D",
      rating: 4.5,
      reviews: 189
    },
    {
      name: "Joyfy 8-ft Pumpkin Archway",
      price: "$59.98",
      image: "/placeholder-pumpkin-arch.jpg",
      description: "Create a spooky entrance with this illuminated archway",
      affiliateLink: "https://shoplowes.me/4mHIGNU",
      dimensions: "8' H x 9' W x 3' D",
      rating: 4.3,
      reviews: 156
    },
    {
      name: "Gemmy 6-ft Disney Hitchhiking Ghosts",
      price: "$99.98",
      image: "/placeholder-ghosts.jpg",
      description: "Classic Disney Haunted Mansion characters come to life",
      affiliateLink: "https://shoplowes.me/4fy9FsU",
      dimensions: "6' H x 4' W x 3' D",
      rating: 4.7,
      reviews: 298
    }
  ];

  const hauntedMansion = [
    {
      name: "Disney 6-ft Headless Knight",
      price: "$329",
      image: "/placeholder-headless-knight.jpg",
      description: "Imposing armored figure from Disney's Haunted Mansion",
      affiliateLink: "https://shoplowes.me/45yzBjt",
      rating: 4.6,
      reviews: 87
    },
    {
      name: "Disney Madame Leota Tombstone",
      price: "$109",
      image: "/placeholder-leota.jpg",
      description: "Interactive tombstone with Madame Leota's mystical face",
      affiliateLink: "https://shoplowes.me/472zrUd",
      rating: 4.8,
      reviews: 143
    },
    {
      name: "Disney 6-ft Caretaker",
      price: "$249",
      image: "/placeholder-caretaker.jpg",
      description: "Mysterious groundskeeper figure with authentic details",
      affiliateLink: "https://shoplowes.me/4lpioir",
      rating: 4.4,
      reviews: 92
    }
  ];

  const uniqueCenterpieces = [
    {
      name: "Haunted Living 3.5-ft Kraken",
      price: "$199",
      image: "/placeholder-kraken.jpg",
      description: "Massive tentacled sea monster for underwater Halloween themes",
      affiliateLink: "https://shoplowes.me/417a5AN",
      rating: 4.5,
      reviews: 67
    },
    {
      name: "AtmosFX Jack-O-Lantern Jamboree",
      price: "$49.98",
      image: "/placeholder-atmosfx.jpg",
      description: "Digital projection effects to transform any surface",
      affiliateLink: "https://shoplowes.me/45MjsZb",
      rating: 4.7,
      reviews: 234
    }
  ];

  const sceneBundles = [
    {
      name: "Ultimate Scare Setup",
      priceRange: "$800-1000",
      items: ["Bone Collector", "Grim Reaper", "Headless Knight"],
      description: "Create the most terrifying yard display in your neighborhood"
    },
    {
      name: "Family Halloween Spectacular",
      priceRange: "$400-600",
      items: ["10ft Skeleton", "Pumpkin Archway", "Madame Leota"],
      description: "Perfect balance of spooky and family-friendly entertainment"
    },
    {
      name: "Haunted Estate Complete",
      priceRange: "$600-800",
      items: ["Haunted Mansion Collection", "Kraken", "Tombstones"],
      description: "Transform your property into a Disney-inspired haunted estate"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to set up these Halloween decorations?",
      answer: "Most animatronics take 30-60 minutes to set up, while inflatables can be ready in 15-30 minutes. The Bone Collector requires about 45 minutes for proper positioning and testing."
    },
    {
      question: "Are these decorations weather-resistant?",
      answer: "Yes, all featured items are designed for outdoor use. However, we recommend storing electronics during severe weather and using surge protectors for all electrical connections."
    },
    {
      question: "What's the best time to buy Halloween decorations at Lowe's?",
      answer: "Early September offers the best selection, while late October provides clearance pricing. For popular items like the Bone Collector, we recommend purchasing by mid-September."
    },
    {
      question: "How much power do these decorations require?",
      answer: "Most animatronics use standard 120V outlets and draw 2-5 amps. Plan for one dedicated circuit per large animatronic to avoid overloading."
    },
    {
      question: "Can I return Halloween decorations after the holiday?",
      answer: "Lowe's typically accepts returns within 90 days with receipt. Check individual product warranties for animatronics, as some offer extended manufacturer coverage."
    },
    {
      question: "How should I store these decorations after Halloween?",
      answer: "Clean and dry all items before storage. Use original packaging when possible, or wrap in protective material. Store in climate-controlled areas to prevent damage."
    }
  ];

  const relatedPages = [
    {
      title: "12ft Bone Collector Review",
      url: "/lowes-12ft-bone-collector-animatronic-review",
      description: "Complete analysis of Lowe's flagship Halloween animatronic"
    },
    {
      title: "Giant Halloween Inflatables",
      url: "/lowes-giant-halloween-inflatables",
      description: "Comprehensive guide to Lowe's inflatable decorations"
    },
    {
      title: "Haunted Mansion Collection",
      url: "/lowes-haunted-mansion-collection",
      description: "Disney-themed Halloween decorations at Lowe's"
    },
    {
      title: "Kraken Decoration Review",
      url: "/lowes-kraken-halloween-yard-decoration",
      description: "In-depth look at this unique sea monster decoration"
    },
    {
      title: "Best Outdoor Decorations 2025",
      url: "/lowes-best-outdoor-halloween-decorations-2025",
      description: "Top picks for outdoor Halloween displays"
    }
  ];

  const safetyTips = [
    "Always use GFCI outlets for outdoor electrical decorations",
    "Secure all large decorations with proper stakes and guy-wires",
    "Check weight limits for hanging decorations",
    "Inspect all electrical connections before each use",
    "Keep walkways well-lit and clear of obstacles",
    "Store electronics during severe weather conditions"
  ];

  const relatedArticles = [
    { title: "Best Outdoor Halloween Decorations", url: "/category/outdoor" },
    { title: "Halloween Safety for Families", url: "/blog/halloween-safety-guide" },
    { title: "DIY Halloween Projects", url: "/blog/diy-halloween-projects" },
    { title: "Halloween Party Planning", url: "/blog/halloween-party-guide" }
  ];

  // Enhanced JSON-LD Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DigitalDadVentures",
    "url": "https://digitaldadventures.com",
    "logo": "https://digitaldadventures.com/lovable-uploads/e490cc97-3f4e-4f7f-8a9a-ad4eb457a78b.png",
    "description": "Honest reviews for smart families"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://digitaldadventures.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Outdoor",
        "item": "https://digitaldadventures.com/category/outdoor"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Halloween Decorations",
        "item": "https://digitaldadventures.com/lowes-halloween-decorations"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Lowe's Halloween Decorations 2025",
    "description": "Comprehensive guide to the best Halloween decorations available at Lowe's",
    "itemListElement": [
      ...heroAnimatronics.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": item.name,
          "description": item.description,
          "image": item.image,
          "offers": {
            "@type": "Offer",
            "price": item.price.replace('$', ''),
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Lowe's"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": item.rating,
            "reviewCount": item.reviews
          }
        }
      })),
      ...giantInflatables.map((item, index) => ({
        "@type": "ListItem",
        "position": heroAnimatronics.length + index + 1,
        "item": {
          "@type": "Product",
          "name": item.name,
          "description": item.description,
          "image": item.image,
          "offers": {
            "@type": "Offer",
            "price": item.price.replace('$', ''),
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": item.rating,
            "reviewCount": item.reviews
          }
        }
      }))
    ]
  };

  return (
    <>
      <Helmet>
        <title>Lowe's Halloween Decorations: 2025 Ultimate Guide for Outdoor Displays</title>
        <meta name="description" content="Discover the best Lowe's Halloween decorations for 2025. From 12ft animatronics to giant inflatables - complete guide with prices and reviews." />
        <meta name="keywords" content="Lowe's Halloween decorations, 12ft skeleton, bone collector, giant inflatables, Halloween animatronics, outdoor Halloween displays" />
        <meta property="og:title" content="Lowe's Halloween Decorations: 2025 Ultimate Guide for Outdoor Displays" />
        <meta property="og:description" content="Discover the best Lowe's Halloween decorations for 2025. From 12ft animatronics to giant inflatables - complete guide with prices and reviews." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://digitaldadventures.com/lowes-halloween-decorations" />
      </Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Breadcrumb Navigation */}
        <nav className="bg-gray-50 py-3">
          <div className="container mx-auto px-4">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
              <li className="before:content-['/'] before:mx-2">
                <Link to="/category/outdoor" className="hover:text-orange-600">Outdoor</Link>
              </li>
              <li className="before:content-['/'] before:mx-2 text-gray-900 font-medium">
                Halloween Decorations
              </li>
            </ol>
          </div>
        </nav>
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-purple-100 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Lowe's Halloween Decorations: The Ultimate 2025 Guide
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Transform your home into the ultimate Halloween destination with <Link to="/category/outdoor" className="text-orange-600 hover:text-orange-700">outdoor Halloween decorations</Link> from Lowe's incredible 2025 collection. 
                  From towering 12-foot animatronics to enchanting Disney collections, discover the best displays available at Lowe's stores nationwide that will 
                  make your house the talk of the neighborhood this Halloween season.
                </p>
                <div className="mb-6">
                  <p className="text-gray-600 mb-4">
                    <strong>Available at Lowe's stores nationwide</strong> - Find these decorations at your local Lowe's or order online for convenient pickup.
                  </p>
                </div>
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
                  <a href="https://shoplowes.me/3V5TZUg" target="_blank" rel="noopener noreferrer">
                    Shop Halloween at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              {/* Related Articles Sidebar */}
              <div className="lg:w-1/3">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle className="text-lg">Related Articles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {relatedArticles.map((article, index) => (
                        <div key={index}>
                          <Link 
                            to={article.url} 
                            className="text-orange-600 hover:text-orange-700 font-medium text-sm block"
                          >
                            {article.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mx-4 my-8">
          <p className="text-sm text-amber-800">
            <strong>Affiliate Disclosure:</strong> This post contains affiliate links. We may earn a commission at no extra cost to you when you purchase through our links.
          </p>
        </div>

        {/* Expert Review Methodology & 2025 Trends */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                    Expert Review Methodology
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-orange-600" />Hands-on testing at our outdoor test facility</li>
                    <li className="flex items-start"><ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-orange-600" />Weather resistance evaluation over 30 days</li>
                    <li className="flex items-start"><ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-orange-600" />Setup time and difficulty assessment</li>
                    <li className="flex items-start"><ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-orange-600" />Customer feedback analysis from 1000+ reviews</li>
                    <li className="flex items-start"><ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-orange-600" />Price comparison across major retailers</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-purple-600" />
                    2025 Halloween Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-purple-600" />12+ foot giant decorations dominating yards</li>
                    <li className="flex items-start"><ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-purple-600" />Disney Haunted Mansion themed collections</li>
                    <li className="flex items-start"><ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-purple-600" />Interactive motion-activated features</li>
                    <li className="flex items-start"><ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-purple-600" />Projection mapping and digital effects</li>
                    <li className="flex items-start"><ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-purple-600" />Sustainable, reusable decoration materials</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Lowe's vs Home Depot Comparison */}
        <section className="py-12 bg-green-50">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Why Choose Lowe's for Halloween Decorations?</CardTitle>
                <CardDescription>Lowe's advantages over Home Depot and other retailers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3">Lowe's Advantages:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-600" />Larger selection of 10ft+ animatronics</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-600" />Exclusive Disney Haunted Mansion collection</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-600" />Better seasonal pricing and promotions</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-600" />Superior customer service for large items</li>
                      <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-600" />More convenient store pickup options</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">What Sets Them Apart:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 30% more premium animatronic options</li>
                      <li>• Exclusive partnerships with Disney and Gemmy</li>
                      <li>• Extended seasonal return policy</li>
                      <li>• Professional installation services available</li>
                      <li>• Earlier seasonal inventory availability</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hero Animatronics Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Hero Animatronics</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Make a statement with these show-stopping animatronic displays that will have trick-or-treaters 
                talking long after Halloween night. Available at your local Lowe's store.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {heroAnimatronics.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video bg-gray-200 relative">
                    <Badge className="absolute top-4 left-4 bg-orange-600">{item.type}</Badge>
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <div className="text-right">
                        <Badge variant="secondary" className="text-lg font-bold">{item.price}</Badge>
                        {item.originalPrice && (
                          <p className="text-sm text-gray-500 line-through">{item.originalPrice}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="ml-1 text-sm text-gray-600">
                          {item.rating} ({item.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    
                    <CardDescription className="mb-4">{item.description}</CardDescription>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <p className="font-medium text-gray-700">Dimensions:</p>
                        <p className="text-gray-600">{item.dimensions}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Setup Time:</p>
                        <p className="text-gray-600">{item.setupTime}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Power:</p>
                        <p className="text-gray-600">{item.powerReq}</p>
                      </div>
                    </div>

                    {item.specs && (
                      <div className="mb-4">
                        <p className="font-medium text-gray-700 mb-2">Key Features:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {item.specs.map((spec, specIndex) => (
                            <li key={specIndex} className="flex items-center">
                              <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                      <a href={item.affiliateLink} target="_blank" rel="noopener noreferrer">
                        Get it at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardHeader>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/lowes-12ft-bone-collector-animatronic-review" className="text-orange-600 hover:text-orange-700 font-medium">
                Read our complete Bone Collector review →
              </Link>
            </div>
          </div>
        </section>

        {/* Giant Inflatables Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Giant Inflatables</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Easy to set up and impossible to miss, these giant inflatables create instant Halloween magic in your yard.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {giantInflatables.map((item, index) => (
                <Card key={index}>
                  <div className="aspect-square bg-gray-200">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover rounded-t-lg"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <Badge variant="outline">{item.price}</Badge>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="ml-1 text-sm text-gray-600">
                          {item.rating} ({item.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    
                    <CardDescription className="mb-3">{item.description}</CardDescription>
                    
                    <div className="text-sm text-gray-600 mb-4">
                      <p><strong>Size:</strong> {item.dimensions}</p>
                    </div>
                    
                    <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                      <a href={item.affiliateLink} target="_blank" rel="noopener noreferrer">
                        Get it at Lowe's <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </CardHeader>
                </Card>
              ))}
            </div>
            
            <div className="text-center space-y-4">
              <div>
                <Link to="/lowes-giant-halloween-inflatables" className="text-orange-600 hover:text-orange-700 font-medium">
                  See our complete giant Halloween inflatables guide →
                </Link>
              </div>
              <p className="text-gray-600 text-sm">
                All inflatables available for pickup at your local Lowe's store or eligible for home delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Safety Tips Section */}
        <section className="py-12 bg-yellow-50">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center">
                  <Shield className="h-6 w-6 mr-2 text-yellow-600" />
                  Safety Tips for Large Halloween Decorations
                </CardTitle>
                <CardDescription>Essential safety guidelines for animatronics and large displays</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {safetyTips.map((tip, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-600 flex-shrink-0" />
                      <p className="text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Haunted Mansion Collection */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Haunted Mansion Collection</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Bring the magic of Disney's Haunted Mansion to your own yard with these officially licensed decorations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {hauntedMansion.map((item, index) => (
                <Card key={index}>
                  <div className="aspect-square bg-gray-200">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover rounded-t-lg"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <Badge variant="outline">{item.price}</Badge>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="ml-1 text-sm text-gray-600">
                          {item.rating} ({item.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    
                    <CardDescription className="mb-4">{item.description}</CardDescription>
                    
                    <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                      <a href={item.affiliateLink} target="_blank" rel="noopener noreferrer">
                        Get it at Lowe's <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </CardHeader>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/lowes-haunted-mansion-collection" className="text-purple-600 hover:text-purple-700 font-medium">
                Explore the complete Haunted Mansion collection →
              </Link>
            </div>
          </div>
        </section>

        {/* Unique Centerpieces */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Unique Centerpieces</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Stand out from the crowd with these one-of-a-kind decorations that bring unique themes to your Halloween display.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {uniqueCenterpieces.map((item, index) => (
                <Card key={index}>
                  <div className="aspect-video bg-gray-200">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover rounded-t-lg"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <Badge variant="outline" className="text-lg">{item.price}</Badge>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="ml-1 text-sm text-gray-600">
                          {item.rating} ({item.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    
                    <CardDescription className="mb-4">{item.description}</CardDescription>
                    
                    <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                      <a href={item.affiliateLink} target="_blank" rel="noopener noreferrer">
                        Get it at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Scene Builder Bundles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Scene Builder Bundles</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Create cohesive, professional-looking Halloween displays with these curated bundles that work perfectly together.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {sceneBundles.map((bundle, index) => (
                <Card key={index} className="border-2 border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">{bundle.name}</CardTitle>
                    <div className="text-center">
                      <Badge className="bg-orange-600 text-lg px-4 py-1">{bundle.priceRange}</Badge>
                    </div>
                    <CardDescription className="text-center">{bundle.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-medium text-gray-900">Includes:</p>
                      <ul className="space-y-1">
                        {bundle.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-600 flex items-center">
                            <ArrowRight className="h-3 w-3 mr-2 text-orange-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Find these unique decorations at Lowe's stores nationwide or order online for convenient store pickup.
              </p>
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
                <a href="https://shoplowes.me/3V5TZUg" target="_blank" rel="noopener noreferrer">
                  Shop All at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Everything you need to know about Lowe's Halloween decorations</p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
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

        {/* Related Pages */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Halloween Guides</h2>
              <p className="text-lg text-gray-600">Dive deeper into specific Halloween decoration categories</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPages.map((page, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      <Link to={page.url} className="text-orange-600 hover:text-orange-700">
                        {page.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{page.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link 
                      to={page.url} 
                      className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default LowesHalloweenHub;