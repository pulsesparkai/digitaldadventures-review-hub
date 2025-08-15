import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExternalLink, ArrowRight, Star, Castle, Music, ChevronRight, Eye, Lightbulb, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductImage from '@/components/ProductImage';

const HauntedMansionCollection = () => {
  const collectionItems = [
    {
      id: 1,
      name: "Disney 6-ft The Haunted Mansion Musical Headless Knight Animatronic",
      price: "$329.00",
      originalPrice: "$399.99",
      affiliateLink: "https://shoplowes.me/45yzBjt",
      image: "/placeholder.svg",
      category: "signature",
      features: ["Plays 'Grim Grinning Ghosts'", "Mouth movement synced to music", "Lantern lights up and moves", "Holding talking head"],
      dimensions: "6 ft H x 2 ft W x 2 ft D",
      power: "Plug-in (adapter included)",
      description: "The imposing armored Headless Knight serves as the perfect centerpiece for your Disney Haunted Mansion theme",
      setupDifficulty: "Moderate",
      badge: "Centerpiece"
    },
    {
      id: 2,
      name: "Disney 2-ft Freestanding Talking Lighted Haunted Mansion Madame Leota Tombstone Animatronic",
      price: "$109.00",
      originalPrice: "$139.99", 
      affiliateLink: "https://shoplowes.me/472zrUd",
      image: "https://mobileimages.lowes.com/productimages/1d0e5926-2b65-4ad1-96fc-b8d2d3469c2a/48447836.jpg",
      category: "signature",
      features: ["Animated Madame Leota speaks", "Eyes flash blue", "Mouth moves with phrases", "Sound activated"],
      dimensions: "31 in H x 21.7 in W x 3.3 in D",
      power: "Battery-operated",
      description: "The mystical Madame Leota's floating head in her crystal ball speaks spooky phrases",
      setupDifficulty: "Easy",
      badge: "Fan Favorite"
    },
    {
      id: 3,
      name: "Disney 6-ft The Haunted Mansion Life-Size Caretaker Motion Activated Animatronic",
      price: "$249.00",
      originalPrice: "$299.99",
      affiliateLink: "https://shoplowes.me/4lpioir",
      image: "https://mobileimages.lowes.com/productimages/d666b32c-a3a2-4131-912a-142d162c9771/63125954.jpg",
      category: "signature", 
      features: ["Motion and sound activated", "Moves lantern back and forth", "Plays theme music and crow sounds", "Collapsible for storage"],
      dimensions: "6 ft H",
      power: "Plug-in (adapter included)",
      description: "The mysterious groundskeeper watches over your haunted estate with authentic details",
      setupDifficulty: "Moderate",
      badge: "Authentic"
    }
  ];

  const complementaryItems = [
    {
      name: "Gemmy 6-ft Disney Hitchhiking Ghosts Inflatable",
      price: "$99.98",
      link: "https://shoplowes.me/4fy9FsU",
      description: "Complete the scene with the famous trio of hitchhiking spirits"
    },
    {
      name: "HoliScapes AtmosFX Jack-O-Lantern Jamboree",
      price: "$49.98", 
      link: "https://shoplowes.me/45MjsZb",
      description: "Project spooky scenes on your house to enhance the mansion atmosphere"
    },
    {
      name: "Froggy's Fog Machine",
      price: "$59.98",
      link: "https://shoplowes.me/4mGgzi2", 
      description: "Create an eerie atmosphere with rolling fog effects"
    }
  ];

  const layoutPlans = [
    {
      name: "Front Porch Mansion",
      space: "8x12 ft",
      budget: "$200-350", 
      items: ["Madame Leota Tombstone", "Fog Machine", "Purple LED lighting"],
      description: "Transform your front porch into a mystical seance parlor",
      difficulty: "Beginner",
      impact: "High"
    },
    {
      name: "Graveyard Estate",
      space: "15x20 ft",
      budget: "$400-600",
      items: ["Headless Knight", "Caretaker", "Madame Leota", "AtmosFX Projection"],
      description: "Create a complete haunted mansion graveyard scene",
      difficulty: "Intermediate", 
      impact: "Maximum"
    },
    {
      name: "Grand Mansion Display",
      space: "20x30 ft",
      budget: "$700-900",
      items: ["All 3 Animatronics", "Hitchhiking Ghosts", "Multiple fog machines", "Professional lighting"],
      description: "Full Disney Haunted Mansion experience with multiple zones",
      difficulty: "Advanced",
      impact: "Legendary"
    }
  ];

  const collectionTiers = [
    {
      name: "Starter Collection",
      price: "$109-179",
      description: "Begin your haunted mansion with the iconic Madame Leota",
      items: ["Madame Leota Tombstone", "Basic purple lighting", "Fog effects"],
      ideal: "First-time Disney Halloween decorators, apartment/condo residents"
    },
    {
      name: "Classic Mansion",
      price: "$350-500", 
      description: "Core Disney experience with signature characters",
      items: ["Headless Knight", "Madame Leota", "AtmosFX projection", "Professional lighting"],
      ideal: "Disney fans wanting authentic Haunted Mansion atmosphere"
    },
    {
      name: "Ultimate Estate",
      price: "$650-850",
      description: "Complete Disney Haunted Mansion transformation",
      items: ["All 3 animatronics", "Hitchhiking Ghosts inflatable", "Multiple fog machines", "Full lighting design"],
      ideal: "Serious Disney collectors, large display spaces, maximum impact"
    }
  ];

  const tips = [
    {
      category: "Music Synchronization",
      icon: Music,
      tips: [
        "Play 'Grim Grinning Ghosts' on repeat for ambient soundtrack",
        "Coordinate animatronic music with background audio for seamless experience",
        "Use Bluetooth speakers hidden throughout display for surround sound",
        "Time fog machine activations with musical crescendos"
      ]
    },
    {
      category: "Lighting Design", 
      icon: Lightbulb,
      tips: [
        "Use purple and green LED spotlights for authentic mansion colors",
        "Backlight tombstones and figures for dramatic silhouettes", 
        "Install flickering candle effects near Madame Leota",
        "Avoid bright white lights that break the spooky illusion"
      ]
    },
    {
      category: "Guest Experience",
      icon: Users,
      tips: [
        "Position Madame Leota where trick-or-treaters will be surprised",
        "Create a walking path that leads past each character", 
        "Use motion sensors strategically for maximum scare timing",
        "Provide photo opportunities with non-moving elements"
      ]
    }
  ];

  const faqs = [
    {
      question: "Are these official Disney licensed products?",
      answer: "Yes, all Haunted Mansion items at Lowe's are officially licensed Disney products with authentic character designs, sounds, and music from the actual attraction."
    },
    {
      question: "Can the animatronics be used indoors and outdoors?",
      answer: "The Headless Knight and Caretaker are designed for outdoor use with weather-resistant materials. Madame Leota is battery-operated and works well both indoors and in covered outdoor areas."
    },
    {
      question: "How loud are the sound effects and music?",
      answer: "All animatronics have adjustable volume controls. The music and phrases are clear and recognizable to Disney fans but can be set to neighborhood-friendly levels."
    },
    {
      question: "Do I need to buy all three pieces for the full effect?",
      answer: "No, each piece stands alone beautifully. Start with Madame Leota for iconic recognition, add the Headless Knight for drama, and complete with the Caretaker for the full mansion experience."
    },
    {
      question: "How do these compare to Disney theme park merchandise?",
      answer: "These are specifically designed for home displays with the same attention to detail as park merchandise but sized and engineered for residential use and seasonal storage."
    },
    {
      question: "What's the best way to store these after Halloween?",
      answer: "The Caretaker collapses for easy storage. Store all pieces in dry locations with original packaging if possible. Remove batteries from Madame Leota during storage."
    }
  ];

  // Schema markup
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Disney Haunted Mansion Halloween Collection at Lowe's",
    "description": "Complete guide to Disney's Haunted Mansion Halloween decorations available at Lowe's",
    "hasPart": collectionItems.map(item => ({
      "@type": "Product",
      "name": item.name,
      "description": item.description,
      "offers": {
        "@type": "Offer", 
        "price": item.price.replace('$', ''),
        "priceCurrency": "USD"
      },
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://digitaldadventures.com"},
      {"@type": "ListItem", "position": 2, "name": "Outdoor", "item": "https://digitaldadventures.com/category/outdoor"},
      {"@type": "ListItem", "position": 3, "name": "Lowe's Halloween", "item": "https://digitaldadventures.com/lowes-halloween-decorations"},
      {"@type": "ListItem", "position": 4, "name": "Haunted Mansion Collection"}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Lowe's Haunted Mansion Halloween Collection: Complete Disney Theme Guide</title>
        <meta name="description" content="Transform your yard with Lowe's Haunted Mansion Halloween collection. Complete guide to Disney animatronics and themed decorations." />
        <meta name="keywords" content="disney haunted mansion halloween, lowe's disney halloween, haunted mansion decorations, disney halloween animatronics, madame leota, headless knight" />
        <link rel="canonical" href="https://digitaldadventures.com/lowes-haunted-mansion-collection" />
      </Helmet>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
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
            <li className="text-gray-900">Haunted Mansion Collection</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 to-gray-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <Castle className="h-16 w-16 mx-auto mb-4 text-purple-300" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Lowe's Haunted Mansion Collection: Create Your Disney Spooky Estate
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto">
              Bring the magic of Disney's most beloved spooky attraction to your front yard. 
              This officially licensed collection features authentic characters, music, and details 
              straight from the legendary Haunted Mansion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                <a href="https://shoplowes.me/45yzBjt" target="_blank" rel="noopener noreferrer">
                  Shop Haunted Mansion Collection <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Badge variant="secondary" className="text-lg px-4 py-2">Official Disney Licensed Products</Badge>
            </div>
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mx-4 my-8">
          <p className="text-sm text-amber-800">
            <strong>Affiliate Disclosure:</strong> This post contains affiliate links. We may earn a commission at no extra cost to you when you purchase through our links.
          </p>
        </div>

        {/* Collection Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Signature Collection Pieces</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {collectionItems.map((item) => (
                <Card key={item.id} className="overflow-hidden relative">
                  {item.badge && (
                    <Badge className="absolute top-4 left-4 z-10 bg-purple-600">{item.badge}</Badge>
                  )}
                  <div className="aspect-square bg-gray-100">
                    <ProductImage 
                      src={item.image} 
                      alt={`${item.name} - Disney Halloween decoration`}
                      className="w-full h-full object-cover"
                      size="medium"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2 line-clamp-2">{item.name}</h3>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-2xl font-bold text-purple-600">{item.price}</div>
                        {item.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">{item.originalPrice}</div>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                      <div><strong>Dimensions:</strong> {item.dimensions}</div>
                      <div><strong>Power:</strong> {item.power}</div>
                      <div><strong>Setup:</strong> {item.setupDifficulty}</div>
                      <div><strong>Type:</strong> {item.category}</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {item.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{feature}</Badge>
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

        {/* Complete the Scene */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Complete the Haunted Mansion Scene</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {complementaryItems.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold mb-2">{item.name}</h3>
                    <div className="text-xl font-bold text-purple-600 mb-3">{item.price}</div>
                    <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        Add to Collection <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Layout Plans */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Haunted Mansion Layout Plans</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {layoutPlans.map((plan, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      {plan.name}
                      <Badge variant="secondary">{plan.budget}</Badge>
                    </CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div><strong>Space:</strong> {plan.space}</div>
                      <div><strong>Difficulty:</strong> {plan.difficulty}</div>
                      <div><strong>Impact:</strong> {plan.impact}</div>
                      <div><strong>Items:</strong> {plan.items.length}</div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Required Items:</h4>
                      <ul className="space-y-1 text-sm">
                        {plan.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <Badge variant="outline" className="mr-2 mt-0.5 text-xs">•</Badge>
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

        {/* Collection Tiers */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Collection Budget Tiers</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {collectionTiers.map((tier, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <CardTitle>{tier.name}</CardTitle>
                    <div className="text-2xl font-bold text-purple-600">{tier.price}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{tier.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Includes:</h4>
                      <ul className="space-y-1 text-sm">
                        {tier.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center">
                            <Badge variant="outline" className="mr-2">✓</Badge>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 bg-purple-50 rounded text-sm">
                      <strong>Ideal For:</strong> {tier.ideal}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Disney Theme Tips */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Creating Authentic Disney Magic</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tips.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <section.icon className="h-5 w-5 mr-2 text-purple-600" />
                      {section.category}
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

        {/* Comparison Table */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Collection Comparison</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Character</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Power</TableHead>
                    <TableHead>Key Feature</TableHead>
                    <TableHead>Best Use</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {collectionItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name.split(' ').slice(-3).join(' ')}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>{item.dimensions}</TableCell>
                      <TableCell>{item.power}</TableCell>
                      <TableCell>{item.features[0]}</TableCell>
                      <TableCell className="text-sm">{item.category === 'signature' ? 'Main Display' : 'Accent'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
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
        <section className="py-16 bg-purple-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Disney Haunted Mansion?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Transform your yard into the most magical haunted attraction in the neighborhood. 
              These authentic Disney pieces are available now at Lowe's stores nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
                <a href="https://shoplowes.me/45yzBjt" target="_blank" rel="noopener noreferrer">
                  Start Your Collection at Lowe's <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600" asChild>
                <Link to="/lowes-halloween-decorations">
                  Explore More Halloween Ideas <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Collections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Related Halloween Collections</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">
                    <Link to="/lowes-12ft-bone-collector-animatronic-review" className="text-purple-600 hover:text-purple-700">
                      12ft Bone Collector Review
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Detailed analysis of Lowe's flagship Halloween animatronic</p>
                  <Link to="/lowes-12ft-bone-collector-animatronic-review" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    Read Review →
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">
                    <Link to="/lowes-giant-halloween-inflatables" className="text-purple-600 hover:text-purple-700">
                      Giant Halloween Inflatables
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Complete roundup of Lowe's inflatable Halloween decorations</p>
                  <Link to="/lowes-giant-halloween-inflatables" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    View Inflatables →
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">
                    <Link to="/lowes-kraken-halloween-yard-decoration" className="text-purple-600 hover:text-purple-700">
                      Kraken Sea Monster Review
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Unique alternative for those wanting something different</p>
                  <Link to="/lowes-kraken-halloween-yard-decoration" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
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

export default HauntedMansionCollection;