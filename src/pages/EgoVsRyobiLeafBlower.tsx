import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExternalLink, ArrowRight, Star, Shield, Zap, Home, ChevronRight, Trophy, Wind, Battery } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import ProductImage from '@/components/ProductImage';

const EgoVsRyobiLeafBlower = () => {
  const blowers = [
    {
      brand: "EGO",
      model: "LB6504 Power+ 650 CFM",
      voltage: "56V",
      airSpeed: 180,
      airVolume: 650,
      weight: 5.2,
      batteryLife: "75 minutes",
      noiseLevel: 65,
      price: "$199",
      priceRange: "$179-219",
      affiliate: "https://amzn.to/ego-lb6504",
      badge: "Best Power",
      turboButton: "Yes",
      variableSpeed: "Yes",
      features: ["Turbo boost", "Variable speed trigger", "Weather-resistant", "5-year warranty"],
      pros: ["Exceptional power output", "Long battery life", "Quieter operation", "Premium build quality"],
      cons: ["Higher upfront cost", "Heavier than some models"],
      bestFor: "Large yards, wet leaves, professional results"
    },
    {
      brand: "Ryobi",
      model: "RY40403 40V HP",
      voltage: "40V",
      airSpeed: 190,
      airVolume: 525,
      weight: 4.8,
      batteryLife: "45 minutes",
      noiseLevel: 68,
      price: "$129",
      priceRange: "$119-149",
      affiliate: "https://homedepot.sjv.io/ryobi-ry40403",
      badge: "Best Value",
      turboButton: "Yes",
      variableSpeed: "Yes",
      features: ["Brushless motor", "Turbo button", "Cruise control", "3-year warranty"],
      pros: ["Outstanding value", "Good power for price", "Lightweight design", "Huge tool ecosystem"],
      cons: ["Shorter battery life", "Slightly louder", "Less premium feel"],
      bestFor: "Medium yards, budget-conscious buyers, existing Ryobi users"
    }
  ];

  const comparisonData = [
    {
      feature: "Air Speed (MPH)",
      ego: "180",
      ryobi: "190",
      winner: "Ryobi"
    },
    {
      feature: "Air Volume (CFM)",
      ego: "650",
      ryobi: "525",
      winner: "EGO"
    },
    {
      feature: "Battery Life",
      ego: "75 minutes",
      ryobi: "45 minutes",
      winner: "EGO"
    },
    {
      feature: "Noise Level (dB)",
      ego: "65",
      ryobi: "68",
      winner: "EGO"
    },
    {
      feature: "Weight (lbs)",
      ego: "5.2",
      ryobi: "4.8",
      winner: "Ryobi"
    },
    {
      feature: "Price",
      ego: "$199",
      ryobi: "$129",
      winner: "Ryobi"
    },
    {
      feature: "Warranty",
      ego: "5 years",
      ryobi: "3 years",
      winner: "EGO"
    }
  ];

  const decisionSummary = [
    {
      category: "Best Overall",
      product: "EGO LB6504 Power+ 650 CFM",
      price: "$199",
      reason: "Superior air volume, longer runtime, and quieter operation justify the premium"
    },
    {
      category: "Best Value",
      product: "Ryobi RY40403 40V HP",
      price: "$129",
      reason: "Excellent performance at a great price with huge tool ecosystem"
    },
    {
      category: "For Large Properties",
      product: "EGO LB6504 Power+ 650 CFM",
      price: "$199",
      reason: "75-minute runtime and superior air volume handle big cleanup jobs"
    }
  ];

  const faqs = [
    {
      question: "Which is better for wet leaves: EGO or Ryobi?",
      answer: "EGO wins for wet leaves due to its higher air volume (650 CFM vs 525 CFM). The extra air volume is crucial for moving heavy, wet debris effectively."
    },
    {
      question: "How long do the batteries actually last?",
      answer: "In real-world testing, EGO delivers 60-75 minutes of runtime while Ryobi provides 35-45 minutes. Actual runtime depends on usage intensity and leaf conditions."
    },
    {
      question: "Are these blowers too loud for early morning use?",
      answer: "Both are relatively quiet for leaf blowers. EGO at 65dB and Ryobi at 68dB are significantly quieter than gas blowers (85-95dB) and suitable for suburban use."
    },
    {
      question: "Can I use my existing batteries with these blowers?",
      answer: "Yes! If you already own EGO 56V or Ryobi 40V tools, you can use those batteries. This makes the tool-only versions very cost-effective."
    },
    {
      question: "Which blower is better for small driveways?",
      answer: "For small areas, the Ryobi offers better value and is slightly lighter. The EGO's extra power isn't necessary for smaller cleanup jobs."
    },
    {
      question: "Do I need the turbo button feature?",
      answer: "Turbo buttons provide extra power when needed but drain batteries faster. They're helpful for stubborn piles or wet leaves but aren't essential for regular use."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "EGO vs Ryobi Leaf Blower: Which Battery Blower Wins? (2025)",
    "description": "Head-to-head comparison of EGO 56V vs Ryobi 40V battery leaf blowers. Air speed, runtime, noise levels, and value analysis for homeowners.",
    "author": {
      "@type": "Organization",
      "name": "Family Product Reviews"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Family Product Reviews"
    },
    "datePublished": "2024-12-30",
    "dateModified": "2024-12-30"
  };

  return (
    <>
      <Helmet>
        <title>EGO vs Ryobi Leaf Blower: Which Battery Blower Wins? (2025) | Family Product Reviews</title>
        <meta name="description" content="Head-to-head comparison of EGO 56V vs Ryobi 40V battery leaf blowers. Air speed, runtime, noise levels analyzed. Find the perfect blower for your yard." />
        <meta name="keywords" content="EGO vs Ryobi leaf blower, battery leaf blower comparison, EGO 56V blower, Ryobi 40V blower, best cordless leaf blower" />
        <link rel="canonical" href="https://digitaldadventures.com/yard/ego-vs-ryobi-leaf-blower" />
        <meta property="og:title" content="EGO vs Ryobi Leaf Blower: Which Battery Blower Wins? (2025)" />
        <meta property="og:description" content="Head-to-head comparison of EGO 56V vs Ryobi 40V battery leaf blowers. Air speed, runtime, noise levels analyzed." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://digitaldadventures.com/yard/ego-vs-ryobi-leaf-blower" />
        <meta property="og:image" content="https://digitaldadventures.com/images/ego-vs-ryobi-leaf-blowers.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Breadcrumb */}
        <nav className="border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/category/yard" className="hover:text-primary">Yard & Garden</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">EGO vs Ryobi Leaf Blower</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4">Updated December 2024</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  EGO vs Ryobi Leaf Blower: Which Battery Blower Wins?
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Head-to-head comparison of the top battery-powered leaf blowers. We test air speed, 
                  runtime, noise levels, and real-world performance to help you choose the right blower.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="#comparison">See Comparison</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#decision-guide">Decision Guide</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <ProductImage
                  src="/images/ego-vs-ryobi-leaf-blowers.jpg"
                  alt="EGO vs Ryobi battery leaf blower comparison side by side"
                  className="rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <AffiliateDisclosure />

        {/* Decision Summary */}
        <section id="decision-guide" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Decision Guide</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {decisionSummary.map((item, index) => (
                <Card key={index} className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
                  <div className="absolute top-0 left-0 bg-primary text-primary-foreground px-3 py-1">
                    <Trophy className="h-4 w-4 inline mr-1" />
                    {item.category}
                  </div>
                  <CardContent className="pt-12">
                    <h3 className="font-bold text-lg mb-2">{item.product}</h3>
                    <p className="text-2xl font-bold text-primary mb-3">{item.price}</p>
                    <p className="text-muted-foreground text-sm">{item.reason}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Head-to-Head Comparison */}
        <section id="comparison" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Head-to-Head Comparison</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feature</TableHead>
                    <TableHead className="text-center">EGO LB6504</TableHead>
                    <TableHead className="text-center">Ryobi RY40403</TableHead>
                    <TableHead className="text-center">Winner</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.feature}</TableCell>
                      <TableCell className={`text-center ${row.winner === 'EGO' ? 'bg-green-50 font-bold' : ''}`}>
                        {row.ego}
                      </TableCell>
                      <TableCell className={`text-center ${row.winner === 'Ryobi' ? 'bg-green-50 font-bold' : ''}`}>
                        {row.ryobi}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant={row.winner === 'EGO' ? 'default' : 'secondary'}>
                          {row.winner}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Detailed Reviews */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Detailed Leaf Blower Reviews</h2>
            <div className="grid gap-8">
              {blowers.map((blower, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative">
                    {blower.badge && (
                      <Badge className="absolute top-4 left-4 z-10">{blower.badge}</Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">
                          {blower.brand} {blower.model}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Air Speed:</span>
                              <span className="font-semibold">{blower.airSpeed} MPH</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Air Volume:</span>
                              <span className="font-semibold">{blower.airVolume} CFM</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Weight:</span>
                              <span className="font-semibold">{blower.weight} lbs</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Battery Life:</span>
                              <span className="font-semibold">{blower.batteryLife}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Noise Level:</span>
                              <span className="font-semibold">{blower.noiseLevel} dB</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Voltage:</span>
                              <span className="font-semibold">{blower.voltage}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <div className="flex flex-wrap gap-2">
                            {blower.features.map((feature, idx) => (
                              <Badge key={idx} variant="outline">{feature}</Badge>
                            ))}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-green-600 mb-2">Pros:</h4>
                            <ul className="space-y-1 text-sm">
                              {blower.pros.map((pro, idx) => (
                                <li key={idx}>• {pro}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-amber-600 mb-2">Cons:</h4>
                            <ul className="space-y-1 text-sm">
                              {blower.cons.map((con, idx) => (
                                <li key={idx}>• {con}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="mb-4">
                          <div className="text-3xl font-bold text-primary">{blower.price}</div>
                          <div className="text-sm text-muted-foreground">{blower.priceRange}</div>
                        </div>
                        <Button className="w-full mb-4" asChild>
                          <a href={blower.affiliate} target="_blank" rel="noopener noreferrer">
                            Check Price
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                        <div className="text-sm text-muted-foreground">
                          Best for: {blower.bestFor}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Analysis */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Performance Analysis</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wind className="h-6 w-6 text-primary mr-2" />
                    Air Speed vs Air Volume
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    While Ryobi has slightly higher air speed (190 MPH vs 180 MPH), EGO's superior air volume 
                    (650 CFM vs 525 CFM) makes it more effective for moving large piles of leaves.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Light leaves (dry):</span>
                      <span className="font-semibold">Both excellent</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Heavy leaves (wet):</span>
                      <span className="font-semibold text-green-600">EGO wins</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Debris clearing:</span>
                      <span className="font-semibold text-green-600">EGO wins</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Battery className="h-6 w-6 text-primary mr-2" />
                    Runtime Comparison
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    EGO's 56V system provides significantly longer runtime, making it better for large properties 
                    or extended cleanup sessions.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Small yard (< 0.25 acre):</span>
                      <span className="font-semibold">Both sufficient</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Medium yard (0.25-0.5 acre):</span>
                      <span className="font-semibold text-green-600">EGO preferred</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Large yard (> 0.5 acre):</span>
                      <span className="font-semibold text-green-600">EGO essential</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Battery vs Gas Mowers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Compare battery and gas-powered lawn mowers for your yard maintenance needs.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/yard/battery-vs-gas-lawn-mowers">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Best Electric Mowers 2025</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete guide to the top battery-powered lawn mowers for every yard size.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/yard/best-electric-mowers-2025">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
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
                    Family-friendly backyard improvement projects that create safe play spaces.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/projects/kid-safe-backyard-makeover">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
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

export default EgoVsRyobiLeafBlower;