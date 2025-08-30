import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExternalLink, ArrowRight, Star, Shield, Zap, Home, ChevronRight, Trophy, Wrench, CheckCircle2, Clock, Ruler } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import ProductImage from '@/components/ProductImage';

const WeekendGarageShelf = () => {
  const materials = [
    {
      item: "2x4 Lumber (8 ft)",
      quantity: "6 pieces",
      purpose: "Frame construction",
      cost: "$24",
      where: "Home Depot/Lowe's"
    },
    {
      item: "3/4\" Plywood (4x8 sheet)", 
      quantity: "1 sheet",
      purpose: "Shelving surface",
      cost: "$45",
      where: "Home Depot/Lowe's"
    },
    {
      item: "2.5\" Wood Screws",
      quantity: "1 lb box",
      purpose: "Frame assembly",
      cost: "$8",
      where: "Home Depot/Lowe's"
    },
    {
      item: "3\" Wood Screws",
      quantity: "1/2 lb box",
      purpose: "Shelf attachment",
      cost: "$6",
      where: "Home Depot/Lowe's"
    },
    {
      item: "L-Brackets (4\")",
      quantity: "8 pieces",
      purpose: "Additional shelf support",
      cost: "$16",
      where: "Home Depot/Lowe's"
    },
    {
      item: "Wood Stain/Polyurethane",
      quantity: "1 quart",
      purpose: "Protection and appearance",
      cost: "$15",
      where: "Home Depot/Lowe's"
    }
  ];

  const tools = [
    {
      tool: "Cordless Drill/Driver",
      essential: "Required",
      alternative: "None - must have",
      purpose: "All screw driving and pilot holes"
    },
    {
      tool: "Circular Saw or Miter Saw",
      essential: "Required", 
      alternative: "Hand saw (much slower)",
      purpose: "Cutting lumber to length"
    },
    {
      tool: "Level (4 foot)",
      essential: "Required",
      alternative: "Smartphone level app",
      purpose: "Ensuring square assembly"
    },
    {
      tool: "Tape Measure",
      essential: "Required",
      alternative: "None",
      purpose: "All measurements"
    },
    {
      tool: "Safety Glasses",
      essential: "Required",
      alternative: "None - safety first!",
      purpose: "Eye protection"
    },
    {
      tool: "Stud Finder",
      essential: "Recommended",
      alternative: "Knock test method",
      purpose: "Finding wall studs for mounting"
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Plan and Measure",
      time: "15 minutes",
      description: "Measure your garage wall space and plan shelf dimensions. Standard depth is 16-20 inches.",
      details: [
        "Measure wall width and available height",
        "Decide on shelf spacing (18-24 inches typical)",
        "Mark stud locations with stud finder",
        "Sketch your design with measurements"
      ],
      tips: "Most garages can fit a 6-8 foot wide shelf system. Plan for items you'll store."
    },
    {
      step: 2,
      title: "Cut Lumber to Size",
      time: "30 minutes", 
      description: "Cut all frame pieces according to your measurements. Pre-cut saves time during assembly.",
      details: [
        "Cut horizontal frame pieces (shelf width)",
        "Cut vertical support pieces (shelf height)",
        "Cut diagonal braces for stability",
        "Sand cut ends smooth to prevent splinters"
      ],
      tips: "Most lumber yards will cut pieces for you if you don't have a saw. Bring your cut list!"
    },
    {
      step: 3,
      title: "Pre-Drill Frame Pieces", 
      time: "20 minutes",
      description: "Drill pilot holes to prevent wood splitting when assembling the frame.",
      details: [
        "Use 1/8\" drill bit for 2.5\" screws",
        "Mark screw locations before drilling",
        "Countersink holes slightly for flush screws",
        "Test fit pieces before final assembly"
      ],
      tips: "Pre-drilling takes extra time but prevents split wood and ensures strong joints."
    },
    {
      step: 4,
      title: "Assemble the Frame",
      time: "45 minutes",
      description: "Build the shelf frame on the ground before mounting to the wall.",
      details: [
        "Start with the main rectangle frame",
        "Add vertical dividers for shelf spacing", 
        "Install diagonal braces for stability",
        "Check square with level and adjust as needed"
      ],
      tips: "Work on a flat surface. Use clamps to hold pieces while screwing together."
    },
    {
      step: 5,
      title: "Mount Frame to Wall",
      time: "30 minutes",
      description: "Securely attach the completed frame to wall studs for maximum strength.",
      details: [
        "Mark stud locations on frame",
        "Use 3\" screws into wall studs",
        "Level the frame before final attachment",
        "Add L-brackets for extra support if needed"
      ],
      tips: "Hit at least 3 wall studs for a 6-foot shelf. Never rely on drywall anchors alone."
    },
    {
      step: 6,
      title: "Cut and Install Shelving",
      time: "30 minutes",
      description: "Measure, cut, and install the plywood shelving surfaces.",
      details: [
        "Measure each shelf opening individually",
        "Cut plywood to fit with 1/8\" gap on each side",
        "Sand shelf surfaces smooth",
        "Attach with 1.5\" screws from underneath"
      ],
      tips: "Measure twice, cut once! Each opening may be slightly different."
    },
    {
      step: 7,
      title: "Finish and Load Test",
      time: "20 minutes + dry time",
      description: "Apply protective finish and test shelf capacity before loading.",
      details: [
        "Apply wood stain or polyurethane if desired",
        "Allow proper drying time per manufacturer",
        "Test each shelf with moderate weight",
        "Organize and load your storage items"
      ],
      tips: "A good finish protects against garage humidity and makes cleaning easier."
    }
  ];

  const faqs = [
    {
      question: "What drill is best for this project?",
      answer: "A quality 18V-20V cordless drill with at least 400 in-lbs of torque works perfectly. The DeWalt DCD771C2 or Milwaukee 2804-20 are excellent choices that handle all the screws easily."
    },
    {
      question: "How much weight can these shelves hold?",
      answer: "When properly built and mounted to studs, each shelf can safely hold 100-150 pounds. The key is hitting wall studs and using quality 2x4 lumber for the frame."
    },
    {
      question: "Can I build this without wall mounting?",
      answer: "Yes! You can build a freestanding version by adding a back panel and wider base feet. However, wall-mounted shelves are more stable and save floor space."
    },
    {
      question: "What if my garage walls aren't straight?",
      answer: "Use shims behind the frame to compensate for uneven walls. Most garage walls have some irregularity. A level and shims will solve most issues."
    },
    {
      question: "Should I use treated lumber for garage shelves?",
      answer: "Not necessary unless your garage gets very wet. Standard construction lumber with a protective finish works fine for most garage environments."
    },
    {
      question: "How do I find wall studs in my garage?",
      answer: "Use a stud finder or tap the wall - studs sound solid while hollow areas sound different. Garage studs are typically 16\" or 24\" on center."
    },
    {
      question: "Can I modify this design for different sizes?",
      answer: "Absolutely! The basic frame concept scales up or down. Just maintain proper support spacing - no more than 32\" between vertical supports for heavy loads."
    },
    {
      question: "What's the total project cost?",
      answer: "Materials typically cost $115-140 depending on lumber prices and finish choices. This beats buying pre-made garage storage systems that cost $300+."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "DIY Weekend Garage Shelf Project: Step-by-Step Build Guide",
    "description": "Complete tutorial for building sturdy garage storage shelves using a cordless drill. Materials list, cut diagrams, and assembly steps included.",
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
        <title>DIY Weekend Garage Shelf Project: Step-by-Step Build Guide | Family Product Reviews</title>
        <meta name="description" content="Complete tutorial for building sturdy garage storage shelves. Materials list, tool requirements, and step-by-step assembly guide for a weekend DIY project." />
        <meta name="keywords" content="DIY garage shelf project, weekend garage storage, build garage shelves, garage organization DIY, cordless drill projects" />
        <link rel="canonical" href="https://digitaldadventures.com/projects/weekend-garage-shelf" />
        <meta property="og:title" content="DIY Weekend Garage Shelf Project: Step-by-Step Build Guide" />
        <meta property="og:description" content="Complete tutorial for building sturdy garage storage shelves using basic tools and a cordless drill." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://digitaldadventures.com/projects/weekend-garage-shelf" />
        <meta property="og:image" content="https://digitaldadventures.com/images/garage-shelf-project-tutorial.jpg" />
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
              <span className="text-foreground">Weekend Garage Shelf Project</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4">
                  <Clock className="h-3 w-3 mr-1" />
                  Weekend Project
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  DIY Weekend Garage Shelf Project
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Build sturdy, professional-looking garage storage shelves in just one weekend. 
                  Complete step-by-step guide with materials list and pro tips.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span>Total Time: 3-4 hours</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Ruler className="h-4 w-4 mr-2 text-primary" />
                    <span>Skill Level: Beginner</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-primary font-bold">$115-140</span>
                    <span className="ml-1">total cost</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="#materials">Get Started</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#tools">Tool Requirements</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <ProductImage
                  src="/images/garage-shelf-project-tutorial.jpg"
                  alt="DIY garage shelf project completed storage system"
                  className="rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <AffiliateDisclosure />

        {/* Project Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Project Overview</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-2" />
                    What You'll Build
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 6-8 foot wide shelf system</li>
                    <li>• 4-5 adjustable shelves</li>
                    <li>• 100+ lbs capacity per shelf</li>
                    <li>• Wall-mounted for stability</li>
                    <li>• Customizable depth and height</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-6 w-6 text-primary mr-2" />
                    Time Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Planning & measuring:</span>
                      <span>15 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cutting lumber:</span>
                      <span>30 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Frame assembly:</span>
                      <span>65 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wall mounting:</span>
                      <span>30 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shelves & finishing:</span>
                      <span>50 min</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t">
                      <span>Total:</span>
                      <span>3.2 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="h-6 w-6 text-yellow-500 mr-2" />
                    Why This Design
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Simple, proven construction</li>
                    <li>• Uses common lumber sizes</li>
                    <li>• Perfect cordless drill project</li>
                    <li>• Easily customizable</li>
                    <li>• Professional appearance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Materials List */}
        <section id="materials" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Materials List</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Purpose</TableHead>
                    <TableHead>Cost</TableHead>
                    <TableHead>Where to Buy</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {materials.map((material, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{material.item}</TableCell>
                      <TableCell>{material.quantity}</TableCell>
                      <TableCell>{material.purpose}</TableCell>
                      <TableCell className="font-bold text-primary">{material.cost}</TableCell>
                      <TableCell>{material.where}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-primary/5">
                    <TableCell colSpan={3} className="font-bold">Total Materials Cost:</TableCell>
                    <TableCell className="font-bold text-primary text-lg">$114</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                * Prices approximate and may vary by location. Consider lumber yard delivery for multiple projects.
              </p>
            </div>
          </div>
        </section>

        {/* Tool Requirements */}
        <section id="tools" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Tool Requirements</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tool</TableHead>
                    <TableHead>Essential?</TableHead>
                    <TableHead>Alternative</TableHead>
                    <TableHead>Purpose</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tools.map((tool, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{tool.tool}</TableCell>
                      <TableCell>
                        <Badge variant={tool.essential === 'Required' ? 'destructive' : 'default'}>
                          {tool.essential}
                        </Badge>
                      </TableCell>
                      <TableCell>{tool.alternative}</TableCell>
                      <TableCell>{tool.purpose}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-8 text-center">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-4">Recommended Drill for This Project:</h3>
                  <p className="text-sm mb-4">
                    A quality 18V-20V cordless drill with 400+ in-lbs torque handles all the screws easily. 
                    The <Link to="/tools/best-cordless-drills-2025" className="text-primary hover:underline">DeWalt DCD771C2 or Milwaukee 2804-20</Link> are 
                    perfect for this project and future DIY work.
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/tools/best-cordless-drills-2025">
                      See Best Drills <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Step-by-Step Instructions */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Step-by-Step Instructions</h2>
            <div className="space-y-8">
              {steps.map((step) => (
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
                        <Clock className="h-3 w-3 mr-1" />
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
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                          <h4 className="font-semibold text-amber-800 mb-2">Pro Tip:</h4>
                          <p className="text-sm text-amber-700">{step.tips}</p>
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
                  <CardTitle className="text-lg">Best Cordless Drills 2025</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Find the perfect drill for this project and all your future DIY work.
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
                  <CardTitle className="text-lg">Impact Drivers Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn when to use an impact driver vs drill for fastening projects.
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
                  <CardTitle className="text-lg">DeWalt vs Milwaukee Platform Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Compare tool ecosystems to build the perfect workshop setup.
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

export default WeekendGarageShelf;