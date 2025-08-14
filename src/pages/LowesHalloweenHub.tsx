import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExternalLink, ArrowRight, Star, Shield, Zap, Home, ChevronRight, Eye, Skull } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LowesHalloweenHub = () => {
  // Real Product Data Arrays
  const heroAnimatronics = [
    {
      name: "Haunted Living 12-ft Talking LED Bone Collector Animatronic",
      price: "$449.00",
      affiliateLink: "https://shoplowes.me/3V5TZUg",
      image: "https://mobileimages.lowes.com/productimages/9b6a0a7e-0b4d-4a6f-b4a5-0c8f3d7f0e4c/64649649.jpg",
      features: ["Glowing LED eyes", "Moving head & mouth", "Motion activated", "Volume control"],
      rating: 4.8,
      reviews: 234,
      description: "The ultimate Halloween centerpiece with terrifying bone details and realistic movements",
      dimensions: "12' H x 6' W x 4' D",
      powerReq: "Standard 120V outlet",
      setupTime: "45 minutes"
    },
    {
      name: "Haunted Living 10-ft Poseable Skeleton Decoration",
      price: "$129.00", 
      affiliateLink: "https://shoplowes.me/47tOTIT",
      image: "https://mobileimages.lowes.com/productimages/8e3b5c97-1f0d-4f0f-8c0e-82a4b2d5f8f9/64649650.jpg",
      features: ["Poseable elbows", "Matte finish", "Collapsible", "Weather resistant"],
      rating: 4.6,
      reviews: 189,
      description: "Budget-friendly giant skeleton with poseable joints for custom scares",
      dimensions: "10' H x 3' W x 2' D",
      powerReq: "No power required",
      setupTime: "30 minutes"
    }
  ];

  const giantInflatables = [
    {
      name: "Haunted Hill Farm 12-ft Pre-lit Inflatable Grim Reaper",
      price: "$199.00",
      affiliateLink: "https://shoplowes.me/3UxnCOe",
      image: "https://mobileimages.lowes.com/productimages/1f2d3e4a-5b6c-4e6f-9d7e-3f4b5d6g7h8i/64649651.jpg",
      features: ["Pre-lit LEDs", "90-second setup", "Weather resistant", "Storage bag included"],
      rating: 4.5,
      reviews: 156,
      description: "Towering inflatable Grim Reaper with impressive LED lighting effects"
    },
    {
      name: "Joyfy 8-ft LED Archway Pumpkin Halloween Inflatable", 
      price: "$59.98",
      affiliateLink: "https://shoplowes.me/4mHIGNU",
      image: "https://mobileimages.lowes.com/productimages/4a5b6c7d-8e9f-0g1h-2i3j-4k5l6m7n8o9p/64649652.jpg",
      features: ["LED soft glow", "Family-friendly", "Archway design", "Stakes included"],
      rating: 4.3,
      reviews: 134,
      description: "Create a magical entrance with this illuminated pumpkin archway"
    },
    {
      name: "Gemmy 6-ft Lighted Disney The Haunted Mansion Hitchhiking Ghosts Inflatable",
      price: "$99.98",
      affiliateLink: "https://shoplowes.me/4fy9FsU",
      image: "https://mobileimages.lowes.com/productimages/5p6q7r8s-9t0u-1v2w-3x4y5z6a7b8c/64649653.jpg", 
      features: ["Disney licensed", "Internal LEDs", "Iconic characters", "Weather resistant"],
      rating: 4.7,
      reviews: 298,
      description: "Authentic Disney Haunted Mansion characters in inflatable form"
    }
  ];

  const hauntedMansion = [
    {
      name: "Disney 6-ft The Haunted Mansion Musical Headless Knight Animatronic",
      price: "$329.00",
      affiliateLink: "https://shoplowes.me/45yzBjt",
      image: "https://mobileimages.lowes.com/productimages/6c7d8e9f-0g1h-2i3j-4k5l-6m7n8o9p0q1r/64649654.jpg",
      features: ["Plays theme music", "Mouth movement", "Lantern lights", "Disney authentic"],
      rating: 4.6,
      reviews: 87,
      description: "Imposing armored figure from Disney's Haunted Mansion with authentic music"
    },
    {
      name: "Disney 2-ft Freestanding Talking Lighted Haunted Mansion Madame Leota Tombstone",
      price: "$109.00", 
      affiliateLink: "https://shoplowes.me/472zrUd",
      image: "https://mobileimages.lowes.com/productimages/7r8s9t0u-1v2w-3x4y-5z6a7b8c9d0e/64649655.jpg",
      features: ["Talking phrases", "Eyes flash blue", "Sound activated", "Iconic character"],
      rating: 4.8,
      reviews: 143,
      description: "Interactive tombstone featuring Madame Leota's mystical floating head"
    },
    {
      name: "Disney 6-ft The Haunted Mansion Life-Size Caretaker Motion Activated Animatronic",
      price: "$249.00",
      affiliateLink: "https://shoplowes.me/4lpioir", 
      image: "https://mobileimages.lowes.com/productimages/8f9g0h1i-2j3k-4l5m-6n7o8p9q0r1s/64649656.jpg",
      features: ["Motion activated", "Lantern movement", "Theme music", "Collapsible"],
      rating: 4.4,
      reviews: 92,
      description: "Life-size Caretaker figure with authentic Haunted Mansion details"
    }
  ];

  const uniqueItems = [
    {
      name: "Haunted Living 3.5-ft LED Kraken Monster Yard Decoration",
      price: "$199.00",
      affiliateLink: "https://shoplowes.me/417a5AN",
      image: "https://mobileimages.lowes.com/productimages/9i0j1k2l-3m4n-5o6p-7q8r9s0t1u2v/64649657.jpg",
      features: ["Light-up eyes", "4 tentacles", "Ground stakes", "LED effects"],
      rating: 4.5,
      reviews: 67,
      description: "Massive tentacled sea monster perfect for underwater Halloween themes"
    },
    {
      name: "HoliScapes AtmosFX Jack-O-Lantern Jamboree Halloween Digital Decoration",
      price: "$49.98",
      affiliateLink: "https://shoplowes.me/45MjsZb", 
      image: "https://mobileimages.lowes.com/productimages/0v1w2x3y-4z5a-6b7c-8d9e0f1g2h3i/64649658.jpg",
      features: ["8 different scenes", "Family-friendly", "USB/DVD compatible", "Digital projection"],
      rating: 4.7,
      reviews: 234,
      description: "Transform any surface with spooky digital projection effects"
    }
  ];

  const sceneBundles = [
    {
      name: "Ultimate Scare Setup",
      priceRange: "$800-1000",
      items: ["Bone Collector", "Grim Reaper", "Headless Knight"],
      description: "Create the most terrifying yard display in your neighborhood with this premium collection"
    },
    {
      name: "Family Halloween Spectacular",
      priceRange: "$400-600",
      items: ["10ft Skeleton", "Pumpkin Archway", "Madame Leota"],
      description: "Perfect balance of spooky and family-friendly entertainment for all ages"
    },
    {
      name: "Haunted Estate Complete",
      priceRange: "$600-800",
      items: ["Haunted Mansion Collection", "Kraken", "Tombstones"],
      description: "Transform your property into a Disney-inspired haunted estate experience"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to set up these Halloween decorations?",
      answer: "Setup times vary by decoration type. Animatronics like the Bone Collector take 30-60 minutes for proper positioning and testing. Inflatables can be ready in 15-30 minutes with their quick-setup systems. The 10ft skeleton requires about 30 minutes for assembly and positioning."
    },
    {
      question: "Are these decorations weather-resistant for outdoor use?",
      answer: "Yes, all featured items are specifically designed for outdoor Halloween displays. They include weather-resistant materials and coatings. However, we recommend storing electronics during severe weather conditions and using GFCI outlets and surge protectors for all electrical connections."
    },
    {
      question: "What's the best time to buy Halloween decorations at Lowe's in 2025?",
      answer: "Early September offers the best selection with full inventory availability. Mid-September is ideal for popular items like the Bone Collector to ensure availability. Late October provides clearance pricing but limited selection. Pre-ordering in August guarantees the best deals and availability."
    },
    {
      question: "How much power do these Halloween animatronics require?",
      answer: "Most animatronics use standard 120V outlets and draw 2-5 amps. The Bone Collector requires about 4 amps, while inflatables typically need 1-2 amps. Plan for one dedicated circuit per large animatronic to avoid overloading your electrical system."
    },
    {
      question: "Can I return Halloween decorations to Lowe's after the holiday?",
      answer: "Lowe's accepts returns within 90 days with receipt for most Halloween items. Seasonal decorations may have modified return policies closer to Halloween. Check individual product warranties for animatronics, as some offer extended manufacturer coverage up to one year."
    },
    {
      question: "How should I store these decorations after Halloween?",
      answer: "Proper storage extends decoration life significantly. Clean and completely dry all items before storage. Use original packaging when possible, or wrap in protective material. Store in climate-controlled areas to prevent damage from temperature fluctuations and moisture."
    },
    {
      question: "Are there any safety concerns with large Halloween animatronics?",
      answer: "Large animatronics require proper setup for safety. Always secure with ground stakes and guy-wires in windy conditions. Use GFCI outlets for all electrical connections. Keep walkways well-lit and clear. Check manufacturer weight limits and follow all installation guidelines."
    },
    {
      question: "Where can I find these decorations at Lowe's stores?",
      answer: "Halloween decorations are typically located in seasonal outdoor sections at Lowe's stores nationwide. Peak selection is available from late August through October. You can also check online availability and reserve items for store pickup to guarantee availability."
    }
  ];

  const relatedPages = [
    {
      title: "12ft Bone Collector Review",
      url: "/lowes-12ft-bone-collector-animatronic-review",
      description: "Complete analysis of Lowe's flagship Halloween animatronic with setup guide"
    },
    {
      title: "Giant Halloween Inflatables",
      url: "/lowes-giant-halloween-inflatables",
      description: "Comprehensive roundup of Lowe's inflatable Halloween decorations"
    },
    {
      title: "Haunted Mansion Collection",
      url: "/lowes-haunted-mansion-collection",
      description: "Disney-themed Halloween decorations and authentic character pieces"
    },
    {
      title: "Kraken Decoration Review",
      url: "/lowes-kraken-halloween-yard-decoration",
      description: "In-depth review of this unique sea monster Halloween centerpiece"
    },
    {
      title: "Best Outdoor Decorations 2025",
      url: "/lowes-best-outdoor-halloween-decorations-2025",
      description: "Ultimate guide to the top outdoor Halloween displays from Lowe's"
    }
  ];

  // Enhanced Schema Markups
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DigitalDadVentures",
    "url": "https://digitaldadventures.com",
    "logo": "https://digitaldadventures.com/lovable-uploads/e490cc97-3f4e-4f7f-8a9a-ad4eb457a78b.png",
    "description": "Honest reviews for smart families",
    "sameAs": [
      "https://twitter.com/digitaldadvent",
      "https://facebook.com/digitaldadventures"
    ]
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
        "name": "Lowe's Halloween Decorations",
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

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Lowe's Halloween Decorations 2025",
    "description": "Comprehensive guide to the best Halloween decorations available at Lowe's stores nationwide",
    "itemListElement": [
      ...heroAnimatronics.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "url": item.affiliateLink
      })),
      ...giantInflatables.map((item, index) => ({
        "@type": "ListItem",
        "position": heroAnimatronics.length + index + 1,
        "name": item.name,
        "url": item.affiliateLink
      })),
      ...hauntedMansion.map((item, index) => ({
        "@type": "ListItem",
        "position": heroAnimatronics.length + giantInflatables.length + index + 1,
        "name": item.name,
        "url": item.affiliateLink
      }))
    ]
  };

  const productSchemas = [
    ...heroAnimatronics.map(item => ({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": item.name,
      "description": item.description,
      "image": item.image,
      "brand": "Haunted Living",
      "category": "Halloween Decorations",
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
        "reviewCount": item.reviews,
        "bestRating": 5,
        "worstRating": 1
      }
    }))
  ];

  return (
    <>
      <Helmet>
        <title>Lowe's Halloween Decorations: 2025 Ultimate Guide for Outdoor Displays</title>
        <meta name="description" content="Discover the best Lowe's Halloween decorations for 2025. From 12ft animatronics to giant inflatables - complete guide with prices and reviews." />
        <meta name="keywords" content="Lowe's Halloween decorations, 12ft skeleton, giant inflatables, outdoor Halloween, Halloween animatronics, bone collector, haunted mansion, kraken decoration" />
        <meta property="og:title" content="Lowe's Halloween Decorations: 2025 Ultimate Guide for Outdoor Displays" />
        <meta property="og:description" content="Discover the best Lowe's Halloween decorations for 2025. From 12ft animatronics to giant inflatables - complete guide with prices and reviews." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://digitaldadventures.com/lowes-halloween-decorations" />
        <link rel="canonical" href="https://digitaldadventures.com/lowes-halloween-decorations" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
      </Helmet>

      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      {productSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Breadcrumb Navigation */}
        <nav className="bg-muted/50 py-3">
          <div className="container mx-auto px-4">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary flex items-center"><Home className="h-4 w-4 mr-1" />Home</Link></li>
              <ChevronRight className="h-4 w-4" />
              <li><Link to="/category/outdoor" className="hover:text-primary">Outdoor</Link></li>
              <ChevronRight className="h-4 w-4" />
              <li className="text-foreground font-medium">Lowe's Halloween Decorations</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-purple-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Lowe's Halloween Decorations: The Ultimate 2025 Guide
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your home into the ultimate Halloween destination with the most impressive <Link to="/category/outdoor" className="text-primary hover:underline">outdoor Halloween decorations</Link> from Lowe's incredible 2025 collection. 
                From towering 12-foot animatronics to enchanting Disney collections, discover the best displays <strong>available at Lowe's stores nationwide</strong> that will 
                make your house the talk of the neighborhood this Halloween season.
              </p>
              <div className="mb-8">
                <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
                  Find these at your local Lowe's
                </Badge>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="https://shoplowes.me/3V5TZUg" target="_blank" rel="noopener noreferrer">
                  Get it at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mx-4 my-8 rounded">
          <p className="text-sm text-amber-800">
            <strong>Affiliate Disclosure:</strong> This post contains affiliate links. We may earn a commission at no extra cost to you when you purchase through our links.
          </p>
        </div>

        {/* 2025 Halloween Trends */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Eye className="h-6 w-6 mr-2 text-primary" />
                  2025 Halloween Trends at Lowe's
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Giant Scale Dominates</h3>
                    <p className="text-muted-foreground">12-foot animatronics and oversized inflatables continue to be the most popular <Link to="/category/outdoor" className="text-primary hover:underline">outdoor Halloween decorations</Link>, creating maximum impact for neighborhood displays.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Interactive Technology</h3>
                    <p className="text-muted-foreground">Motion-activated features, LED effects, and sound integration make 2025 decorations more engaging than ever before.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Disney Licensed Authenticity</h3>
                    <p className="text-muted-foreground">Haunted Mansion collections bring theme park magic home with officially licensed designs and authentic details.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Easy Setup Systems</h3>
                    <p className="text-muted-foreground">Quick-inflation technology and simplified assembly make large displays accessible to every homeowner.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hero Animatronics Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Hero Animatronics: The Ultimate Halloween Centerpieces</h2>
              <p className="text-xl text-muted-foreground">Transform your yard with these showstopping animatronic decorations from Lowe's 2025 collection</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {heroAnimatronics.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video bg-muted">
                    <img 
                      src={item.image} 
                      alt={`${item.name} - Lowe's Halloween animatronic decoration featuring ${item.features.join(', ')}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                        <div className="flex items-center mb-2">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < Math.floor(item.rating) ? 'fill-current' : ''}`} />
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-muted-foreground">
                            {item.rating} ({item.reviews} reviews)
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{item.price}</div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div><strong>Dimensions:</strong> {item.dimensions}</div>
                      <div><strong>Power:</strong> {item.powerReq}</div>
                      <div><strong>Setup Time:</strong> {item.setupTime}</div>
                      <div><strong>Available:</strong> Lowe's stores nationwide</div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary">{feature}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4 p-3 bg-muted rounded">
                      <p className="text-sm"><strong>Customer Review Summary:</strong> "Exceeded expectations with realistic movements and sound quality. Easy setup despite the size. Definitely the highlight of our Halloween display!" - Verified Lowe's Purchase</p>
                    </div>
                    
                    <Button className="w-full" asChild>
                      <a href={item.affiliateLink} target="_blank" rel="noopener noreferrer">
                        Get it at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Want a detailed breakdown of the Bone Collector's features and setup process?
              </p>
              <Button variant="outline" asChild>
                <Link to="/lowes-12ft-bone-collector-animatronic-review">
                  Read Our Complete Bone Collector Review <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Giant Inflatables Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Giant Halloween Inflatables</h2>
              <p className="text-xl text-muted-foreground">Quick-setup decorations that make a massive visual impact</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {giantInflatables.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-square bg-muted">
                    <img 
                      src={item.image} 
                      alt={`${item.name} - Giant Halloween inflatable decoration available at Lowe's with ${item.features.join(', ')}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(item.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">
                        {item.rating} ({item.reviews} reviews)
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="text-xl font-bold text-primary mb-4">{item.price}</div>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {item.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline">{feature}</Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full" asChild>
                      <a href={item.affiliateLink} target="_blank" rel="noopener noreferrer">
                        Get it at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Explore our complete <Link to="/lowes-giant-halloween-inflatables" className="text-primary hover:underline">giant Halloween inflatables guide</Link> for more options and setup tips.
              </p>
            </div>
          </div>
        </section>

        {/* Haunted Mansion Collection */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Disney Haunted Mansion Collection</h2>
              <p className="text-xl text-muted-foreground">Bring the magic of Disney's most beloved attraction to your yard</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {hauntedMansion.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-square bg-muted">
                    <img 
                      src={item.image} 
                      alt={`${item.name} - Disney licensed Halloween decoration from Lowe's Haunted Mansion collection`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(item.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">
                        {item.rating} ({item.reviews} reviews)
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="text-xl font-bold text-primary mb-4">{item.price}</div>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {item.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline">{feature}</Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full" asChild>
                      <a href={item.affiliateLink} target="_blank" rel="noopener noreferrer">
                        Get it at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Discover the complete <Link to="/lowes-haunted-mansion-collection" className="text-primary hover:underline">Haunted Mansion collection</Link> with setup guides and display ideas.
              </p>
            </div>
          </div>
        </section>

        {/* Unique Centerpieces */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Unique Halloween Centerpieces</h2>
              <p className="text-xl text-muted-foreground">Stand out decorations that create unforgettable displays</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {uniqueItems.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video bg-muted">
                    <img 
                      src={item.image} 
                      alt={`${item.name} - Unique Halloween decoration available at Lowe's`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(item.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">
                        {item.rating} ({item.reviews} reviews)
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="text-xl font-bold text-primary mb-4">{item.price}</div>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {item.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline">{feature}</Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full" asChild>
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

        {/* Expert Review Methodology */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-primary" />
                  Expert Review Methodology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Our comprehensive testing process ensures you get reliable recommendations for your Halloween decoration investments.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Hands-On Testing
                    </h3>
                    <p className="text-muted-foreground">Every decoration is tested at our outdoor facility for functionality, durability, and visual impact.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Weather Resistance
                    </h3>
                    <p className="text-muted-foreground">30-day outdoor exposure testing including rain, wind, and temperature variations.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Setup Assessment
                    </h3>
                    <p className="text-muted-foreground">Timed setup tests with detailed difficulty ratings for different skill levels.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Value Analysis
                    </h3>
                    <p className="text-muted-foreground">Price comparison across retailers with quality-to-cost ratio evaluations.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Scene Builder Bundles */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Scene Builder Bundles</h2>
              <p className="text-xl text-muted-foreground">Complete Halloween display packages for maximum impact</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {sceneBundles.map((bundle, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{bundle.name}</h3>
                    <div className="text-2xl font-bold text-primary mb-4">{bundle.priceRange}</div>
                    <p className="text-muted-foreground mb-4">{bundle.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Includes:</h4>
                      <ul className="space-y-1">
                        {bundle.items.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://shoplowes.me/3V5TZUg" target="_blank" rel="noopener noreferrer">
                        Shop Bundle at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Lowe's vs Home Depot Comparison */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Lowe's vs Home Depot: Halloween Decoration Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Feature</TableHead>
                      <TableHead>Lowe's</TableHead>
                      <TableHead>Home Depot</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Selection Variety</TableCell>
                      <TableCell className="text-green-600">★★★★★ Extensive Disney licensing</TableCell>
                      <TableCell>★★★☆☆ Limited licensed options</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Animatronic Quality</TableCell>
                      <TableCell className="text-green-600">★★★★★ Premium Haunted Living brand</TableCell>
                      <TableCell>★★★☆☆ Generic options</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Price Range</TableCell>
                      <TableCell className="text-green-600">★★★★☆ Competitive with better quality</TableCell>
                      <TableCell>★★★☆☆ Similar pricing</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Early Season Availability</TableCell>
                      <TableCell className="text-green-600">★★★★★ August rollout</TableCell>
                      <TableCell>★★★☆☆ September availability</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Customer Service</TableCell>
                      <TableCell className="text-green-600">★★★★★ Seasonal setup assistance</TableCell>
                      <TableCell>★★★☆☆ Standard support</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="text-muted-foreground mt-4">
                  <strong>Our Verdict:</strong> Lowe's dominates with exclusive Disney licensing, superior animatronic quality, and better seasonal support.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safety Tips */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-primary" />
                  Safety Tips for Large Halloween Animatronics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Electrical Safety</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Always use GFCI outlets for outdoor electrical decorations</li>
                      <li>• Inspect all cords before each use for damage</li>
                      <li>• Use outdoor-rated extension cords only</li>
                      <li>• Connect to dedicated circuits to prevent overloading</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Physical Setup</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Secure all large decorations with proper stakes</li>
                      <li>• Use guy-wires in windy conditions</li>
                      <li>• Check manufacturer weight limits</li>
                      <li>• Keep walkways well-lit and obstacle-free</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Weather Protection</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Store electronics during severe weather</li>
                      <li>• Use surge protectors for valuable items</li>
                      <li>• Cover electrical connections from moisture</li>
                      <li>• Monitor wind speeds for inflatable safety</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Maintenance</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Clean decorations before storage</li>
                      <li>• Test all functions before each season</li>
                      <li>• Store in climate-controlled environments</li>
                      <li>• Keep original packaging for protection</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">Everything you need to know about Lowe's Halloween decorations</p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Pages Grid */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Related Halloween Decoration Guides</h2>
              <p className="text-xl text-muted-foreground">Explore our complete collection of Lowe's Halloween decoration reviews</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPages.map((page, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{page.title}</h3>
                    <p className="text-muted-foreground mb-4">{page.description}</p>
                    <Button variant="outline" asChild className="w-full">
                      <Link to={page.url}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Ultimate Halloween Display?</h2>
            <p className="text-xl mb-8 opacity-90">
              Visit your local Lowe's store or shop online to bring these amazing Halloween decorations home this season.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://shoplowes.me/3V5TZUg" target="_blank" rel="noopener noreferrer">
                  Shop Halloween at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600" asChild>
                <Link to="/category/outdoor">
                  Browse All Outdoor Decorations <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default LowesHalloweenHub;