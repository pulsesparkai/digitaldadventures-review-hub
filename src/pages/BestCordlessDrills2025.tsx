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

const BestCordlessDrills2025 = () => {
  const drills = [
    {
      rank: 1,
      name: "DeWalt DCD996B 20V MAX XR",
      voltage: "20V",
      maxTorque: 820,
      weight: 3.64,
      batteryPlatform: "20V MAX",
      warranty: "3 years",
      bestFor: "Heavy-duty projects, professional use",
      price: "$179",
      affiliate: "https://amzn.to/dewalt-dcd996b",
      badge: "Best Overall",
      features: ["Brushless motor", "3-speed transmission", "LED work light", "Belt hook"],
      pros: ["Exceptional power and torque", "Durable construction", "Excellent battery life"],
      cons: ["Heavier than competitors", "Higher price point"]
    },
    {
      rank: 2,
      name: "Ryobi ONE+ HP P1815",
      voltage: "18V",
      maxTorque: 600,
      weight: 2.9,
      batteryPlatform: "ONE+",
      warranty: "3 years",
      bestFor: "Weekend DIY projects, homeowners",
      price: "$99",
      affiliate: "https://homedepot.com/ryobi-one-plus",
      badge: "Best Budget",
      features: ["Brushless motor", "2-speed gearbox", "LED light", "Magnetic bit holder"],
      pros: ["Outstanding value", "Lightweight design", "Huge battery ecosystem"],
      cons: ["Less torque than premium models", "Basic LED light"]
    },
    {
      rank: 3,
      name: "Milwaukee M18 2804-20",
      voltage: "18V",
      maxTorque: 725,
      weight: 3.4,
      batteryPlatform: "M18 RED",
      warranty: "5 years",
      bestFor: "Professional contractors, heavy use",
      price: "$149",
      affiliate: "https://amzn.to/milwaukee-m18",
      badge: "Best Heavy-Duty",
      features: ["REDLITHIUM battery", "All-metal chuck", "REDLINK intelligence", "Fuel technology"],
      pros: ["Professional-grade durability", "Best-in-class runtime", "Superior heat management"],
      cons: ["Premium pricing", "Heavier battery packs"]
    },
    {
      rank: 4,
      name: "Bosch PS31-2A",
      voltage: "12V",
      maxTorque: 265,
      weight: 1.7,
      batteryPlatform: "12V MAX",
      warranty: "3 years",
      bestFor: "Tight spaces, light duty work",
      price: "$89",
      affiliate: "https://amzn.to/bosch-ps31",
      badge: "Best Compact",
      features: ["Ultra-compact design", "20+1 clutch settings", "LED light", "Quick-change chuck"],
      pros: ["Extremely lightweight", "Perfect for tight spaces", "Great precision control"],
      cons: ["Limited power", "Smaller battery capacity"]
    },
    {
      rank: 5,
      name: "Makita XFD131",
      voltage: "18V",
      maxTorque: 440,
      weight: 3.3,
      batteryPlatform: "LXT",
      warranty: "3 years",
      bestFor: "Precision work, cabinet making",
      price: "$169",
      affiliate: "https://amzn.to/makita-xfd131",
      badge: "Best for Woodworking",
      features: ["Variable 2-speed", "All-metal transmission", "Dual LED lights", "Star Protection"],
      pros: ["Exceptional build quality", "Smooth operation", "Excellent balance"],
      cons: ["Higher price for power level", "Limited torque settings"]
    },
    {
      rank: 6,
      name: "Porter-Cable PCC620LB",
      voltage: "20V",
      maxTorque: 280,
      weight: 3.2,
      batteryPlatform: "20V MAX",
      warranty: "3 years",
      bestFor: "Metal work, drilling",
      price: "$79",
      affiliate: "https://amzn.to/porter-cable-pcc620",
      badge: "Best for Metal",
      features: ["Single-speed transmission", "Keyless chuck", "LED work light", "Belt clip"],
      pros: ["Great for metal drilling", "Affordable price", "Reliable performance"],
      cons: ["Limited versatility", "Basic feature set"]
    },
    {
      rank: 7,
      name: "Craftsman CMCD700C1",
      voltage: "20V",
      maxTorque: 350,
      weight: 2.8,
      batteryPlatform: "V20",
      warranty: "3 years",
      bestFor: "Basic home projects",
      price: "$69",
      affiliate: "https://lowes.com/craftsman-cmcd700",
      badge: "Budget Pick",
      features: ["Single-speed", "24-position clutch", "LED light", "Ergonomic grip"],
      pros: ["Very affordable", "Lightweight", "Good for beginners"],
      cons: ["Limited power", "Basic build quality"]
    }
  ];

  const decisionSummary = [
    {
      category: "Best Overall",
      product: "DeWalt DCD996B 20V MAX XR",
      price: "$179",
      reason: "Perfect balance of power, durability, and features for serious DIYers and pros"
    },
    {
      category: "Best Budget", 
      product: "Ryobi ONE+ HP P1815",
      price: "$99",
      reason: "Outstanding value with brushless motor and access to 200+ tool ecosystem"
    },
    {
      category: "Best Heavy-Duty",
      product: "Milwaukee M18 2804-20", 
      price: "$149",
      reason: "Professional-grade power and runtime for demanding applications"
    }
  ];

  const buyingGuide = [
    {
      factor: "Voltage & Power",
      description: "12V: Light duty, tight spaces. 18V-20V: Most versatile for homeowners. Higher voltage = more power but heavier weight.",
      recommendation: "18V-20V for most DIY dads - best balance of power and portability"
    },
    {
      factor: "Brushless vs Brushed",
      description: "Brushless motors run cooler, last longer, and provide 25-50% more runtime. Worth the extra $20-40 for most users.",
      recommendation: "Choose brushless for any drill you'll use regularly"
    },
    {
      factor: "Torque Requirements",
      description: "300+ in-lbs for basic tasks. 500+ for deck screws. 700+ for heavy-duty applications like mixing concrete.",
      recommendation: "500-600 in-lbs covers 90% of homeowner needs"
    },
    {
      factor: "Battery Platform",
      description: "Stick with major brands (DeWalt, Milwaukee, Ryobi) that offer 50+ tools on the same battery system.",
      recommendation: "Ryobi ONE+ offers best value ecosystem for homeowners"
    }
  ];

  const faqs = [
    {
      question: "What's the difference between a drill and an impact driver?",
      answer: "Drills are better for drilling holes and precision work. Impact drivers excel at driving screws and fasteners with less cam-out and wrist fatigue."
    },
    {
      question: "How much torque do I need for deck screws?",
      answer: "500-600 in-lbs handles most deck screws easily. For 3+ inch screws or hardwood, consider 700+ in-lbs or an impact driver."
    },
    {
      question: "Are brushless motors worth the extra cost?",
      answer: "Yes for regular use. Brushless provides 25-50% longer runtime, runs cooler, and lasts years longer. Skip for occasional-use tools."
    },
    {
      question: "Should I buy drill-only or drill/driver combo?",
      answer: "Combo kits offer better value if you need both tools. For most DIYers, start with a drill and add an impact driver later if needed."
    },
    {
      question: "What battery amp-hour (Ah) rating do I need?",
      answer: "2.0Ah: Basic tasks, lighter weight. 4.0-5.0Ah: All-day use, heavier projects. Higher Ah = longer runtime but more weight."
    },
    {
      question: "Can I use different brand batteries in my drill?",
      answer: "No, batteries are brand-specific. Stick to one platform (DeWalt 20V, Milwaukee M18, etc.) to share batteries across tools."
    },
    {
      question: "How do I maintain my cordless drill?",
      answer: "Keep chuck clean and lubricated, store batteries at 40-80% charge, and avoid over-tightening the chuck. Replace brushes in brushed models annually."
    },
    {
      question: "What's the best drill for a beginner DIYer?",
      answer: "Ryobi ONE+ HP P1815 offers the best combination of affordability, performance, and future expandability for new DIYers."
    }
  ];

  // Schema markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Top 7 Cordless Drills for DIY Dads in 2025 (Full Buyer's Guide)",
    "description": "Comprehensive guide to the best cordless drills for DIY projects in 2025. Compare DeWalt, Milwaukee, Ryobi, and more with detailed buying advice.",
    "author": {
      "@type": "Organization",
      "name": "DigitalDadVentures"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "DigitalDadVentures"
    },
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15",
    "mainEntityOfPage": "https://digitaldadventures.com/tools/best-cordless-drills-2025"
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
    "itemListElement": drills.map((drill, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": drill.name,
        "description": `${drill.voltage} cordless drill with ${drill.maxTorque} in-lbs torque`,
        "brand": drill.name.split(' ')[0],
        "offers": {
          "@type": "Offer",
          "price": drill.price.replace('$', ''),
          "priceCurrency": "USD"
        }
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Best Cordless Drill 2025: Dad's Top 7 Picks</title>
        <meta name="description" content="The no-fluff 2025 drill guide for homeowners—top picks, buying tips, and a simple decision framework to get the right drill first time." />
        <meta name="keywords" content="best cordless drill 2025, cordless drill for homeowners, brushless vs brushed drill, impact driver vs drill, drill torque for deck screws, compact cordless drill" />
        <link rel="canonical" href="https://digitaldadventures.com/tools/best-cordless-drills-2025" />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" />
        <meta property="og:title" content="Best Cordless Drill 2025: Dad's Top 7 Picks" />
        <meta property="og:description" content="The no-fluff 2025 drill guide for homeowners—top picks, buying tips, and a simple decision framework to get the right drill first time." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://digitaldadventures.com/tools/best-cordless-drills-2025" />
      </Helmet>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Breadcrumb */}
        <nav className="container mx-auto px-4 py-4">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <ChevronRight className="h-4 w-4" />
            <li><Link to="/tools" className="hover:text-primary">Tools</Link></li>
            <ChevronRight className="h-4 w-4" />
            <li className="text-foreground">Best Cordless Drills 2025</li>
          </ol>
        </nav>

        {/* Affiliate Disclosure */}
        <div className="container mx-auto px-4">
          <AffiliateDisclosure className="mb-8" />
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/90 to-orange-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-6">
                <Wrench className="h-16 w-16 mx-auto mb-4 text-orange-200" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Top 7 Cordless Drills for DIY Dads in 2025
              </h1>
              <p className="text-xl mb-8">
                The no-fluff guide to finding the perfect cordless drill for your projects. 
                We've tested dozens of drills to bring you the definitive 2025 buyer's guide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Jump to Recommendations <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/20 text-white">
                  Updated January 2025
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Decision Summary */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Decision Summary</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {decisionSummary.map((item, index) => (
                <Card key={index} className="text-center relative">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    {item.category}
                  </Badge>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-lg">{item.product}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{item.price}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.reason}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Complete Drill Comparison</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Model</TableHead>
                    <TableHead>Voltage</TableHead>
                    <TableHead>Max Torque (in-lb)</TableHead>
                    <TableHead>Weight (lbs)</TableHead>
                    <TableHead>Battery Platform</TableHead>
                    <TableHead>Warranty</TableHead>
                    <TableHead>Best For</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {drills.map((drill) => (
                    <TableRow key={drill.rank}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">#{drill.rank}</Badge>
                          {drill.name}
                          {drill.badge && <Badge variant="secondary" className="ml-2">{drill.badge}</Badge>}
                        </div>
                      </TableCell>
                      <TableCell>{drill.voltage}</TableCell>
                      <TableCell>{drill.maxTorque}</TableCell>
                      <TableCell>{drill.weight}</TableCell>
                      <TableCell>{drill.batteryPlatform}</TableCell>
                      <TableCell>{drill.warranty}</TableCell>
                      <TableCell>{drill.bestFor}</TableCell>
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
            <h2 className="text-3xl font-bold text-center mb-12">Detailed Drill Reviews</h2>
            <div className="space-y-8">
              {drills.slice(0, 3).map((drill) => (
                <Card key={drill.rank} className="overflow-hidden">
                  <CardHeader className="bg-muted/30">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3">
                        <Badge>#{drill.rank}</Badge>
                        {drill.name}
                        <Badge variant="secondary">{drill.badge}</Badge>
                      </CardTitle>
                      <div className="text-2xl font-bold text-primary">{drill.price}</div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-600">Pros:</h4>
                        <ul className="space-y-1 text-sm">
                          {drill.pros.map((pro, index) => (
                            <li key={index} className="flex items-start">
                              <Badge variant="outline" className="mr-2 mt-1 text-green-600">✓</Badge>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-red-600">Cons:</h4>
                        <ul className="space-y-1 text-sm">
                          {drill.cons.map((con, index) => (
                            <li key={index} className="flex items-start">
                              <Badge variant="outline" className="mr-2 mt-1 text-red-600">✗</Badge>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-1 text-sm">
                          {drill.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <Star className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t">
                      <Button asChild>
                        <a href={drill.affiliate} target="_blank" rel="noopener noreferrer">
                          Check Current Price <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Buying Guide */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Cordless Drill Buying Guide</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {buyingGuide.map((guide, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-6 w-6 text-primary mr-2" />
                      {guide.factor}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{guide.description}</p>
                    <div className="bg-primary/10 p-3 rounded-md">
                      <p className="font-medium text-sm">💡 Our Recommendation:</p>
                      <p className="text-sm">{guide.recommendation}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Driver vs Drill */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Impact Driver vs Drill: Which Do You Need?</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                <CardTitle className="flex items-center">
                  <Wrench className="h-6 w-6 text-primary mr-2" />
                  Cordless Drill
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Best For:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Drilling holes in wood, metal, plastic</li>
                        <li>• Precision work and delicate materials</li>
                        <li>• Driving small screws (1-2 inches)</li>
                        <li>• Projects requiring variable speed control</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Adjustable clutch settings</li>
                        <li>• Variable speed trigger</li>
                        <li>• Chuck accepts round and hex bits</li>
                        <li>• Generally lighter than impact drivers</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Battery className="h-6 w-6 text-primary mr-2" />
                    Impact Driver
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Best For:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Driving long screws (3+ inches)</li>
                        <li>• Deck building and framing</li>
                        <li>• Lag bolts and large fasteners</li>
                        <li>• Repetitive screw driving tasks</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Rotational and downward force</li>
                        <li>• Hex-only bit system</li>
                        <li>• Higher torque output</li>
                        <li>• Less wrist fatigue on tough jobs</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-4">Our Recommendation:</h3>
                  <p className="text-sm">
                    Start with a quality cordless drill for versatility. Add an <Link to="/tools/impact-drivers" className="text-primary hover:underline">impact driver</Link> later 
                    if you're doing lots of <Link to="/projects/weekend-garage-shelf" className="text-primary hover:underline">deck building or framing projects</Link>. 
                    Most homeowners get 80% of their projects done with just a drill.
                  </p>
                </CardContent>
              </Card>
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

        {/* Related Links */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Impact Drivers Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete guide to choosing the right impact driver for your projects.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/tools/impact-drivers">
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
                    Build a sturdy garage shelf using your new cordless drill.
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
                  <CardTitle className="text-lg">Battery vs Gas Mowers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Compare battery and gas lawn mowers for your yard needs.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/yard/battery-vs-gas-lawn-mowers">
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

export default BestCordlessDrills2025;