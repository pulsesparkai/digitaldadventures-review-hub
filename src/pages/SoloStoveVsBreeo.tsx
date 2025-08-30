import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExternalLink, ArrowRight, Flame, Shield, Users, DollarSign, Home, ChevronRight, Trophy, Utensils, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import ProductImage from '@/components/ProductImage';

const SoloStoveVsBreeo = () => {
  const decisionSummary = [
    {
      category: "Best Overall",
      choice: "Breeo X Series 24",
      reason: "Superior cooking versatility and smokeless performance make it ideal for families who want more than just a fire pit"
    },
    {
      category: "Best Value",
      choice: "Solo Stove Bonfire 2.0",
      reason: "Excellent smokeless technology at a more accessible price point with minimal maintenance required"
    },
    {
      category: "Best for Cooking",
      choice: "Breeo X Series 19",
      reason: "Built-in cooking ring and extensive accessory ecosystem designed specifically for outdoor cooking"
    }
  ];

  const firePitComparison = [
    {
      model: "Solo Stove Bonfire 2.0",
      diameter: '19.5"',
      weight: "20 lbs",
      materials: "304 Stainless Steel",
      cookingOptions: "Limited (grill grate sold separately)",
      accessories: "Moderate ecosystem",
      price: "$200"
    },
    {
      model: "Solo Stove Yukon 2.0", 
      diameter: '27"',
      weight: "38 lbs",
      materials: "304 Stainless Steel",
      cookingOptions: "Limited (grill grate sold separately)",
      accessories: "Moderate ecosystem",
      price: "$400"
    },
    {
      model: "Breeo X Series 19",
      diameter: '19"',
      weight: "58 lbs",
      materials: "Corten Steel",
      cookingOptions: "Built-in cooking ring + extensive accessories",
      accessories: "Comprehensive cooking system",
      price: "$350"
    },
    {
      model: "Breeo X Series 24",
      diameter: '24"',
      weight: "68 lbs",
      materials: "Corten Steel", 
      cookingOptions: "Built-in cooking ring + extensive accessories",
      accessories: "Comprehensive cooking system",
      price: "$450"
    },
    {
      model: "Breeo Zentro 24",
      diameter: '24"',
      weight: "75 lbs",
      materials: "Corten Steel",
      cookingOptions: "Advanced cooking system with smoke shelf",
      accessories: "Premium cooking ecosystem",
      price: "$650"
    }
  ];

  const heatOutputComparison = [
    {
      aspect: "Smokeless Technology",
      soloStove: "Double-wall design with bottom air intake creates secondary burn",
      breeo: "Similar double-wall design with additional smoke shelf option",
      winner: "Tie - Both excellent"
    },
    {
      aspect: "Heat Output",
      soloStove: "Focused upward heat, great for warmth but limited cooking",
      breeo: "More radiant heat distribution, better for cooking and ambiance",
      winner: "Breeo for versatility"
    },
    {
      aspect: "Smoke Reduction",
      soloStove: "99% smokeless when using proper dry wood",
      breeo: "95-99% smokeless, slightly more smoke during startup",
      winner: "Solo Stove (slight edge)"
    },
    {
      aspect: "Burn Efficiency",
      soloStove: "Burns wood completely to fine ash",
      breeo: "Similar efficiency with slightly more charcoal remaining",
      winner: "Solo Stove"
    }
  ];

  const cookingCapability = [
    {
      feature: "Built-in Cooking Surface",
      soloStove: "None - must purchase separate grill grate",
      breeo: "Integrated cooking ring on X Series models",
      advantage: "Breeo"
    },
    {
      feature: "Accessory Options",
      soloStove: "Basic: grill grate, pizza oven attachment",
      breeo: "Extensive: grills, griddles, pizza ovens, rotisseries",
      advantage: "Breeo"
    },
    {
      feature: "Cooking Space",
      soloStove: "Limited cooking area when accessories added",
      breeo: "Ample cooking space without compromising fire",
      advantage: "Breeo"
    },
    {
      feature: "Setup Complexity",
      soloStove: "Simple - just add grill grate when needed",
      breeo: "Moderate - cooking ring needs proper positioning",
      advantage: "Solo Stove"
    }
  ];

  const portabilityStorage = [
    {
      aspect: "Weight & Portability",
      soloStove: "Lighter weight, easier to move around yard",
      breeo: "Heavier but more stable, harder to relocate",
      winner: "Solo Stove"
    },
    {
      aspect: "Storage Requirements", 
      soloStove: "Compact storage, fits in smaller spaces",
      breeo: "Larger footprint, needs more storage space",
      winner: "Solo Stove"
    },
    {
      aspect: "Weather Resistance",
      soloStove: "Stainless steel resists rust but may discolor",
      breeo: "Corten steel develops protective patina, very durable",
      winner: "Breeo"
    },
    {
      aspect: "Maintenance Needs",
      soloStove: "Minimal - occasional cleaning of ash",
      breeo: "Low - patina development is normal and protective", 
      winner: "Tie"
    }
  ];

  const safetyFamilyUse = [
    {
      consideration: "Child Safety",
      soloStove: "Lower profile, less cooking equipment = fewer hazards",
      breeo: "More cooking accessories mean more safety awareness needed",
      recommendation: "Solo Stove for families with young children"
    },
    {
      consideration: "Deck/Patio Use",
      soloStove: "Lighter weight, less heat transfer to surface",
      breeo: "Heavier, more heat retention - better heat shields recommended",
      recommendation: "Solo Stove for elevated surfaces"
    },
    {
      consideration: "Spark Control",
      soloStove: "Excellent - minimal sparking due to efficient burn",
      breeo: "Good - spark screens available for all models",
      recommendation: "Both excellent with proper precautions"
    }
  ];

  const faqs = [
    {
      question: "Do Solo Stove and Breeo really eliminate all smoke?",
      answer: "Nearly all smoke when using properly seasoned hardwood. Expect some smoke during startup and when adding fresh wood, but 95-99% reduction during steady burn."
    },
    {
      question: "Which fire pit is better for cooking?",
      answer: "Breeo wins decisively - built-in cooking rings and extensive accessory ecosystem make it a true outdoor kitchen. Solo Stove is fire-focused with limited cooking options."
    },
    {
      question: "How much wood do these fire pits use?",
      answer: "Both are efficient - expect 30-40% less wood usage compared to traditional fire pits due to complete combustion. A cord of wood lasts most families a full season."
    },
    {
      question: "Can I use these fire pits on my deck?",
      answer: "Yes with proper heat shields and clearances. Solo Stove is lighter and generates less radiant heat, making it slightly better for deck use. Always check local fire codes."
    },
    {
      question: "What's the difference between Corten and stainless steel?",
      answer: "Corten steel (Breeo) develops a protective rust patina that prevents further corrosion. Stainless steel (Solo Stove) resists rust but may discolor from heat."
    },
    {
      question: "How long do these fire pits last?",
      answer: "Both brands offer 10+ year lifespans with proper care. Breeo's Corten steel may last longer due to its self-protecting patina, while Solo Stove may need replacement parts sooner."
    },
    {
      question: "Do I need special tools or accessories?",
      answer: "Basic use requires no accessories. For cooking, Breeo offers more options but Solo Stove keeps it simple. Both benefit from quality fire tools and proper wood storage."
    },
    {
      question: "Which is better for large gatherings?",
      answer: "Depends on group size and activities. Solo Stove Yukon (27\") handles 8-10 people well. Breeo X24 or Zentro work great for 6-8 people plus cooking simultaneously."
    }
  ];

  // Schema markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Solo Stove vs Breeo: The Ultimate Smokeless Fire Pit Comparison (2025)",
    "description": "Complete comparison of Solo Stove vs Breeo smokeless fire pits covering heat output, cooking capability, safety, and value for families.",
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
    "mainEntityOfPage": "https://digitaldadventures.com/outdoor/solo-stove-vs-breeo"
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

  return (
    <>
      <Helmet>
        <title>Solo Stove vs Breeo (2025): Which Smokeless Pit Is Best?</title>
        <meta name="description" content="Real differences in heat, smoke, cooking, and safety—our 2025 head-to-head picks the right smokeless fire pit for families." />
        <meta name="keywords" content="Solo Stove vs Breeo, smokeless fire pit comparison, Breeo cooking accessories, fire pit deck safety, family fire pit" />
        <link rel="canonical" href="https://digitaldadventures.com/outdoor/solo-stove-vs-breeo" />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" />
        <meta property="og:title" content="Solo Stove vs Breeo (2025): Which Smokeless Pit Is Best?" />
        <meta property="og:description" content="Real differences in heat, smoke, cooking, and safety—our 2025 head-to-head picks the right smokeless fire pit for families." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://digitaldadventures.com/outdoor/solo-stove-vs-breeo" />
      </Helmet>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Breadcrumb */}
        <nav className="container mx-auto px-4 py-4">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <ChevronRight className="h-4 w-4" />
            <li><Link to="/outdoor" className="hover:text-primary">Outdoor</Link></li>
            <ChevronRight className="h-4 w-4" />
            <li className="text-foreground">Solo Stove vs Breeo</li>
          </ol>
        </nav>

        {/* Affiliate Disclosure */}
        <div className="container mx-auto px-4">
          <AffiliateDisclosure className="mb-8" />
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/90 to-red-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-6">
                <Flame className="h-16 w-16 mx-auto mb-4 text-red-200" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Solo Stove vs Breeo: The Ultimate Smokeless Fire Pit Comparison (2025)
              </h1>
              <p className="text-xl mb-8">
                Two premium brands, different philosophies. We'll help you choose between 
                Solo Stove's simplicity and Breeo's cooking-focused design for your backyard.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  See Our Winner <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/20 text-white">
                  Family Safety Tested
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Decision Summary */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Decision Guide</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {decisionSummary.map((item, index) => (
                <Card key={index} className="text-center relative">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    {item.category}
                  </Badge>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-lg flex items-center justify-center gap-2">
                      {item.choice.includes("Solo") ? <Flame className="h-5 w-5" /> : <Utensils className="h-5 w-5" />}
                      {item.choice}
                    </CardTitle>
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
            <h2 className="text-3xl font-bold text-center mb-12">Fire Pit Model Comparison</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Model</TableHead>
                    <TableHead>Diameter</TableHead>
                    <TableHead>Weight</TableHead>
                    <TableHead>Materials</TableHead>
                    <TableHead>Cooking Options</TableHead>
                    <TableHead>Accessories Ecosystem</TableHead>
                    <TableHead>Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {firePitComparison.map((pit, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          {pit.model.includes("Solo") ? 
                            <Badge variant="outline" className="text-orange-600 border-orange-600">Solo</Badge> :
                            <Badge variant="outline" className="text-blue-600 border-blue-600">Breeo</Badge>
                          }
                          {pit.model}
                        </div>
                      </TableCell>
                      <TableCell>{pit.diameter}</TableCell>
                      <TableCell>{pit.weight}</TableCell>
                      <TableCell>{pit.materials}</TableCell>
                      <TableCell>{pit.cookingOptions}</TableCell>
                      <TableCell>{pit.accessories}</TableCell>
                      <TableCell className="font-medium text-primary">{pit.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Heat Output & Smokeless Reality */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Heat Output & Smokeless Performance</h2>
            <div className="space-y-6">
              {heatOutputComparison.map((comparison, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <Flame className="h-6 w-6 text-primary mr-2" />
                        {comparison.aspect}
                      </CardTitle>
                      <Badge variant={
                        comparison.winner.includes("Solo") ? "default" : 
                        comparison.winner.includes("Breeo") ? "secondary" : 
                        "outline"
                      }>
                        {comparison.winner}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2 flex items-center">
                          <Flame className="h-4 w-4 mr-1" />
                          Solo Stove:
                        </h4>
                        <p className="text-sm">{comparison.soloStove}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-2 flex items-center">
                          <Utensils className="h-4 w-4 mr-1" />
                          Breeo:
                        </h4>
                        <p className="text-sm">{comparison.breeo}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Flame className="h-6 w-6 text-yellow-600 mt-1" />
                    <div>
                      <h3 className="font-bold text-yellow-900 mb-2">Smokeless Reality Check:</h3>
                      <div className="text-sm text-yellow-800 space-y-1">
                        <div>• Both brands achieve 95-99% smoke reduction with proper dry hardwood</div>
                        <div>• Expect some smoke during startup and when adding fresh wood</div>
                        <div>• Wet or softwood will produce smoke regardless of fire pit technology</div>
                        <div>• Wind conditions can affect smokeless performance</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cooking Capability & Accessories */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Cooking Capability & Accessories</h2>
            <div className="space-y-6">
              {cookingCapability.map((capability, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <Utensils className="h-6 w-6 text-primary mr-2" />
                        {capability.feature}
                      </CardTitle>
                      <Badge variant={capability.advantage === "Breeo" ? "default" : "secondary"}>
                        Advantage: {capability.advantage}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2">Solo Stove:</h4>
                        <p className="text-sm">{capability.soloStove}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-2">Breeo:</h4>
                        <p className="text-sm">{capability.breeo}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 grid lg:grid-cols-2 gap-8">
              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-orange-800">Solo Stove Cooking Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-orange-800 space-y-3">
                    <p><strong>Philosophy:</strong> Fire-focused with optional cooking</p>
                    <p><strong>Available Accessories:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Grill grate (fits over fire pit)</li>
                      <li>• Pizza oven attachment</li>
                      <li>• Windscreen and lid</li>
                    </ul>
                    <p><strong>Best For:</strong> Occasional grilling, s'mores, simple outdoor cooking</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800">Breeo Cooking Ecosystem</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-blue-800 space-y-3">
                    <p><strong>Philosophy:</strong> Fire pit + outdoor kitchen combined</p>
                    <p><strong>Available Accessories:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Multiple grill grate sizes and styles</li>
                      <li>• Cast iron griddle and Dutch oven</li>
                      <li>• Rotisserie attachment</li>
                      <li>• Pizza oven and baking stone</li>
                      <li>• Prep tables and cutting boards</li>
                    </ul>
                    <p><strong>Best For:</strong> Regular outdoor cooking, entertaining, full meal preparation</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Portability, Storage & Maintenance */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Portability, Storage & Maintenance</h2>
            <div className="space-y-6">
              {portabilityStorage.map((storage, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{storage.aspect}</CardTitle>
                      <Badge variant={
                        storage.winner.includes("Solo") ? "default" : 
                        storage.winner.includes("Breeo") ? "secondary" : 
                        "outline"
                      }>
                        {storage.winner}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2">Solo Stove:</h4>
                        <p className="text-sm">{storage.soloStove}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-2">Breeo:</h4>
                        <p className="text-sm">{storage.breeo}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Family Use */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Safety & Family Use Considerations</h2>
            <div className="space-y-6">
              {safetyFamilyUse.map((safety, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-6 w-6 text-primary mr-2" />
                      {safety.consideration}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2">Solo Stove:</h4>
                        <p className="text-sm">{safety.soloStove}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-2">Breeo:</h4>
                        <p className="text-sm">{safety.breeo}</p>
                      </div>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-md">
                      <p className="font-medium text-sm">💡 Our Recommendation:</p>
                      <p className="text-sm">{safety.recommendation}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Which One Is Right for You */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Which Fire Pit Is Right for You?</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-800">
                    <Flame className="h-6 w-6 text-orange-600 mr-2" />
                    Choose Solo Stove If You:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-orange-800">
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-orange-600 border-orange-600">✓</Badge>
                      Want the simplest smokeless experience
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-orange-600 border-orange-600">✓</Badge>
                      Need portability for camping or moving around yard
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-orange-600 border-orange-600">✓</Badge>
                      Prefer fire-focused gatherings over cooking
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-orange-600 border-orange-600">✓</Badge>
                      Have limited storage space
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-orange-600 border-orange-600">✓</Badge>
                      Want minimal maintenance and setup
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-orange-600 border-orange-600">✓</Badge>
                      Have young children (lower profile, fewer accessories)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-800">
                    <Utensils className="h-6 w-6 text-blue-600 mr-2" />
                    Choose Breeo If You:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-blue-800">
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-blue-600 border-blue-600">✓</Badge>
                      Love outdoor cooking and entertaining
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-blue-600 border-blue-600">✓</Badge>
                      Want an all-in-one fire pit + kitchen solution  
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-blue-600 border-blue-600">✓</Badge>
                      Have a permanent outdoor living space
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-blue-600 border-blue-600">✓</Badge>
                      Enjoy building an accessory ecosystem over time
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-blue-600 border-blue-600">✓</Badge>
                      Prefer the weathering patina look of Corten steel
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-blue-600 border-blue-600">✓</Badge>
                      Want maximum cooking versatility
                    </li>
                  </ul>
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

        {/* Final Recommendation */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto bg-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Our Final Recommendation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg mb-6">
                  <strong>Breeo X Series wins for most families</strong> who want both fire and cooking capabilities. 
                  The built-in cooking ring and accessory ecosystem provide years of outdoor entertainment value.
                </p>
                <p className="mb-6">
                  Choose Solo Stove if you prioritize portability, simplicity, or have very young children. 
                  Both brands deliver excellent smokeless performance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link to="/outdoor/backyard-gadgets-summer">
                      More Backyard Ideas <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/outdoor/best-outdoor-griddle-2025">
                      Best Outdoor Griddles <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Backyard Gadgets for Summer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete guide to the best outdoor gadgets and tools for summer entertaining.
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
                  <CardTitle className="text-lg">Best Outdoor Griddle 2025</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Top outdoor griddle picks for family cooking and entertaining.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/outdoor/best-outdoor-griddle-2025">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Fall Porch Decor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Creative fall decorating ideas to complement your outdoor living space.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/seasonal/fall-porch-decor">
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

export default SoloStoveVsBreeo;