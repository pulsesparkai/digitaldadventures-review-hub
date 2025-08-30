import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExternalLink, ArrowRight, Star, Shield, Zap, Home, ChevronRight, Trophy, Camera, Lock, Smartphone, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import ProductImage from '@/components/ProductImage';

const DIYHomeSecurity = () => {
  const securityKits = [
    {
      name: "Budget Starter Kit",
      totalCost: "$199-249",
      difficulty: "Beginner",
      installTime: "2-3 hours",
      monitoring: "Self-monitored",
      components: [
        { item: "Ring Video Doorbell (Wired)", price: "$99", essential: true },
        { item: "Wyze Cam v3 (2-pack)", price: "$60", essential: true },
        { item: "Ring Alarm Contact Sensors (4-pack)", price: "$40", essential: true },
        { item: "Smart Lock (August WiFi)", price: "$149", essential: false }
      ],
      pros: ["Lowest cost entry", "Easy smartphone setup", "No monthly fees required", "Expandable system"],
      cons: ["Limited professional monitoring", "Basic feature set", "Relies on home WiFi"],
      bestFor: "Renters, first-time buyers, basic peace of mind"
    },
    {
      name: "Comprehensive Family Kit", 
      totalCost: "$399-499",
      difficulty: "Intermediate",
      installTime: "4-6 hours", 
      monitoring: "Professional optional",
      components: [
        { item: "Ring Alarm 8-piece Kit", price: "$199", essential: true },
        { item: "Ring Stick Up Cam Battery (2)", price: "$180", essential: true },
        { item: "Yale Assure Lock SL", price: "$179", essential: true },
        { item: "Ring Chime Pro", price: "$49", essential: false }
      ],
      pros: ["Professional monitoring available", "Comprehensive coverage", "Easy expansion", "Family-friendly app"],
      cons: ["Higher upfront cost", "Monthly fees for full features", "Ring ecosystem lock-in"],
      bestFor: "Families with kids, larger homes, convenience focused"
    },
    {
      name: "Advanced DIY System",
      totalCost: "$450-550",
      difficulty: "Advanced",
      installTime: "6-8 hours",
      monitoring: "Hybrid options",
      components: [
        { item: "Abode Iota All-in-One Hub", price: "$279", essential: true },
        { item: "Reolink 4K PoE Cameras (2)", price: "$160", essential: true },
        { item: "August WiFi Smart Lock", price: "$149", essential: true },
        { item: "Z-Wave Door/Window Sensors (6)", price: "$90", essential: false }
      ],
      pros: ["No monthly fees option", "Professional grade equipment", "Local storage", "Multiple connectivity options"],
      cons: ["More complex setup", "Requires technical knowledge", "Higher learning curve"],
      bestFor: "Tech-savvy homeowners, privacy-conscious families, long-term investment"
    }
  ];

  const installationSteps = [
    {
      step: 1,
      title: "Plan Your Security Layout", 
      time: "30 minutes",
      description: "Map your home's entry points and vulnerable areas",
      details: [
        "Walk around your home and identify all entry points",
        "Note WiFi signal strength in each location",
        "Plan camera angles to avoid privacy issues with neighbors",
        "Check local regulations for camera placement"
      ],
      tools: ["Smartphone", "Measuring tape", "Notepad"]
    },
    {
      step: 2,
      title: "Install Smart Doorbell",
      time: "45 minutes",
      description: "Replace existing doorbell or install new doorbell camera",
      details: [
        "Turn off power to existing doorbell at breaker",
        "Remove old doorbell and connect new wires",
        "Mount doorbell camera at 48\" height",
        "Download app and complete setup process"
      ],
      tools: ["Screwdriver", "Wire nuts", "Level", "Drill"]
    },
    {
      step: 3,
      title: "Position Security Cameras",
      time: "60 minutes",
      description: "Install indoor/outdoor cameras at strategic locations", 
      details: [
        "Mount cameras 8-10 feet high when possible",
        "Ensure cameras don't point toward neighbors",
        "Test WiFi connectivity before final mounting",
        "Configure motion detection zones in app"
      ],
      tools: ["Drill", "Anchors", "Level", "Ladder"]
    },
    {
      step: 4,
      title: "Install Smart Lock",
      time: "45 minutes",
      description: "Replace traditional deadbolt with smart lock system",
      details: [
        "Remove existing deadbolt completely",
        "Check door thickness compatibility (1.5\" typical)",
        "Install new smart lock following manufacturer guides",
        "Program family member access codes"
      ],
      tools: ["Screwdriver", "Measuring tape", "Smartphone"]
    },
    {
      step: 5,
      title: "Set Up Door/Window Sensors",
      time: "30 minutes",
      description: "Install contact sensors on entry points",
      details: [
        "Clean mounting surfaces with alcohol",
        "Place sensors within 1/4\" when door/window closed",
        "Test each sensor activation in app",
        "Label sensors clearly for easy identification"
      ],
      tools: ["Cleaning supplies", "Smartphone"]
    },
    {
      step: 6,
      title: "Configure System & Test",
      time: "30 minutes",
      description: "Set up monitoring, alerts, and family access",
      details: [
        "Create user profiles for all family members",
        "Set up emergency contacts and notification preferences",
        "Test all sensors and cameras functionality", 
        "Practice arming/disarming system"
      ],
      tools: ["Smartphone", "Emergency contact list"]
    }
  ];

  const budgetBreakdown = [
    {
      category: "Essential Components",
      items: [
        { item: "Video Doorbell", priceRange: "$99-199", priority: "Must Have" },
        { item: "Indoor Camera (1-2)", priceRange: "$30-80", priority: "Must Have" },
        { item: "Door/Window Sensors (4-6)", priceRange: "$40-90", priority: "Must Have" },
        { item: "Smart Lock", priceRange: "$149-199", priority: "Highly Recommended" }
      ]
    },
    {
      category: "Optional Upgrades",
      items: [
        { item: "Outdoor Cameras", priceRange: "$60-150", priority: "Nice to Have" },
        { item: "Motion Detectors", priceRange: "$25-50", priority: "Nice to Have" },
        { item: "Smart Hub/Base Station", priceRange: "$99-199", priority: "System Dependent" },
        { item: "Professional Installation", priceRange: "$150-400", priority: "Optional" }
      ]
    }
  ];

  const faqs = [
    {
      question: "Can I really install a security system for under $300?",
      answer: "Yes! A basic system with doorbell camera, 2 indoor cameras, and 4 door sensors costs $199-249. This covers essential entry monitoring and provides smartphone alerts for most security needs."
    },
    {
      question: "Do I need professional monitoring or can I self-monitor?",
      answer: "Self-monitoring works well for many families and saves $15-30/month. You get smartphone alerts and can call police yourself. Professional monitoring provides 24/7 response but adds ongoing costs."
    },
    {
      question: "What's the difference between wired and wireless cameras?",
      answer: "Wireless cameras are easier to install but require battery changes or nearby outlets. Wired cameras need cable runs but provide more reliable power and often better image quality."
    },
    {
      question: "How do I ensure my DIY system won't be hacked?",
      answer: "Use strong passwords, enable two-factor authentication, keep firmware updated, set up a guest network for smart devices, and choose reputable brands with good security track records."
    },
    {
      question: "Can renters install these security systems?",
      answer: "Most systems are renter-friendly. Battery-powered cameras, removable door sensors, and smart locks that don't require permanent changes work well. Always check lease agreements first."
    },
    {
      question: "What happens if my internet goes down?",
      answer: "Systems with local storage (like some cameras) continue recording. Cellular backup options are available for professional monitoring systems. Battery-powered devices continue local functions."
    },
    {
      question: "How do I avoid false alarms with family and pets?",
      answer: "Use pet-immune motion sensors, set up family member profiles with access codes, create motion detection zones that avoid pet areas, and adjust sensor sensitivity settings properly."
    },
    {
      question: "Should I put security system stickers and signs in my yard?",
      answer: "Yes! Visible security signage is one of the best deterrents. Even basic systems benefit from professional-looking security company signs and window stickers."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article", 
    "headline": "DIY Home Security System Under $300: Complete Setup Guide",
    "description": "Budget-friendly home security camera setup, motion sensors, and smart locks installation. Complete equipment list and step-by-step setup guide.",
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
        <title>DIY Home Security System Under $300: Complete Setup Guide | Family Product Reviews</title>
        <meta name="description" content="Install a complete home security system for under $300. Budget cameras, smart locks, sensors & setup guide. Perfect for families & renters." />
        <meta name="keywords" content="DIY home security under 300, budget security cameras, smart lock installation, home security system setup, family security on budget" />
        <link rel="canonical" href="https://digitaldadventures.com/smarthome/diy-home-security-under-300" />
        <meta property="og:title" content="DIY Home Security System Under $300: Complete Setup Guide" />
        <meta property="og:description" content="Install a complete home security system for under $300. Complete equipment list and setup guide included." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://digitaldadventures.com/smarthome/diy-home-security-under-300" />
        <meta property="og:image" content="https://digitladventures.com/images/diy-home-security-under-300.jpg" />
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
              <Link to="/category/smarthome" className="hover:text-primary">Smart Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">DIY Home Security Under $300</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4">
                  <Shield className="h-3 w-3 mr-1" />
                  Budget Security Guide
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  DIY Home Security System Under $300
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Protect your family without breaking the bank. Complete guide to installing 
                  security cameras, smart locks, and motion sensors for maximum protection on a budget.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="#systems">See Systems</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#installation">Setup Guide</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <ProductImage
                  src="/images/diy-home-security-under-300.jpg"
                  alt="DIY home security system installation with cameras, smart locks and sensors under $300"
                  className="rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <AffiliateDisclosure />

        {/* System Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why DIY Security Makes Sense</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">90% Protection</h3>
                  <p className="text-sm text-muted-foreground">DIY systems provide 90% of professional protection at 30% of the cost</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Smartphone Control</h3>
                  <p className="text-sm text-muted-foreground">Monitor your home from anywhere with real-time alerts and live video</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">No Contracts</h3>
                  <p className="text-sm text-muted-foreground">Avoid $30+/month monitoring fees while maintaining full control</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Expandable</h3>
                  <p className="text-sm text-muted-foreground">Start basic and add cameras, sensors, and features as needed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Security System Options */}
        <section id="systems" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Complete Security System Options</h2>
            <div className="grid gap-8">
              {securityKits.map((kit, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-primary/5">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-2xl font-bold">{kit.name}</h3>
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline">{kit.totalCost}</Badge>
                        <Badge variant={kit.difficulty === 'Beginner' ? 'default' : kit.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}>
                          {kit.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Install Time:</span>
                              <span className="font-semibold">{kit.installTime}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Monitoring:</span>
                              <span className="font-semibold">{kit.monitoring}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Best For:</span>
                              <span className="font-semibold text-sm">{kit.bestFor}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">System Components:</h4>
                          <div className="space-y-2">
                            {kit.components.map((component, idx) => (
                              <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                                <div className="flex items-center">
                                  <CheckCircle2 className={`h-4 w-4 mr-2 ${component.essential ? 'text-green-500' : 'text-blue-500'}`} />
                                  <span className="text-sm">{component.item}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm font-semibold">{component.price}</span>
                                  <Badge variant={component.essential ? 'default' : 'outline'} className="text-xs">
                                    {component.essential ? 'Essential' : 'Optional'}
                                  </Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-green-600 mb-2">Pros:</h4>
                            <ul className="space-y-1 text-sm">
                              {kit.pros.map((pro, idx) => (
                                <li key={idx}>• {pro}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-amber-600 mb-2">Cons:</h4>
                            <ul className="space-y-1 text-sm">
                              {kit.cons.map((con, idx) => (
                                <li key={idx}>• {con}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="mb-6">
                          <div className="text-3xl font-bold text-primary mb-2">{kit.totalCost}</div>
                          <div className="text-sm text-muted-foreground">Total System Cost</div>
                        </div>
                        <Button className="w-full mb-4">
                          View Components
                        </Button>
                        <div className="text-sm text-muted-foreground">
                          {kit.bestFor}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Budget Breakdown */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Security System Budget Breakdown</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {budgetBreakdown.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Item</TableHead>
                            <TableHead>Price Range</TableHead>
                            <TableHead>Priority</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {category.items.map((item, idx) => (
                            <TableRow key={idx}>
                              <TableCell className="font-medium">{item.item}</TableCell>
                              <TableCell>{item.priceRange}</TableCell>
                              <TableCell>
                                <Badge variant={item.priority === 'Must Have' ? 'default' : 
                                             item.priority === 'Highly Recommended' ? 'secondary' : 'outline'}>
                                  {item.priority}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Guide */}
        <section id="installation" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Step-by-Step Installation Guide</h2>
            <div className="space-y-8">
              {installationSteps.map((step) => (
                <Card key={step.step} className="overflow-hidden">
                  <CardHeader className="bg-primary/5">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                          {step.step}
                        </div>
                        {step.title}
                      </CardTitle>
                      <Badge variant="outline">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        {step.time}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <p className="text-muted-foreground mb-6">{step.description}</p>
                        <h4 className="font-semibold mb-3">Detailed Steps:</h4>
                        <ul className="space-y-2 mb-6">
                          {step.details.map((detail, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-800 mb-2">Required Tools:</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            {step.tools.map((tool, idx) => (
                              <li key={idx}>• {tool}</li>
                            ))}
                          </ul>
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
                  <CardTitle className="text-lg">Ring vs Nest vs Arlo Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Compare the top smart doorbell and camera systems for families.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/smarthome/ring-vs-nest-vs-arlo-2025">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Backyard Gadgets for Summer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Smart outdoor tech including security cameras and lighting systems.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/outdoor/backyard-gadgets-summer">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Best Cordless Drills 2025</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Find the right drill for installing security cameras and smart locks.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/tools/best-cordless-drills-2025">
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

export default DIYHomeSecurity;