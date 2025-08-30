import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExternalLink, ArrowRight, Star, Shield, Zap, Home, ChevronRight, Trophy, Wrench, Battery } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import ProductImage from '@/components/ProductImage';

const ImpactDrivers = () => {
  const impactDrivers = [
    {
      rank: 1,
      name: "Milwaukee 2853-20 M18 FUEL",
      voltage: "18V",
      maxTorque: 1800,
      weight: 2.8,
      batteryPlatform: "M18 RED",
      warranty: "5 years",
      bestFor: "Heavy-duty fastening, deck building",
      price: "$179",
      chuckType: "1/4 inch hex",
      priceRange: "$169-199",
      affiliate: "https://amzn.to/milwaukee-2853",
      badge: "Best Overall",
      motorType: "Brushless",
      maxRPM: "3,600",
      maxIPM: "4,000",
      features: ["REDLINK PLUS Intelligence", "4-mode drive control", "Tri-LED lighting", "Belt clip"],
      pros: ["Incredible power output", "Superior control modes", "Excellent build quality", "Best-in-class warranty"],
      cons: ["Higher price point", "Heavier than some competitors"],
      bestProjects: ["Deck construction", "Heavy framing", "Lag bolt installation", "Commercial applications"]
    },
    {
      rank: 2,
      name: "DeWalt DCF887D2 20V MAX XR",
      voltage: "20V",
      maxTorque: 1825,
      weight: 2.8,
      batteryPlatform: "20V MAX XR",
      warranty: "3 years",
      bestFor: "Professional contractors, heavy use",
      price: "$199",
      chuckType: "1/4 inch hex",
      priceRange: "$189-229",
      affiliate: "https://amzn.to/dewalt-dcf887",
      badge: "Most Powerful",
      motorType: "Brushless",
      maxRPM: "3,250",
      maxIPM: "4,400",
      features: ["3-speed settings", "Precision Drive mode", "LED work light", "Belt hook"],
      pros: ["Highest torque output", "Three speed options", "Precise control", "Great ecosystem"],
      cons: ["Premium pricing", "Overkill for light tasks"],
      bestProjects: ["Heavy construction", "Metal fabrication", "Large deck projects", "Industrial applications"]
    },
    {
      rank: 3,
      name: "Ryobi P238 ONE+ 18V",
      voltage: "18V",
      maxTorque: 1600,
      weight: 2.4,
      batteryPlatform: "ONE+ 18V",
      warranty: "3 years",
      bestFor: "DIY homeowners, general use",
      price: "$89",
      chuckType: "1/4 inch hex",
      priceRange: "$79-99",
      affiliate: "https://homedepot.sjv.io/ryobi-p238",
      badge: "Best Value",
      motorType: "Brushless",
      maxRPM: "3,100",
      maxIPM: "3,600",
      features: ["GripZone overmold", "LED work light", "Variable speed", "Magnetic bit holder"],
      pros: ["Outstanding value", "Excellent power for price", "Comfortable grip", "Huge tool ecosystem"],
      cons: ["Basic feature set", "Standard warranty only"],
      bestProjects: ["Deck screws", "Furniture assembly", "Cabinet installation", "General fastening"]
    },
    {
      rank: 4,
      name: "Makita XDT16Z 18V LXT",
      voltage: "18V",
      maxTorque: 1500,
      weight: 2.8,
      batteryPlatform: "LXT 18V",
      warranty: "3 years",
      bestFor: "Precision work, professional quality",
      price: "$149",
      chuckType: "1/4 inch hex",
      priceRange: "$139-169",
      affiliate: "https://amzn.to/makita-xdt16",
      badge: "Best Build Quality",
      motorType: "Brushless",
      maxRPM: "3,600",
      maxIPM: "4,000",
      features: ["4-speed power selection", "Assist mode", "Dual LED lights", "Variable speed"],
      pros: ["Exceptional build quality", "Great speed control", "Smooth operation", "Reliable performance"],
      cons: ["Lower torque output", "Higher price for power"],
      bestProjects: ["Fine carpentry", "Precision fastening", "Cabinet work", "Trim installation"]
    }
  ];

  const decisionSummary = [
    {
      category: "Best Overall",
      product: "Milwaukee 2853-20 M18 FUEL",
      price: "$179",
      reason: "Perfect balance of power, control, and professional features for most users"
    },
    {
      category: "Most Powerful",
      product: "DeWalt DCF887D2 20V MAX XR",
      price: "$199",
      reason: "Highest torque output at 1825 in-lbs for the most demanding applications"
    },
    {
      category: "Best Value",
      product: "Ryobi P238 ONE+ 18V",
      price: "$89",
      reason: "Excellent power and features at an unbeatable price point"
    }
  ];

  const faqs = [
    {
      question: "When do I need an impact driver vs a drill?",
      answer: "Use an impact driver for driving screws longer than 2.5 inches, lag bolts, and repetitive fastening tasks. Use a drill for making holes and driving shorter screws where precision is needed."
    },
    {
      question: "What's the difference between torque and impact power?",
      answer: "Torque is rotational force, while impact power combines rotation with rapid hammering action. Impact drivers deliver both, making them much more effective for driving long screws."
    },
    {
      question: "Can I use an impact driver for drilling holes?",
      answer: "While possible with hex-shank bits, impact drivers aren't ideal for drilling. The hammering action can cause bit walking and less precise holes. Stick to a drill for most drilling tasks."
    },
    {
      question: "Is 1800 in-lbs overkill for deck screws?",
      answer: "Not at all. Deck screws, especially 3+ inch ones, benefit from high torque. The power helps drive screws fully without stripping heads or stalling the tool."
    },
    {
      question: "Do I need brushless for an impact driver?",
      answer: "Yes, brushless is especially beneficial for impact drivers due to their high-demand use. You'll get better runtime, more power, and longer tool life."
    },
    {
      question: "What size impact driver bits do I need?",
      answer: "Most impact drivers use 1/4 inch hex bits. Stock up on Phillips #2, Robertson (square), and Torx bits in impact-rated versions for best results."
    },
    {
      question: "Can impact drivers remove stuck screws?",
      answer: "Absolutely! The hammering action of impact drivers makes them excellent for removing seized or over-torqued screws. They're often better than drills for this task."
    },
    {
      question: "How loud are impact drivers compared to drills?",
      answer: "Impact drivers are significantly louder (around 100dB vs 80dB for drills) due to the hammering mechanism. Consider ear protection for extended use."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Impact Drivers for DIY Dads 2025 (Complete Guide)",
    "description": "Expert comparison of the top impact drivers for homeowners and DIY projects. Milwaukee, DeWalt, Ryobi, and Makita models tested and ranked.",
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
        <title>Best Impact Drivers for DIY Dads 2025 (Complete Guide) | Family Product Reviews</title>
        <meta name="description" content="Expert comparison of top impact drivers for homeowners. Milwaukee, DeWalt, Ryobi & Makita models tested. Find the perfect driver for deck building & more." />
        <meta name="keywords" content="best impact driver 2025, Milwaukee impact driver, DeWalt impact driver, Ryobi impact driver, impact driver vs drill" />
        <link rel="canonical" href="https://digitaldadventures.com/tools/impact-drivers" />
        <meta property="og:title" content="Best Impact Drivers for DIY Dads 2025 (Complete Guide)" />
        <meta property="og:description" content="Expert comparison of top impact drivers for homeowners. Milwaukee, DeWalt, Ryobi & Makita models tested." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://digitaldadventures.com/tools/impact-drivers" />
        <meta property="og:image" content="https://digitaldadventures.com/images/best-impact-drivers-2025.jpg" />
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
              <Link to="/category/tools" className="hover:text-primary">Tools</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Best Impact Drivers 2025</span>
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
                  Best Impact Drivers for DIY Dads 2025
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Expert comparison of the top impact drivers for deck building, heavy fastening, and serious DIY projects. 
                  Find the perfect balance of power, control, and value.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="#comparison">See Top Picks</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#buying-guide">Buying Guide</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <ProductImage
                  src="/images/best-impact-drivers-2025.jpg"
                  alt="Best impact drivers 2025 comparison featuring Milwaukee, DeWalt, Ryobi models"
                  className="rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <AffiliateDisclosure />

        {/* Decision Summary */}
        <section id="comparison" className="py-16">
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

        {/* Comparison Table */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Impact Driver Comparison</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Model</TableHead>
                    <TableHead>Max Torque</TableHead>
                    <TableHead>Weight</TableHead>
                    <TableHead>Max RPM/IPM</TableHead>
                    <TableHead>Platform</TableHead>
                    <TableHead>Warranty</TableHead>
                    <TableHead>Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {impactDrivers.map((driver) => (
                    <TableRow key={driver.rank}>
                      <TableCell className="font-medium">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">#{driver.rank}</Badge>
                          <span>{driver.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{driver.maxTorque} in-lbs</TableCell>
                      <TableCell>{driver.weight} lbs</TableCell>
                      <TableCell>{driver.maxRPM}/{driver.maxIPM}</TableCell>
                      <TableCell>{driver.batteryPlatform}</TableCell>
                      <TableCell>{driver.warranty}</TableCell>
                      <TableCell className="font-bold text-primary">{driver.price}</TableCell>
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
            <h2 className="text-3xl font-bold text-center mb-12">Detailed Impact Driver Reviews</h2>
            <div className="grid gap-8">
              {impactDrivers.map((driver) => (
                <Card key={driver.rank} className="overflow-hidden">
                  <div className="relative">
                    {driver.badge && (
                      <Badge className="absolute top-4 left-4 z-10">{driver.badge}</Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">
                          #{driver.rank}: {driver.name}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Max Torque:</span>
                              <span className="font-semibold">{driver.maxTorque} in-lbs</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Weight:</span>
                              <span className="font-semibold">{driver.weight} lbs</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Platform:</span>
                              <span className="font-semibold">{driver.batteryPlatform}</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Max Speed:</span>
                              <span className="font-semibold">{driver.maxRPM}/{driver.maxIPM}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Warranty:</span>
                              <span className="font-semibold">{driver.warranty}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Best For:</span>
                              <span className="font-semibold text-sm">{driver.bestFor}</span>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-green-600 mb-2">Pros:</h4>
                            <ul className="space-y-1 text-sm">
                              {driver.pros.map((pro, index) => (
                                <li key={index}>• {pro}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-amber-600 mb-2">Cons:</h4>
                            <ul className="space-y-1 text-sm">
                              {driver.cons.map((con, index) => (
                                <li key={index}>• {con}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="mb-4">
                          <div className="text-3xl font-bold text-primary">{driver.price}</div>
                          <div className="text-sm text-muted-foreground">{driver.priceRange}</div>
                        </div>
                        <Button className="w-full mb-4" asChild>
                          <a href={driver.affiliate} target="_blank" rel="noopener noreferrer">
                            Check Price
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                        <div className="text-sm text-muted-foreground">
                          Best for: {driver.bestFor}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Best Cordless Drills 2025</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete guide to choosing the perfect cordless drill for your DIY projects.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/tools/best-cordless-drills-2025">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Weekend Garage Shelf Project</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Put your new impact driver to work building a sturdy garage shelf.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/projects/weekend-garage-shelf">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">DeWalt vs Milwaukee Platform Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Compare tool ecosystems to make the smartest long-term investment.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/tools/dewalt-vs-milwaukee-2025">
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

export default ImpactDrivers;