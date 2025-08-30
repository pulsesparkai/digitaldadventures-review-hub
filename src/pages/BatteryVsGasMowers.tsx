import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExternalLink, ArrowRight, Zap, Fuel, DollarSign, Home, ChevronRight, Trophy, Clock, Volume2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import ProductImage from '@/components/ProductImage';

const BatteryVsGasMowers = () => {
  const decisionSummary = [
    {
      category: "Best Overall",
      choice: "Battery Mower",
      reason: "Wins for 80% of homeowners - quieter, cleaner, and sufficient power for yards under ½ acre"
    },
    {
      category: "Best Budget",
      choice: "Gas Push Mower", 
      reason: "$200-300 gas mowers offer more cutting power per dollar for large yards"
    },
    {
      category: "Best Heavy-Duty",
      choice: "Gas Self-Propelled",
      reason: "Unmatched power and runtime for 1+ acre properties and thick grass"
    }
  ];

  const comparisonData = [
    {
      type: "Battery Walk-Behind",
      powerEquivalent: "140-160cc gas",
      runtime: {
        quarter: "45-60 min",
        half: "30-45 min", 
        full: "15-30 min"
      },
      noise: "60-65 dB",
      maintenance: "$0-20/year",
      fiveYearCost: "$400-700"
    },
    {
      type: "Battery Self-Propelled", 
      powerEquivalent: "160-190cc gas",
      runtime: {
        quarter: "35-50 min",
        half: "25-35 min",
        full: "15-25 min"
      },
      noise: "65-70 dB",
      maintenance: "$0-30/year", 
      fiveYearCost: "$600-1000"
    },
    {
      type: "Gas Walk-Behind",
      powerEquivalent: "140-190cc",
      runtime: {
        quarter: "90+ min",
        half: "90+ min",
        full: "90+ min"
      },
      noise: "85-95 dB",
      maintenance: "$50-100/year",
      fiveYearCost: "$450-650"
    },
    {
      type: "Gas Self-Propelled",
      powerEquivalent: "160-220cc", 
      runtime: {
        quarter: "90+ min",
        half: "90+ min",
        full: "90+ min"
      },
      noise: "85-100 dB",
      maintenance: "$75-150/year",
      fiveYearCost: "$600-900"
    }
  ];

  const costBreakdown = {
    battery: {
      initial: "$300-800",
      year1: "$0-20 (blade sharpening)",
      year2: "$0-20 (blade sharpening)",
      year3: "$100-200 (battery replacement)",
      year4: "$0-20 (blade sharpening)",
      year5: "$0-20 (blade sharpening)",
      total: "$400-1080"
    },
    gas: {
      initial: "$200-600", 
      year1: "$50-75 (oil, gas, tune-up)",
      year2: "$50-75 (oil, gas, tune-up)",
      year3: "$100-150 (oil, gas, spark plug, filter)",
      year4: "$50-75 (oil, gas, tune-up)",
      year5: "$75-100 (oil, gas, carburetor service)",
      total: "$525-1075"
    }
  };

  const yardSizeGuide = [
    {
      size: "Quarter Acre (≤10,000 sq ft)",
      batteryRecommendation: "Perfect fit - any 40V+ battery mower",
      gasRecommendation: "Overkill unless you have thick grass",
      winner: "Battery",
      reasoning: "Sufficient power, quiet operation, no emissions in smaller spaces"
    },
    {
      size: "Half Acre (10,000-20,000 sq ft)", 
      batteryRecommendation: "Works with 56V+ dual battery systems",
      gasRecommendation: "Reliable option, especially self-propelled",
      winner: "Either", 
      reasoning: "Battery works but may need backup battery. Gas provides unlimited runtime"
    },
    {
      size: "One Acre+ (20,000+ sq ft)",
      batteryRecommendation: "Requires commercial-grade battery mower",
      gasRecommendation: "Clear advantage - consistent power throughout",
      winner: "Gas",
      reasoning: "Battery technology not quite there yet for large properties"
    }
  ];

  const noiseComparison = [
    {
      location: "Dense Suburbs/HOA", 
      batteryAdvantage: "Can mow early morning (7am) without complaints",
      gasLimitation: "Usually restricted to 8am-6pm weekdays",
      recommendation: "Battery strongly recommended"
    },
    {
      location: "Standard Neighborhoods",
      batteryAdvantage: "Neighborly - can mow while kids play outside", 
      gasLimitation: "Need to coordinate with neighbors' schedules",
      recommendation: "Battery preferred"
    },
    {
      location: "Rural/Large Lots",
      batteryAdvantage: "Still quieter for family conversations",
      gasLimitation: "Noise less of an issue with distance",
      recommendation: "Either works fine"
    }
  ];

  const storageConsiderations = [
    {
      aspect: "Space Requirements",
      battery: "Compact storage - no fuel cans or ventilation needed",
      gas: "Need ventilation, separate fuel storage, more space"
    },
    {
      aspect: "Winter Storage",
      battery: "Remove battery, store in warm place - mower can stay cold",
      gas: "Fuel stabilizer, oil change, spark plug maintenance required"
    },
    {
      aspect: "Apartment/Condo",
      battery: "Can store in closet or small garage space",
      gas: "Often prohibited due to fuel storage restrictions"
    }
  ];

  const faqs = [
    {
      question: "How long do battery mower batteries actually last?",
      answer: "Typical runtime: 30-60 minutes depending on grass conditions and mower. Battery lifespan: 3-5 years or 500+ charges with proper care."
    },
    {
      question: "Can battery mowers handle thick or wet grass?",
      answer: "Modern 56V+ battery mowers handle thick grass well, but struggle with wet conditions. Wait for dry conditions for best results."
    },
    {
      question: "What's the real cost difference over 5 years?",
      answer: "Nearly identical: Battery $400-1000 total, Gas $500-1000 total. Battery has higher upfront cost but lower maintenance."
    },
    {
      question: "Do I need a backup battery for my yard?",
      answer: "Quarter acre: Usually no. Half acre: Recommended. Full acre+: Essential or consider gas mower instead."
    },
    {
      question: "Are battery mowers powerful enough for hills?", 
      answer: "Yes for moderate slopes. Self-propelled battery mowers handle most residential hills. Steep slopes (15%+) favor gas mowers."
    },
    {
      question: "What happens when the battery dies mid-mow?",
      answer: "Swap to backup battery (if you have one) or wait 60-90 minutes to charge. This is why many people buy two batteries."
    },
    {
      question: "Do gas mowers really require that much maintenance?",
      answer: "Annual: Oil changes, spark plug, air filter. Seasonal: Fuel stabilizer, carburetor cleaning. Total cost: $50-150/year."
    },
    {
      question: "Which type has better resale value?",
      answer: "Battery mowers hold value better due to lower wear, but gas mowers have broader used market appeal."
    }
  ];

  // Schema markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Battery vs Gas Lawn Mowers: Which Is Best for Your Yard in 2025?",
    "description": "Complete comparison of battery vs gas lawn mowers including power, runtime, cost analysis, and decision framework for different yard sizes.",
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
    "mainEntityOfPage": "https://digitaldadventures.com/yard/battery-vs-gas-lawn-mowers"
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
        <title>Battery vs Gas Lawn Mower (2025): The Clear Winner for Your Yard</title>
        <meta name="description" content="Power, runtime, cost, and noise—see which mower type fits your yard with our 5-year cost and runtime framework." />
        <meta name="keywords" content="battery vs gas lawn mower, best electric lawn mower 2025, battery mower runtime half acre, electric vs gas mower maintenance, HOA noise lawn mower" />
        <link rel="canonical" href="https://digitaldadventures.com/yard/battery-vs-gas-lawn-mowers" />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" />
        <meta property="og:title" content="Battery vs Gas Lawn Mower (2025): The Clear Winner for Your Yard" />
        <meta property="og:description" content="Power, runtime, cost, and noise—see which mower type fits your yard with our 5-year cost and runtime framework." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://digitaldadventures.com/yard/battery-vs-gas-lawn-mowers" />
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
            <li><Link to="/yard" className="hover:text-primary">Yard</Link></li>
            <ChevronRight className="h-4 w-4" />
            <li className="text-foreground">Battery vs Gas Lawn Mowers</li>
          </ol>
        </nav>

        {/* Affiliate Disclosure */}
        <div className="container mx-auto px-4">
          <AffiliateDisclosure className="mb-8" />
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/90 to-green-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-6">
                <Trophy className="h-16 w-16 mx-auto mb-4 text-green-200" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Battery vs Gas Lawn Mowers: Which Is Best for Your Yard in 2025?
              </h1>
              <p className="text-xl mb-8">
                The definitive comparison covering power, runtime, cost, and practicality. 
                We'll help you choose the right mower type for your specific yard and lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  See Our Recommendation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/20 text-white">
                  5-Year Cost Analysis
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Decision Summary */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Decision Framework</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {decisionSummary.map((item, index) => (
                <Card key={index} className="text-center relative">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    {item.category}
                  </Badge>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-lg flex items-center justify-center gap-2">
                      {item.choice === "Battery Mower" ? <Zap className="h-5 w-5" /> : <Fuel className="h-5 w-5" />}
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
            <h2 className="text-3xl font-bold text-center mb-12">Complete Mower Type Comparison</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Power Equivalent</TableHead>
                    <TableHead>Runtime (¼/½/1 acre)</TableHead>
                    <TableHead>Noise</TableHead>
                    <TableHead>Annual Maintenance</TableHead>
                    <TableHead>Est. 5-Year Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((mower, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{mower.type}</TableCell>
                      <TableCell>{mower.powerEquivalent}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>¼: {mower.runtime.quarter}</div>
                          <div>½: {mower.runtime.half}</div>
                          <div>1: {mower.runtime.full}</div>
                        </div>
                      </TableCell>
                      <TableCell>{mower.noise}</TableCell>
                      <TableCell>{mower.maintenance}</TableCell>
                      <TableCell className="font-medium">{mower.fiveYearCost}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* 5-Year Cost Analysis */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">5-Year Cost of Ownership</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-6 w-6 text-green-600 mr-2" />
                    Battery Mower Costs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>Initial Purchase</TableCell>
                        <TableCell className="font-medium">{costBreakdown.battery.initial}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Year 1</TableCell>
                        <TableCell>{costBreakdown.battery.year1}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Year 2</TableCell>
                        <TableCell>{costBreakdown.battery.year2}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Year 3 (Battery replacement)</TableCell>
                        <TableCell className="font-medium">{costBreakdown.battery.year3}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Year 4</TableCell>
                        <TableCell>{costBreakdown.battery.year4}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Year 5</TableCell>
                        <TableCell>{costBreakdown.battery.year5}</TableCell>
                      </TableRow>
                      <TableRow className="border-t-2">
                        <TableCell className="font-bold">Total 5-Year Cost</TableCell>
                        <TableCell className="font-bold text-green-600">{costBreakdown.battery.total}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Fuel className="h-6 w-6 text-orange-600 mr-2" />
                    Gas Mower Costs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>Initial Purchase</TableCell>
                        <TableCell className="font-medium">{costBreakdown.gas.initial}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Year 1</TableCell>
                        <TableCell>{costBreakdown.gas.year1}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Year 2</TableCell>
                        <TableCell>{costBreakdown.gas.year2}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Year 3 (Major service)</TableCell>
                        <TableCell className="font-medium">{costBreakdown.gas.year3}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Year 4</TableCell>
                        <TableCell>{costBreakdown.gas.year4}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Year 5</TableCell>
                        <TableCell>{costBreakdown.gas.year5}</TableCell>
                      </TableRow>
                      <TableRow className="border-t-2">
                        <TableCell className="font-bold">Total 5-Year Cost</TableCell>
                        <TableCell className="font-bold text-orange-600">{costBreakdown.gas.total}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Power & Runtime by Yard Size */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Power & Runtime by Yard Size</h2>
            <div className="space-y-6">
              {yardSizeGuide.map((guide, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <Home className="h-6 w-6 text-primary mr-2" />
                        {guide.size}
                      </CardTitle>
                      <Badge variant={guide.winner === "Battery" ? "default" : guide.winner === "Gas" ? "destructive" : "secondary"}>
                        Winner: {guide.winner}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Battery Option:</h4>
                        <p className="text-sm">{guide.batteryRecommendation}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2">Gas Option:</h4>
                        <p className="text-sm">{guide.gasRecommendation}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Why {guide.winner} Wins:</h4>
                        <p className="text-sm">{guide.reasoning}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Noise & HOA Considerations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Noise Levels & HOA Considerations</h2>
            <div className="space-y-6">
              {noiseComparison.map((noise, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Volume2 className="h-6 w-6 text-primary mr-2" />
                      {noise.location}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Battery Advantage:</h4>
                        <p className="text-sm">{noise.batteryAdvantage}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2">Gas Limitation:</h4>
                        <p className="text-sm">{noise.gasLimitation}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Recommendation:</h4>
                        <p className="text-sm font-medium">{noise.recommendation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Volume2 className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-bold text-blue-900 mb-2">Noise Level Reference:</h3>
                      <div className="text-sm text-blue-800 space-y-1">
                        <div>• Battery mowers: 60-70 dB (normal conversation level)</div>
                        <div>• Gas mowers: 85-100 dB (motorcycle/chainsaw level)</div>
                        <div>• Most HOAs restrict loud equipment before 8am and after 6pm</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Storage & Reliability */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Storage & Reliability Considerations</h2>
            <div className="space-y-6">
              {storageConsiderations.map((storage, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{storage.aspect}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2 flex items-center">
                          <Zap className="h-4 w-4 mr-1" />
                          Battery Mowers:
                        </h4>
                        <p className="text-sm">{storage.battery}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2 flex items-center">
                          <Fuel className="h-4 w-4 mr-1" />
                          Gas Mowers:
                        </h4>
                        <p className="text-sm">{storage.gas}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Choose What */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Who Should Choose Battery vs Gas</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-800">
                    <Zap className="h-6 w-6 text-green-600 mr-2" />
                    Choose Battery If You:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-green-800">
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-green-600 border-green-600">✓</Badge>
                      Have a yard under ½ acre
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-green-600 border-green-600">✓</Badge>
                      Live in suburbs or HOA community
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-green-600 border-green-600">✓</Badge>
                      Want to mow early morning or evening
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-green-600 border-green-600">✓</Badge>
                      Prefer minimal maintenance
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-green-600 border-green-600">✓</Badge>
                      Have limited storage space
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-green-600 border-green-600">✓</Badge>
                      Care about environmental impact
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-800">
                    <Fuel className="h-6 w-6 text-orange-600 mr-2" />
                    Choose Gas If You:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-orange-800">
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-orange-600 border-orange-600">✓</Badge>
                      Have a yard over ½ acre
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-orange-600 border-orange-600">✓</Badge>
                      Deal with thick, tough grass regularly
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-orange-600 border-orange-600">✓</Badge>
                      Need unlimited runtime
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-orange-600 border-orange-600">✓</Badge>
                      Want maximum cutting power
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-orange-600 border-orange-600">✓</Badge>
                      Have budget constraints upfront
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-2 mt-0.5 text-orange-600 border-orange-600">✓</Badge>
                      Don't mind regular maintenance
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
                  <strong>Battery mowers win for 80% of homeowners</strong> - they're quieter, cleaner, and have sufficient power 
                  for most suburban yards under ½ acre. The 5-year costs are nearly identical, but battery mowers offer 
                  a much better user experience.
                </p>
                <p className="mb-6">
                  Choose gas only if you have 1+ acres, extremely thick grass, or need unlimited runtime.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link to="/yard/best-electric-mowers-2025">
                      See Best Battery Mowers 2025 <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/yard/ego-vs-ryobi-leaf-blower">
                      Compare Leaf Blowers <ArrowRight className="ml-2 h-4 w-4" />
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
                  <CardTitle className="text-lg">Best Electric Mowers 2025</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Top battery mower picks by yard size with runtime analysis.
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
                  <CardTitle className="text-lg">EGO vs Ryobi Leaf Blower</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Compare battery-powered leaf blowers for yard cleanup.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/yard/ego-vs-ryobi-leaf-blower">
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
                    Transform your yard into a family-friendly outdoor space.
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

export default BatteryVsGasMowers;