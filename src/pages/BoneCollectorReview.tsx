import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExternalLink, ArrowRight, Star, Shield, Zap, Home, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LowesAffiliateCTA from '@/components/LowesAffiliateCTA';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import ProductImage from '@/components/ProductImage';

const BoneCollectorReview = () => {
  const productData = {
    name: "Haunted Living 12-ft Talking LED Bone Collector Animatronic",
    price: "$449.00",
    affiliateLink: "https://shoplowes.me/3V5TZUg",
    image: "https://mobileimages.lowes.com/productimages/9b6a0a7e-0b4d-4a6f-b4a5-0c8f3d7f0e4c/64649649.jpg",
    dimensions: "12 ft H",
    power: "Plug-in (5.9V 3A DC adapter included)",
    features: [
      "Glowing LED lighted eyes",
      "Moving head and synchronized mouth movement", 
      "Eerie lights and sinister sounds",
      "Motion, sound, or footpad/button activated",
      "Volume control and external speaker capability"
    ]
  };

  const alternatives = [
    {
      name: "Haunted Living 10-ft Poseable Skeleton",
      price: "$129.00",
      link: "https://shoplowes.me/47tOTIT",
      pros: "Budget-friendly, poseable joints",
      cons: "No motion or sound features"
    },
    {
      name: "Disney 6-ft Headless Knight", 
      price: "$329.00",
      link: "https://shoplowes.me/45yzBjt",
      pros: "Disney theming, musical features",
      cons: "Smaller size, different aesthetic"
    }
  ];

  const bundles = [
    {
      name: "Bone Collector Centerpiece",
      price: "$650-750",
      items: ["12ft Bone Collector", "3.5ft Kraken", "Tombstone Signs"],
      description: "Create a terrifying focal point with supporting elements"
    },
    {
      name: "Ultimate Scare Combo",
      price: "$850-950", 
      items: ["12ft Bone Collector", "12ft Grim Reaper Inflatable", "Fog Machine"],
      description: "Maximum impact setup for large yards"
    }
  ];

  const faqs = [
    {
      question: "How difficult is the Bone Collector to assemble?",
      answer: "Assembly takes 45-60 minutes for two people. The main challenge is positioning the 12ft frame, but all connections are clearly labeled and straightforward."
    },
    {
      question: "How much yard space does the Bone Collector need?",
      answer: "Recommend at least 8x8 feet of clear space. The 12ft height requires checking for overhead obstacles like tree branches or power lines."
    },
    {
      question: "Is the Bone Collector weather resistant?",
      answer: "Yes, it's designed for outdoor use but we recommend covering during severe weather. The electronics are weather-resistant but not waterproof."
    },
    {
      question: "How loud are the sound effects?",
      answer: "Sound level is adjustable from whisper-quiet to quite loud (estimated 85+ dB). Perfect for neighborhood-friendly or maximum scare setups."
    },
    {
      question: "What's the power consumption?",
      answer: "Uses approximately 18 watts (0.15 amps) - very energy efficient. Can run 24/7 throughout October without significant electric bill impact."
    },
    {
      question: "Does it come with a warranty?",
      answer: "Includes standard Lowe's return policy (90 days) plus manufacturer's limited warranty on electronic components."
    }
  ];

  // Schema markup
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productData.name,
    "description": "12-foot talking Halloween animatronic with LED eyes, motion activation, and realistic sound effects",
    "brand": "Haunted Living",
    "offers": {
      "@type": "Offer",
      "price": "449.00",
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
        "ratingValue": 4.5
      },
      "reviewBody": "The Haunted Living 12-ft Bone Collector is Lowe's flagship Halloween animatronic offering impressive features and build quality for serious Halloween enthusiasts."
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://digitaldadventures.com"},
      {"@type": "ListItem", "position": 2, "name": "Outdoor", "item": "https://digitaldadventures.com/category/outdoor"},
      {"@type": "ListItem", "position": 3, "name": "Lowe's Halloween", "item": "https://digitaldadventures.com/lowes-halloween-decorations"},
      {"@type": "ListItem", "position": 4, "name": "Bone Collector Review"}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Lowe's 12ft Bone Collector Animatronic Review: Worth the $449 Investment?</title>
        <meta name="description" content="In-depth review of Lowe's 12ft Talking LED Bone Collector Halloween animatronic. Setup guide, features analysis, and value comparison for 2025." />
        <meta name="keywords" content="12 ft skeleton lowes, bone collector lowes, giant halloween decorations, halloween animatronics, lowe's halloween" />
        <link rel="canonical" href="https://digitaldadventures.com/lowes-12ft-bone-collector-animatronic-review" />
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
            <li className="text-gray-900">Bone Collector Review</li>
          </ol>
        </nav>

        {/* Affiliate Disclosure */}
        <div className="container mx-auto px-4">
          <AffiliateDisclosure className="mb-8" />
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-orange-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Haunted Living 12-ft Bone Collector: Complete Review & Setup Guide
                </h1>
                <p className="text-xl mb-8">
                  Lowe's flagship Halloween animatronic delivers professional haunted house quality for your front yard. 
                  Our comprehensive analysis covers setup, features, durability, and value.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
                    <a href={productData.affiliateLink} target="_blank" rel="noopener noreferrer">
                      Get it at Lowe's - {productData.price} <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Badge variant="secondary" className="text-lg px-4 py-2">Available at Lowe's stores nationwide</Badge>
                </div>
              </div>
              <div className="lg:text-right">
                <ProductImage
                  src="https://mobileimages.lowes.com/productimages/f0ed1bd3-5a72-480f-a909-35256aa2247d/72605872.jpeg"
                  alt="Lowe's 12ft Bone Collector Halloween animatronic with glowing LED eyes and realistic bone details in haunting outdoor display"
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
            productName="Haunted Living 12-ft Talking LED Bone Collector Animatronic"
            affiliateUrl="https://shoplowes.me/3V5TZUg"
            price="$449.00"
            className="my-8"
          />
        </div>

        {/* Product Specifications */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Product Specifications & Features</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-6 w-6 text-orange-600 mr-2" />
                    Technical Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Height</TableCell>
                        <TableCell>12 feet</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Power</TableCell>
                        <TableCell>Plug-in (5.9V 3A adapter included)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Activation</TableCell>
                        <TableCell>Motion, sound, or manual button</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Sound Level</TableCell>
                        <TableCell>Adjustable with volume control</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Weather Rating</TableCell>
                        <TableCell>Outdoor rated, weather resistant</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-6 w-6 text-orange-600 mr-2" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {productData.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Badge variant="outline" className="mr-3 mt-1">✓</Badge>
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
            <h2 className="text-3xl font-bold text-center mb-12">Setup & Installation Guide</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Preparation (15 min)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Clear 8x8 ft area minimum</li>
                    <li>• Check overhead clearance (15+ ft)</li>
                    <li>• Locate power outlet within 10 ft</li>
                    <li>• Have 2 people for assembly</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>2. Assembly (30 min)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Connect base sections first</li>
                    <li>• Attach torso and head assembly</li>
                    <li>• Route all wiring through frame</li>
                    <li>• Test all connections before positioning</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>3. Testing (15 min)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Adjust motion sensor range</li>
                    <li>• Set volume level for neighborhood</li>
                    <li>• Test LED eye brightness</li>
                    <li>• Verify mouth movement sync</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Value Analysis */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Value Analysis & Alternatives</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {alternatives.map((alt, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <CardTitle className="text-lg">{alt.name}</CardTitle>
                    <div className="text-2xl font-bold text-orange-600">{alt.price}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-green-600 mb-1">Pros:</p>
                        <p className="text-sm">{alt.pros}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-red-600 mb-1">Cons:</p>
                        <p className="text-sm">{alt.cons}</p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={alt.link} target="_blank" rel="noopener noreferrer">
                          View at Lowe's <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bundle Suggestions */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Complete Scene Bundles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {bundles.map((bundle, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      {bundle.name}
                      <Badge variant="secondary">{bundle.price}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{bundle.description}</p>
                    <ul className="space-y-2">
                      {bundle.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <Badge variant="outline" className="mr-2">✓</Badge>
                          {item}
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
        <section className="py-16 bg-orange-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Halloween Display?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              The Bone Collector is available now at Lowe's stores nationwide and online. 
              Don't wait - popular Halloween items sell out fast!
            </p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
              <a href={productData.affiliateLink} target="_blank" rel="noopener noreferrer">
                Get the Bone Collector at Lowe's - {productData.price} <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
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
                    <Link to="/lowes-halloween-decorations" className="text-orange-600 hover:text-orange-700">
                      Complete Lowe's Halloween Guide
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Explore all the best Halloween decorations at Lowe's for 2025</p>
                  <Link to="/lowes-halloween-decorations" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                    Read More →
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">
                    <Link to="/lowes-giant-halloween-inflatables" className="text-orange-600 hover:text-orange-700">
                      Giant Halloween Inflatables
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Compare the best large inflatables for maximum yard impact</p>
                  <Link to="/lowes-giant-halloween-inflatables" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                    Read More →
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
                  <p className="text-sm text-gray-600 mb-3">Disney-themed Halloween decorations for magical displays</p>
                  <Link to="/lowes-haunted-mansion-collection" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                    Read More →
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

export default BoneCollectorReview;