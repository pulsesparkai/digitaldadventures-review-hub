import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExternalLink, ArrowRight, Star, Anchor, Waves, ChevronRight, Lightbulb, MapPin, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LowesAffiliateCTA from '@/components/LowesAffiliateCTA';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import ProductImage from '@/components/ProductImage';

const KrakenReview = () => {
  const productData = {
    name: "Haunted Living 3.5-ft LED Kraken Monster Yard Decoration",
    price: "$199.00",
    originalPrice: "$249.99",
    affiliateLink: "https://shoplowes.me/417a5AN",
    image: "https://mobileimages.lowes.com/productimages/9i0j1k2l-3m4n-5o6p-7q8r9s0t1u2v/64649657.jpg",
    dimensions: "3.5 ft H (42 in tall) x 27 in W",
    power: "Plug-in LED lighting system",
    features: [
      "Light-up glowing eyes for eerie nighttime effect",
      "Includes 4 poseable tentacles for custom displays", 
      "Ground staking system for secure installation",
      "LED lighting creates dramatic shadows and atmosphere",
      "Weather-resistant construction for outdoor use"
    ],
    uniqueFeatures: [
      "Only sea monster option in Lowe's Halloween collection",
      "Creates 'Haunted Harbor' pirate theme opportunity", 
      "Perfect size for impact without overwhelming smaller yards",
      "Pairs uniquely with both traditional and themed decorations"
    ]
  };

  const placementIdeas = [
    {
      location: "Front Yard Centerpiece",
      description: "Position prominently in center of yard with fog effects",
      space: "8x8 ft minimum",
      impact: "High",
      complementary: ["Fog machine", "Blue LED spotlights", "Nautical props"]
    },
    {
      location: "Haunted Harbor Theme",
      description: "Create complete pirate/sea monster Halloween scene",
      space: "15x20 ft",
      impact: "Maximum", 
      complementary: ["Pirate decorations", "Ship wheel", "Treasure chest", "Skeleton crew"]
    },
    {
      location: "Pool/Water Feature Integration",
      description: "Emerge the Kraken from pool or water feature area",
      space: "Pool deck area",
      impact: "Dramatic",
      complementary: ["Underwater LED lights", "Fog effects", "Nautical flags"]
    },
    {
      location: "Mixed Traditional Display",
      description: "Add unique element to skeleton/ghost themed yard",
      space: "Side yard accent",
      impact: "Surprise",
      complementary: ["Traditional Halloween decorations", "Mixed theme lighting"]
    }
  ];

  const themeIdeas = [
    {
      name: "Haunted Harbor Complete",
      budget: "$350-500",
      description: "Transform your yard into a spooky maritime scene",
      items: [
        "3.5ft LED Kraken ($199)",
        "Pirate skeleton decorations ($75)",
        "Nautical rope and anchor props ($50)",
        "Blue/green LED lighting kit ($45)",
        "Fog machine for atmosphere ($60)"
      ],
      difficulty: "Intermediate",
      uniqueness: "Very High"
    },
    {
      name: "Sea Monster & Skeletons",
      budget: "$450-650", 
      description: "Blend sea and land monsters for epic Halloween display",
      items: [
        "3.5ft LED Kraken ($199)",
        "10ft Poseable Skeleton ($129)",
        "Tombstone decorations ($25)",
        "Mixed lighting effects ($75)",
        "Sound effects system ($85)"
      ],
      difficulty: "Moderate",
      uniqueness: "High"
    },
    {
      name: "Ultimate Sea Terror",
      budget: "$650-850",
      description: "Maximum impact oceanic Halloween nightmare",
      items: [
        "3.5ft LED Kraken ($199)",
        "12ft Bone Collector Animatronic ($449)",
        "Professional fog machines ($120)",
        "Advanced LED lighting system ($150)",
        "Nautical and skeleton props ($100)"
      ],
      difficulty: "Advanced", 
      uniqueness: "Maximum"
    }
  ];

  const similarDecorations = [
    {
      name: "Haunted Living 12-ft Bone Collector",
      price: "$449.00",
      link: "https://shoplowes.me/3V5TZUg",
      comparison: "Larger, more expensive, traditional skeleton theme",
      advantage: "Kraken offers unique sea monster theme at lower price point"
    },
    {
      name: "Disney 6-ft Headless Knight",
      price: "$329.00", 
      link: "https://shoplowes.me/45yzBjt",
      comparison: "Disney theming, musical features, similar size",
      advantage: "Kraken provides non-Disney option with LED effects"
    },
    {
      name: "Haunted Hill Farm 12-ft Grim Reaper Inflatable",
      price: "$199.00",
      link: "https://shoplowes.me/3UxnCOe", 
      comparison: "Same price point, inflatable vs solid construction",
      advantage: "Kraken offers permanent installation with unique theme"
    }
  ];

  const setupGuide = [
    {
      step: 1,
      title: "Site Preparation",
      time: "10 minutes",
      details: [
        "Choose level ground with 5x5 ft clear space minimum",
        "Ensure power outlet within 25 ft (use outdoor extension cord)",
        "Check for underground utilities before staking",
        "Clear area of debris and level if necessary"
      ]
    },
    {
      step: 2, 
      title: "Assembly & Positioning",
      time: "15 minutes",
      details: [
        "Unpack Kraken body and position in desired location",
        "Arrange 4 tentacles around body for dramatic effect",
        "Test different tentacle positions for best visual impact",
        "Ensure all pieces are stable before final positioning"
      ]
    },
    {
      step: 3,
      title: "Ground Installation", 
      time: "10 minutes",
      details: [
        "Use included ground stakes to secure main body",
        "Stake tentacles individually for wind resistance",
        "Test stability by gently pushing - should not move",
        "Adjust stakes if ground is too hard or soft"
      ]
    },
    {
      step: 4,
      title: "LED System Setup",
      time: "5 minutes", 
      details: [
        "Connect LED power cord to weatherproof extension cord",
        "Test eye lighting to ensure proper function",
        "Position cord to avoid tripping hazards",
        "Use cord covers if crossing walkways"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does the Kraken's LED lighting work?",
      answer: "The LED system illuminates the Kraken's eyes with an eerie glow. It's designed for continuous operation and creates dramatic lighting effects especially visible at night. The system is energy-efficient and uses approximately 15 watts of power."
    },
    {
      question: "Can the tentacles be positioned differently?",
      answer: "Yes! The 4 tentacles can be arranged in various positions around the main body. This allows you to customize the display based on your yard layout and desired visual impact. Many users create dynamic scenes with tentacles appearing to emerge from different areas."
    },
    {
      question: "Is the Kraken weather resistant for outdoor use?",
      answer: "Yes, the Kraken is specifically designed for outdoor Halloween displays. The construction materials and LED components are weather-resistant. However, we recommend covering during severe weather and storing indoors during the off-season."
    },
    {
      question: "How does this compare to traditional Halloween decorations?",
      answer: "The Kraken offers a unique alternative to typical skeletons and ghosts. It's perfect for creating 'Haunted Harbor' themes, pirate-themed displays, or adding an unexpected element to traditional Halloween setups. The sea monster theme sets it apart from common decorations."
    },
    {
      question: "What's the best way to incorporate this into existing decorations?",
      answer: "The Kraken works well as either a centerpiece or accent piece. It pairs surprisingly well with traditional Halloween decorations by adding variety, or can anchor a complete nautical/pirate themed display. The LED lighting complements other illuminated decorations."
    },
    {
      question: "How difficult is storage after Halloween?",
      answer: "The Kraken breaks down into manageable pieces - the main body and 4 separate tentacles. This makes storage much easier than larger one-piece decorations. Store in a dry location and coil the LED cord carefully to prevent damage."
    }
  ];

  // Schema markup
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productData.name,
    "description": "3.5-foot LED Kraken sea monster Halloween decoration with light-up eyes and poseable tentacles",
    "brand": "Haunted Living",
    "offers": {
      "@type": "Offer",
      "price": "199.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Lowe's"
      }
    },
    "review": {
      "@type": "Review",
      "author": {
        "@type": "Organization",
        "name": "DigitalDadVentures"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 4.0
      },
      "reviewBody": "The Haunted Living LED Kraken offers a unique alternative to traditional Halloween decorations with impressive LED lighting and versatile tentacle positioning."
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://digitaldadventures.com"},
      {"@type": "ListItem", "position": 2, "name": "Outdoor", "item": "https://digitaldadventures.com/category/outdoor"},
      {"@type": "ListItem", "position": 3, "name": "Lowe's Halloween", "item": "https://digitaldadventures.com/lowes-halloween-decorations"},
      {"@type": "ListItem", "position": 4, "name": "Kraken Review"}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Lowe's Kraken Halloween Decoration Review: Sea Monster Spectacular</title>
        <meta name="description" content="Detailed review of Lowe's 3.5ft Kraken Halloween decoration. Features, setup, and creating a Haunted Harbor theme for 2025." />
        <meta name="keywords" content="kraken halloween decoration lowes, sea monster halloween decoration, haunted harbor theme, unique halloween decorations, led halloween decorations" />
        <link rel="canonical" href="https://digitaldadventures.com/lowes-kraken-halloween-yard-decoration" />
      </Helmet>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
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
            <li className="text-gray-900">Kraken Review</li>
          </ol>
        </nav>

        {/* Affiliate Disclosure */}
        <div className="container mx-auto px-4">
          <AffiliateDisclosure className="mb-8" />
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-teal-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Anchor className="h-8 w-8 mr-3 text-teal-300" />
                  <Badge variant="secondary" className="text-lg px-3 py-1">Unique Sea Monster Theme</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Haunted Living 3.5-ft LED Kraken: Make Waves in Your Halloween Display
                </h1>
                <p className="text-xl mb-8">
                  Break away from traditional Halloween decorations with this impressive LED sea monster. 
                  Perfect for creating unique "Haunted Harbor" themes or adding an unexpected twist to classic displays.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
                    <a href={productData.affiliateLink} target="_blank" rel="noopener noreferrer">
                      Get it at Lowe's - {productData.price} <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-white border-white">Was {productData.originalPrice}</Badge>
                    <Badge className="bg-green-600">Save $50</Badge>
                  </div>
                </div>
              </div>
              <div className="lg:text-right">
                <ProductImage
                  src="https://mobileimages.lowes.com/productimages/178de7ab-27e8-4d2b-aa1e-835d342b4a69/72605862.jpeg"
                  alt="Lowe's 3.5ft LED Kraken Halloween decoration with glowing eyes and 4 poseable tentacles creating a haunted harbor sea monster theme"
                  className="w-full max-w-md mx-auto lg:ml-auto rounded-lg shadow-2xl"
                  size="large"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Affiliate CTA */}
        <div className="container mx-auto px-4 my-8">
          <LowesAffiliateCTA
            productName="Haunted Living 3.5-ft LED Kraken Monster Yard Decoration"
            affiliateUrl="https://shoplowes.me/417a5AN"
            className="my-8"
          />
        </div>

        {/* Why the Kraken Stands Out */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why the Kraken Stands Out</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Waves className="h-6 w-6 text-teal-600 mr-2" />
                    Unique Design Appeal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {productData.uniqueFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Badge variant="outline" className="mr-3 mt-1">✓</Badge>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="h-6 w-6 text-teal-600 mr-2" />
                    Technical Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {productData.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Badge variant="outline" className="mr-3 mt-1">⚡</Badge>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Setup Guide */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Step-by-Step Setup Guide</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {setupGuide.map((step) => (
                <Card key={step.step}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge className="mr-3 bg-teal-600">{step.step}</Badge>
                      {step.title}
                    </CardTitle>
                    <CardTitle className="text-sm text-gray-600">{step.time}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {step.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-teal-600 mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Placement Ideas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Creative Placement Ideas</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {placementIdeas.map((idea, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-teal-600" />
                        {idea.location}
                      </div>
                      <Badge variant="secondary">{idea.impact} Impact</Badge>
                    </CardTitle>
                    <CardTitle className="text-sm text-gray-600">{idea.description}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-sm"><strong>Space Required:</strong> {idea.space}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Complementary Items:</h4>
                      <div className="flex flex-wrap gap-2">
                        {idea.complementary.map((item, itemIndex) => (
                          <Badge key={itemIndex} variant="outline">{item}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Theme Building */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Complete Theme Ideas</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {themeIdeas.map((theme, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <CardTitle>{theme.name}</CardTitle>
                    <div className="text-2xl font-bold text-teal-600">{theme.budget}</div>
                    <CardTitle className="text-sm text-gray-600">{theme.description}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div><strong>Difficulty:</strong> {theme.difficulty}</div>
                      <div><strong>Uniqueness:</strong> {theme.uniqueness}</div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Complete Package:</h4>
                      <ul className="space-y-1 text-sm">
                        {theme.items.map((item, itemIndex) => (
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

        {/* Comparison with Similar Decorations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Compares</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Theme</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Kraken Advantage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {similarDecorations.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700">
                          {item.name} <ExternalLink className="inline h-3 w-3 ml-1" />
                        </a>
                      </TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>{item.comparison}</TableCell>
                      <TableCell>Various</TableCell>
                      <TableCell className="text-sm">{item.advantage}</TableCell>
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
        <section className="py-16 bg-teal-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Haunted Harbor?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              The LED Kraken is available now at Lowe's stores nationwide. 
              Create a Halloween display that nobody in your neighborhood will forget!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
                <a href={productData.affiliateLink} target="_blank" rel="noopener noreferrer">
                  Get the Kraken at Lowe's - {productData.price} <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white hover:text-primary" asChild>
                <Link to="/lowes-halloween-decorations">
                  Explore More Halloween Ideas <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Reviews */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Related Halloween Reviews</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">
                    <Link to="/lowes-12ft-bone-collector-animatronic-review" className="text-teal-600 hover:text-teal-700">
                      12ft Bone Collector Review
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Detailed analysis of Lowe's flagship Halloween animatronic</p>
                  <Link to="/lowes-12ft-bone-collector-animatronic-review" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                    Read Review →
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">
                    <Link to="/lowes-haunted-mansion-collection" className="text-teal-600 hover:text-teal-700">
                      Disney Haunted Mansion Collection
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Complete guide to Disney's themed Halloween decorations</p>
                  <Link to="/lowes-haunted-mansion-collection" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                    Explore Collection →
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">
                    <Link to="/lowes-giant-halloween-inflatables" className="text-teal-600 hover:text-teal-700">
                      Giant Halloween Inflatables
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Complete roundup of Lowe's inflatable Halloween decorations</p>
                  <Link to="/lowes-giant-halloween-inflatables" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                    View Guide →
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

export default KrakenReview;