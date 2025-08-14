import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ArrowRight, Skull, Ghost, Eye, Star, DollarSign, Calendar, Shield, Zap, Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LowesHalloweenHub = () => {
  const heroAnimatronics = [
    {
      name: "Haunted Living 12-ft Bone Collector",
      price: "$449",
      image: "/placeholder-bone-collector.jpg",
      description: "The ultimate Halloween centerpiece with motion-activated features and realistic bone details",
      type: "Premium"
    },
    {
      name: "Haunted Living 10-ft Poseable Skeleton",
      price: "$129",
      image: "/placeholder-skeleton.jpg",
      description: "Budget-friendly giant skeleton with poseable joints for custom scares",
      type: "Budget Pick"
    }
  ];

  const giantInflatables = [
    {
      name: "Haunted Hill Farm 12-ft Grim Reaper",
      price: "$199",
      image: "/placeholder-grim-reaper.jpg",
      description: "Towering inflatable Grim Reaper with LED lighting"
    },
    {
      name: "Joyfy 8-ft Pumpkin Archway",
      price: "$59.98",
      image: "/placeholder-pumpkin-arch.jpg",
      description: "Create a spooky entrance with this illuminated archway"
    },
    {
      name: "Gemmy 6-ft Disney Hitchhiking Ghosts",
      price: "$99.98",
      image: "/placeholder-ghosts.jpg",
      description: "Classic Disney Haunted Mansion characters come to life"
    }
  ];

  const hauntedMansion = [
    {
      name: "Disney 6-ft Headless Knight",
      price: "$329",
      image: "/placeholder-headless-knight.jpg",
      description: "Imposing armored figure from Disney's Haunted Mansion"
    },
    {
      name: "Disney Madame Leota Tombstone",
      price: "$109",
      image: "/placeholder-leota.jpg",
      description: "Interactive tombstone with Madame Leota's mystical face"
    },
    {
      name: "Disney 6-ft Caretaker",
      price: "$249",
      image: "/placeholder-caretaker.jpg",
      description: "Mysterious groundskeeper figure with authentic details"
    }
  ];

  const uniqueCenterpieces = [
    {
      name: "Haunted Living 3.5-ft Kraken",
      price: "$199",
      image: "/placeholder-kraken.jpg",
      description: "Massive tentacled sea monster for underwater Halloween themes"
    },
    {
      name: "AtmosFX Jack-O-Lantern Jamboree",
      price: "$49.98",
      image: "/placeholder-atmosfx.jpg",
      description: "Digital projection effects to transform any surface"
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

  // JSON-LD Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Lowe's Halloween Decorations 2025",
    "description": "Best Halloween decorations available at Lowe's for 2025",
    "itemListElement": [
      ...heroAnimatronics.map((item, index) => ({
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
          "offers": {
            "@type": "Offer",
            "price": item.price.replace('$', ''),
            "priceCurrency": "USD"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-purple-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Lowe's Halloween Decorations: The Ultimate 2025 Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Transform your home into the ultimate Halloween destination with Lowe's incredible selection of 2025 decorations. 
              From towering 12-foot animatronics to enchanting Disney collections, discover the best outdoor displays that will 
              make your house the talk of the neighborhood this Halloween season.
            </p>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
              <a href="https://shoplowes.me/3V5TZUg" target="_blank" rel="noopener noreferrer">
                Get it at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mx-4 my-8">
          <p className="text-sm text-amber-800">
            <strong>Affiliate Disclosure:</strong> This post contains affiliate links. We may earn a commission at no extra cost to you when you purchase through our links.
          </p>
        </div>

        {/* Hero Animatronics Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Hero Animatronics</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Make a statement with these show-stopping animatronic displays that will have trick-or-treaters 
                talking long after Halloween night.
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
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <Badge variant="secondary" className="text-lg font-bold">{item.price}</Badge>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
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
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <Badge variant="outline">{item.price}</Badge>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            
            <div className="text-center space-y-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
                <a href="https://shoplowes.me/3V5TZUg" target="_blank" rel="noopener noreferrer">
                  Get it at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <div>
                <Link to="/lowes-giant-halloween-inflatables" className="text-orange-600 hover:text-orange-700 font-medium">
                  See our complete giant Halloween inflatables guide →
                </Link>
              </div>
            </div>
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
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <Badge variant="outline">{item.price}</Badge>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
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
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <Badge variant="outline" className="text-lg">{item.price}</Badge>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
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
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
                <a href="https://shoplowes.me/3V5TZUg" target="_blank" rel="noopener noreferrer">
                  Get it at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
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