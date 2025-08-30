import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExternalLink, ArrowRight, Star, Shield, Zap, Home, ChevronRight, Trophy, Heart, Users, Baby } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import ProductImage from '@/components/ProductImage';

const KidSafeBackyardMakeover = () => {
  const projects = [
    {
      id: 1,
      name: "Safe Sandbox Build",
      ageRange: "2-8 years",
      difficulty: "Easy",
      time: "2 hours",
      cost: "$80-120",
      safety: "High",
      description: "Build a covered sandbox with rounded corners and drainage",
      materials: ["Cedar lumber", "Landscape fabric", "Play sand", "Hinged cover"],
      benefits: ["Sensory play", "Creativity", "Motor skills", "Weather protection"],
      safetyFeatures: ["Rounded corners", "Splinter-free wood", "Drainage holes", "Covered storage"]
    },
    {
      id: 2,
      name: "Soft Play Area",
      ageRange: "1-5 years",
      difficulty: "Easy",
      time: "1 hour",
      cost: "$150-250",
      safety: "Very High",
      description: "Create cushioned play zone with rubber mulch and borders",
      materials: ["Rubber playground mulch", "Landscape edging", "Weed barrier"],
      benefits: ["Fall protection", "Clean play surface", "All-weather use", "Easy maintenance"],
      safetyFeatures: ["Impact absorption", "Non-toxic materials", "Drainage", "Defined boundaries"]
    },
    {
      id: 3,
      name: "Garden Learning Center",
      ageRange: "3-12 years",
      difficulty: "Medium",
      time: "3 hours",
      cost: "$100-180",
      safety: "High",
      description: "Raised garden beds at kid height with safe tool storage",
      materials: ["Cedar raised bed kit", "Quality soil", "Kid-safe tools", "Storage bin"],
      benefits: ["Science learning", "Responsibility", "Healthy eating", "Outdoor time"],
      safetyFeatures: ["No sharp edges", "Child-height design", "Safe tool selection", "Non-toxic plants"]
    },
    {
      id: 4,
      name: "Backyard Reading Nook",
      ageRange: "4-12 years", 
      difficulty: "Medium",
      time: "4 hours",
      cost: "$200-350",
      safety: "High",
      description: "Shaded outdoor reading space with weather-resistant seating",
      materials: ["Shade sail", "Outdoor cushions", "Storage bench", "Weatherproof books"],
      benefits: ["Reading encouragement", "Quiet space", "Fresh air", "Independence"],
      safetyFeatures: ["UV protection", "Stable seating", "Smooth surfaces", "Secure anchoring"]
    },
    {
      id: 5,
      name: "Water Play Station",
      ageRange: "2-8 years",
      difficulty: "Easy",
      time: "2 hours",
      cost: "$120-200",
      safety: "Medium",
      description: "Safe water table with drainage and storage for summer fun",
      materials: ["Large plastic tub", "PVC fittings", "Water toys", "Drain valve"],
      benefits: ["Sensory play", "Cooling relief", "Motor skills", "Social interaction"],
      safetyFeatures: ["Drain capability", "Rounded edges", "Non-slip surface", "Supervised use required"]
    },
    {
      id: 6,
      name: "Balance Beam Path",
      ageRange: "3-10 years",
      difficulty: "Medium",
      time: "3 hours",
      cost: "$150-250",
      safety: "High",
      description: "Ground-level balance course with soft landing areas",
      materials: ["Pressure-treated lumber", "Rubber mats", "Wood stain", "Landscape fabric"],
      benefits: ["Balance development", "Confidence building", "Physical activity", "Challenge progression"],
      safetyFeatures: ["Low height", "Soft landing", "Stable construction", "No protruding hardware"]
    },
    {
      id: 7,
      name: "Butterfly Garden Zone",
      ageRange: "3-12 years",
      difficulty: "Easy", 
      time: "2 hours",
      cost: "$80-150",
      safety: "Very High",
      description: "Native plant garden to attract butterflies safely",
      materials: ["Native flowering plants", "Mulch", "Small stepping stones", "Plant markers"],
      benefits: ["Nature education", "Wildlife observation", "Environmental awareness", "Beauty"],
      safetyFeatures: ["Non-toxic plants", "No thorny varieties", "Pesticide-free", "Clear pathways"]
    },
    {
      id: 8,
      name: "Outdoor Art Station",
      ageRange: "3-12 years",
      difficulty: "Easy",
      time: "2 hours", 
      cost: "$100-180",
      safety: "High",
      description: "Weather-resistant easel and supply storage for outdoor creativity",
      materials: ["Outdoor easel", "Waterproof storage", "Washable supplies", "Ground covering"],
      benefits: ["Creativity", "Mess-free (outdoor)", "Fresh air", "Large canvas options"],
      safetyFeatures: ["Stable easel design", "Non-toxic supplies", "Easy cleanup", "Weather protection"]
    },
    {
      id: 9,
      name: "Musical Play Corner",
      ageRange: "2-10 years",
      difficulty: "Medium",
      time: "3 hours",
      cost: "$200-300",
      safety: "High", 
      description: "Outdoor musical instruments mounted at various heights",
      materials: ["Outdoor xylophones", "Chimes", "Mounting hardware", "Weather protection"],
      benefits: ["Musical development", "Sensory stimulation", "Creative expression", "Social play"],
      safetyFeatures: ["Secure mounting", "Smooth edges", "Weather-resistant", "Age-appropriate heights"]
    },
    {
      id: 10,
      name: "Story Circle Amphitheater",
      ageRange: "3-12 years",
      difficulty: "Hard",
      time: "6 hours",
      cost: "$300-500",
      safety: "High",
      description: "Semi-circular seating area for family story time and gatherings",
      materials: ["Landscape blocks", "Gravel base", "Outdoor cushions", "Central fire-safe area"],
      benefits: ["Family bonding", "Performance space", "Gathering area", "Multi-generational use"],
      safetyFeatures: ["Stable seating", "Smooth materials", "Proper drainage", "Safe spacing"]
    }
  ];

  const safetyGuidelines = [
    {
      category: "Fall Prevention",
      guidelines: [
        "Use impact-absorbing surfaces under play equipment",
        "Maintain 6-foot clearance around all play structures", 
        "Install proper drainage to prevent slippery surfaces",
        "Regular inspection of all elevated elements"
      ]
    },
    {
      category: "Material Safety",
      guidelines: [
        "Use only pressure-treated or naturally rot-resistant lumber",
        "Sand all surfaces smooth with no protruding hardware",
        "Choose non-toxic stains and finishes",
        "Verify all plants are non-poisonous to children"
      ]
    },
    {
      category: "Age Appropriateness", 
      guidelines: [
        "Design features for youngest child who will use space",
        "Create clear sight lines for supervision",
        "Separate areas for different age groups when possible",
        "Include seating for supervising adults"
      ]
    },
    {
      category: "Maintenance Planning",
      guidelines: [
        "Plan for easy access to all areas for cleaning",
        "Choose materials that age safely (no splinters/rust)",
        "Create seasonal inspection and maintenance schedule",
        "Have replacement parts readily available"
      ]
    }
  ];

  const faqs = [
    {
      question: "What's the most important safety consideration for backyard play areas?",
      answer: "Proper sight lines for supervision. Parents should be able to see all play areas from common gathering spots like patios or kitchen windows. This allows for safe independent play while maintaining oversight."
    },
    {
      question: "How do I choose safe plants for a kid-friendly backyard?",
      answer: "Avoid toxic plants like oleander, castor bean, or foxglove. Choose native, non-toxic plants and avoid anything with thorns. The poison control center website has comprehensive plant safety lists for your region."
    },
    {
      question: "What's the best ground cover for play areas?",
      answer: "Rubber mulch offers excellent impact absorption and doesn't attract insects like organic mulch. For budget options, use 6+ inches of engineered wood fiber. Avoid sand or gravel in fall zones."
    },
    {
      question: "How much space do kids need for safe outdoor play?",
      answer: "Plan for at least 200 square feet per child for active play areas. Include buffer zones around equipment - 6 feet minimum clearance from swings, slides, and climbing structures."
    },
    {
      question: "Should I install a fence around the play area?",
      answer: "Fencing is recommended, especially for toddlers. Use picket fencing with gaps no wider than 3.5 inches to prevent head entrapment. Gates should be self-closing and self-latching at adult height."
    },
    {
      question: "What tools do I need for most backyard kid projects?",
      answer: "A quality cordless drill, level, measuring tape, and basic hand tools handle 90% of projects. For larger builds, you may need a circular saw and post-hole digger."
    },
    {
      question: "How do I maintain outdoor play equipment safely?",
      answer: "Monthly inspections for loose hardware, splinters, or wear. Annual deep cleaning and re-staining/sealing. Replace any damaged components immediately. Keep maintenance log for warranty and safety records."
    },
    {
      question: "Can I install these projects myself or do I need a contractor?",
      answer: "Most projects are DIY-friendly for handy parents. Consider contractors for electrical work, major grading, or structures over 30 inches high. Always check local building codes and permit requirements."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Kid-Safe Backyard Makeover: 10 Family-Friendly DIY Projects",
    "description": "Safe backyard improvement ideas including sandbox, play areas, and garden projects. Complete safety guidelines and age-appropriate recommendations.",
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
        <title>Kid-Safe Backyard Makeover: 10 Family-Friendly DIY Projects | Family Product Reviews</title>
        <meta name="description" content="Transform your backyard into a safe family paradise. 10 DIY projects including sandbox, play areas, gardens & more. Complete safety guidelines included." />
        <meta name="keywords" content="kid safe backyard ideas, family backyard projects, safe playground DIY, backyard play area, child-friendly landscaping" />
        <link rel="canonical" href="https://digitaldadventures.com/projects/kid-safe-backyard-makeover" />
        <meta property="og:title" content="Kid-Safe Backyard Makeover: 10 Family-Friendly DIY Projects" />
        <meta property="og:description" content="Transform your backyard into a safe family paradise with these 10 DIY projects and safety guidelines." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://digitaldadventures.com/projects/kid-safe-backyard-makeover" />
        <meta property="og:image" content="https://digitaldadventures.com/images/kid-safe-backyard-makeover.jpg" />
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
              <span className="text-foreground">Kid-Safe Backyard Makeover</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4">
                  <Heart className="h-3 w-3 mr-1" />
                  Family Safety First
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Kid-Safe Backyard Makeover: 10 Family-Friendly Projects
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Transform your backyard into a safe, engaging paradise for kids. From sandbox builds to 
                  garden learning centers, create memorable outdoor experiences the whole family will love.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="#projects">See Projects</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#safety">Safety Guide</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <ProductImage
                  src="/images/kid-safe-backyard-makeover.jpg"
                  alt="Kid-safe backyard makeover with play areas and family-friendly features"
                  className="rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <AffiliateDisclosure />

        {/* Quick Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose These Projects?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Safety First</h3>
                  <p className="text-sm text-muted-foreground">Every project designed with child safety as top priority</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Family Bonding</h3>
                  <p className="text-sm text-muted-foreground">Projects that bring families together for outdoor fun</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Baby className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Age Appropriate</h3>
                  <p className="text-sm text-muted-foreground">Clear age guidelines for every project and feature</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">DIY Friendly</h3>
                  <p className="text-sm text-muted-foreground">Weekend projects using common tools and materials</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Project Showcase */}
        <section id="projects" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">10 Kid-Safe Backyard Projects</h2>
            <div className="grid gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-4 gap-6">
                      <div className="lg:col-span-3">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <h3 className="text-2xl font-bold">
                            #{project.id}: {project.name}
                          </h3>
                          <Badge variant="outline">{project.ageRange}</Badge>
                          <Badge variant={project.difficulty === 'Easy' ? 'default' : project.difficulty === 'Medium' ? 'secondary' : 'destructive'}>
                            {project.difficulty}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-semibold text-green-600 mb-2">Benefits:</h4>
                            <ul className="space-y-1 text-sm">
                              {project.benefits.map((benefit, index) => (
                                <li key={index}>• {benefit}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-600 mb-2">Safety Features:</h4>
                            <ul className="space-y-1 text-sm">
                              {project.safetyFeatures.map((feature, index) => (
                                <li key={index}>• {feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Key Materials:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.materials.map((material, index) => (
                              <Badge key={index} variant="outline">{material}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="space-y-3 mb-4">
                          <div>
                            <div className="text-sm text-muted-foreground">Project Time</div>
                            <div className="font-bold text-primary">{project.time}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Estimated Cost</div>
                            <div className="font-bold text-primary">{project.cost}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Safety Rating</div>
                            <Badge variant={project.safety === 'Very High' ? 'default' : 'secondary'}>
                              {project.safety}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Guidelines */}
        <section id="safety" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Essential Safety Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {safetyGuidelines.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-6 w-6 text-primary mr-2" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.guidelines.map((guideline, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{guideline}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Age-Based Recommendations */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Age-Based Project Recommendations</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Ages 1-3 (Toddlers)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="font-semibold text-green-600">Best Projects:</div>
                    <ul className="text-sm space-y-1">
                      <li>• Soft Play Area (#2)</li>
                      <li>• Water Play Station (#5)</li>
                      <li>• Musical Play Corner (#9)</li>
                    </ul>
                    <div className="font-semibold text-blue-600 mt-4">Safety Focus:</div>
                    <ul className="text-sm space-y-1">
                      <li>• Constant supervision required</li>
                      <li>• Low or ground-level features only</li>
                      <li>• Soft impact surfaces everywhere</li>
                      <li>• No small parts or choking hazards</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Ages 4-7 (Preschool)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="font-semibold text-green-600">Best Projects:</div>
                    <ul className="text-sm space-y-1">
                      <li>• Safe Sandbox Build (#1)</li>
                      <li>• Garden Learning Center (#3)</li>
                      <li>• Backyard Reading Nook (#4)</li>
                      <li>• Balance Beam Path (#6)</li>
                    </ul>
                    <div className="font-semibold text-blue-600 mt-4">Safety Focus:</div>
                    <ul className="text-sm space-y-1">
                      <li>• Begin independence with oversight</li>
                      <li>• Challenge with safety nets</li>
                      <li>• Clear boundaries and rules</li>
                      <li>• Learning through exploration</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Ages 8-12 (School Age)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="font-semibold text-green-600">Best Projects:</div>
                    <ul className="text-sm space-y-1">
                      <li>• Butterfly Garden Zone (#7)</li>
                      <li>• Outdoor Art Station (#8)</li>
                      <li>• Story Circle Amphitheater (#10)</li>
                      <li>• All previous projects</li>
                    </ul>
                    <div className="font-semibold text-blue-600 mt-4">Safety Focus:</div>
                    <ul className="text-sm space-y-1">
                      <li>• More independence allowed</li>
                      <li>• Responsibility for younger siblings</li>
                      <li>• Complex project participation</li>
                      <li>• Safety rule understanding</li>
                    </ul>
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
                  <CardTitle className="text-lg">Weekend Garage Shelf Project</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Build storage solutions to keep family tools and supplies organized safely.
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
                  <CardTitle className="text-lg">Backyard Gadgets for Summer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Tech solutions to make your backyard more family-friendly and entertaining.
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
                    Find the perfect drill for all your family backyard improvement projects.
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

export default KidSafeBackyardMakeover;