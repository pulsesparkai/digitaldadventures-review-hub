import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExternalLink, ArrowRight, Star, Shield, Zap, Home, ChevronRight, Leaf, Battery, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import ProductImage from '@/components/ProductImage';

const BestElectricMowers2025 = () => {
  const mowers = [
    {
      rank: 1,
      brand: "EGO",
      model: "LM2142SP 21-inch Self-Propelled",
      deckWidth: "21 inches",
      batteryCapacity: "56V 5.0Ah",
      runtime: "45-60 minutes",
      yardSize: "Up to 3/4 acre",
      price: "$449",
      weight: "62 lbs",
      features: ["Self-propelled", "LED headlights", "Weather resistant"],
      batteryPlatform: "56V ARC Lithium",
      chargeTime: "40 minutes",
      affiliate: "https://digitaldadventures.com/go/ego-lm2142sp",
      badge: "Best Overall",
      bestFor: "Medium to large yards, professional results"
    },
    {
      rank: 2,
      brand: "Greenworks",
      model: "MO40L410 20-inch 3-in-1",
      deckWidth: "20 inches",
      batteryCapacity: "40V 4.0Ah",
      runtime: "35-50 minutes",
      yardSize: "Up to 1/2 acre",
      price: "$299",
      weight: "37 lbs",
      features: ["3-in-1 design", "Single lever height adjust", "Foldable handle"],
      batteryPlatform: "40V G-MAX",
      chargeTime: "60 minutes",
      affiliate: "https://digitaldadventures.com/go/greenworks-mo40l410",
      badge: "Best Value",
      bestFor: "Budget-conscious homeowners, smaller yards"
    },
    {
      rank: 3,
      brand: "Ryobi",
      model: "RY401110 20-inch Brushless",
      deckWidth: "20 inches",
      batteryCapacity: "40V 6.0Ah",
      runtime: "40-55 minutes",
      yardSize: "Up to 1/2 acre",
      price: "$379",
      weight: "49 lbs",
      features: ["Brushless motor", "Load sensing technology", "7-position height"],
      batteryPlatform: "40V Expand-It",
      chargeTime: "90 minutes",
      affiliate: "https://digitaldadventures.com/go/ryobi-ry401110",
      badge: "Best Ecosystem",
      bestFor: "Ryobi tool users, versatile yard work"
    },
    {
      rank: 4,
      brand: "Kobalt",
      model: "KM2180B-06 21-inch Self-Propelled",
      deckWidth: "21 inches",
      batteryCapacity: "80V 5.0Ah",
      runtime: "50-70 minutes",
      yardSize: "Up to 1 acre",
      price: "$399",
      weight: "68 lbs",
      features: ["Self-propelled", "Smart Cut load sensing", "Steel deck"],
      batteryPlatform: "80V MAX",
      chargeTime: "45 minutes",
      affiliate: "https://digitaldadventures.com/go/kobalt-km2180b",
      badge: "Most Power",
      bestFor: "Large yards, thick grass conditions"
    }
  ];

  const runtimeByYardSize = [
    {
      yardSize: "1/4 Acre (10,890 sq ft)",
      egoRuntime: "15-20 minutes",
      greenworksRuntime: "12-18 minutes",
      ryobiRuntime: "15-20 minutes",
      kobaltRuntime: "15-18 minutes",
      batteriesNeeded: "1 battery sufficient for all models",
      mowingTime: "20-30 minutes total"
    },
    {
      yardSize: "1/2 Acre (21,780 sq ft)",
      egoRuntime: "35-45 minutes",
      greenworksRuntime: "45-50 minutes (tight)",
      ryobiRuntime: "40-50 minutes",
      kobaltRuntime: "35-45 minutes",
      batteriesNeeded: "1-2 batteries depending on conditions",
      mowingTime: "45-60 minutes total"
    },
    {
      yardSize: "3/4 Acre (32,670 sq ft)",
      egoRuntime: "55-60 minutes (possible with 7.5Ah)",
      greenworksRuntime: "Need 2 batteries",
      ryobiRuntime: "Need 2 batteries",
      kobaltRuntime: "50-65 minutes",
      batteriesNeeded: "2 batteries recommended for most models",
      mowingTime: "70-90 minutes total"
    },
    {
      yardSize: "1 Acre (43,560 sq ft)",
      egoRuntime: "Need 2 batteries (7.5Ah recommended)",
      greenworksRuntime: "Need 2-3 batteries",
      ryobiRuntime: "Need 2-3 batteries",
      kobaltRuntime: "1-2 batteries (80V advantage)",
      batteriesNeeded: "2-3 batteries for most models",
      mowingTime: "90-120 minutes total"
    }
  ];

  const faqData = [
    {
      question: "How many batteries do I really need for a half-acre yard?",
      answer: "For a typical half-acre yard, one high-capacity battery (5.0Ah+) is usually sufficient with EGO, Kobalt, or Ryobi models. However, having a second battery eliminates range anxiety and allows continuous mowing during peak growing season when grass is thick and wet."
    },
    {
      question: "Do electric mowers work well in thick, tall grass?",
      answer: "Modern electric mowers handle thick grass surprisingly well, especially models with brushless motors and load-sensing technology like the EGO LM2142SP and Ryobi RY401110. They automatically adjust power output based on grass density. However, runtime decreases by 20-30% in thick conditions."
    },
    {
      question: "What's the real charging time for these batteries?",
      answer: "Fast charging varies significantly: EGO charges 5.0Ah in 40 minutes, Greenworks takes 60 minutes, Ryobi needs 90 minutes, and Kobalt charges in 45 minutes. Rapid chargers are worth the investment if you have large yards or limited mowing windows."
    },
    {
      question: "Are electric mowers worth it compared to gas for large yards?",
      answer: "For yards over 3/4 acre, the convenience depends on your priorities. Electric mowers eliminate maintenance, reduce noise, and provide instant starts. However, you'll need multiple batteries ($200-400 additional cost) and longer total mowing times due to battery swaps."
    },
    {
      question: "How do I choose between 40V, 56V, and 80V systems?",
      answer: "Voltage affects power and runtime: 40V systems (Greenworks, Ryobi) are sufficient for yards under 1/2 acre. 56V (EGO) provides the best balance of power and efficiency for most users. 80V (Kobalt) offers maximum power for large yards and challenging conditions."
    },
    {
      question: "What's the battery storage strategy for winter?",
      answer: "Store lithium batteries at 40-60% charge in temperatures between 32-77°F. Avoid completely draining or fully charging before storage. Most manufacturers recommend charging once every 2-3 months during winter storage to maintain battery health."
    },
    {
      question: "Do electric mowers mulch as well as gas mowers?",
      answer: "Yes, electric mowers mulch effectively due to consistent blade speed and precise motor control. Models like the EGO LM2142SP and Kobalt KM2180B actually mulch better than comparable gas mowers because they maintain optimal blade speed regardless of grass density."
    },
    {
      question: "How long do electric mower batteries actually last?",
      answer: "Quality lithium batteries (EGO, Kobalt, Ryobi) typically last 5-7 years with proper care. Expect gradual capacity loss of about 10-15% after 3 years. Greenworks 40V batteries may show faster degradation but are more affordable to replace."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Electric Lawn Mowers 2025: EGO vs Greenworks vs Ryobi vs Kobalt",
    "description": "Comprehensive guide to the best cordless electric lawn mowers for 2025, comparing EGO, Greenworks, Ryobi, and Kobalt models with runtime analysis by yard size.",
    "image": "/images/electric-lawn-mowers-2025.jpg",
    "author": {
      "@type": "Person",
      "name": "DigitalDadVentures Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DigitalDadVentures",
      "logo": {
        "@type": "ImageObject",
        "url": "/lovable-uploads/e490cc97-3f4e-4f7f-8a9a-ad4eb457a78b.png"
      }
    },
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://digitaldadventures.com/yard/best-electric-mowers-2025"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
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
        <title>Best Electric Lawn Mowers 2025: EGO vs Greenworks vs Ryobi Complete Guide</title>
        <meta name="description" content="Compare top electric lawn mowers including EGO, Greenworks, Ryobi, and Kobalt with detailed runtime analysis, battery strategies, and yard size recommendations." />
        <meta name="keywords" content="best electric lawn mower, cordless mower, EGO mower, Greenworks mower, Ryobi mower, battery lawn mower, electric vs gas mower" />
        <link rel="canonical" href="https://digitaldadventures.com/yard/best-electric-mowers-2025" />
        <meta property="og:title" content="Best Electric Lawn Mowers 2025: EGO vs Greenworks vs Ryobi" />
        <meta property="og:description" content="Comprehensive electric mower comparison with runtime data, battery analysis, and yard size recommendations for smart mowing decisions." />
        <meta property="og:image" content="/images/electric-lawn-mowers-2025.jpg" />
        <meta property="og:url" content="https://digitaldadventures.com/yard/best-electric-mowers-2025" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Electric Mowers 2025: EGO, Greenworks, Ryobi Compared" />
        <meta name="twitter:description" content="Electric lawn mower buying guide with detailed battery runtime analysis and real-world performance data." />
        <meta name="twitter:image" content="/images/electric-lawn-mowers-2025.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-gray-500 hover:text-primary flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <Link to="/category/yard" className="text-gray-500 hover:text-primary">Yard & Garden</Link>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-gray-900">Best Electric Mowers 2025</span>
            </nav>
          </div>
        </div>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4">Electric Lawn Mowers</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Best Electric Lawn Mowers 2025: Complete Buying Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive comparison of top cordless electric mowers including EGO, Greenworks, Ryobi, and Kobalt with real-world runtime data by yard size.
            </p>
            
            <div className="relative mb-8">
              <ProductImage 
                src="/images/electric-lawn-mowers-2025.jpg"
                alt="Comparison of top electric lawn mowers including EGO, Greenworks, Ryobi, and Kobalt models on green lawn showing different deck sizes and battery configurations"
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Quick Decision Guide */}
          <Card className="mb-12 border-2 border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Leaf className="h-6 w-6 mr-2 text-primary" />
                Quick Electric Mower Selection Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Small to Medium Yards (Under 1/2 Acre)</h3>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• <strong>Greenworks MO40L410:</strong> Best value at $299</li>
                    <li>• <strong>Ryobi RY401110:</strong> Best ecosystem integration</li>
                    <li>• <strong>Single battery sufficient</strong> for most mowing sessions</li>
                    <li>• 40V systems provide adequate power</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Large Yards (1/2 Acre+)</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• <strong>EGO LM2142SP:</strong> Best performance and runtime</li>
                    <li>• <strong>Kobalt KM2180B:</strong> Maximum power (80V)</li>
                    <li>• <strong>Two batteries recommended</strong> for continuous mowing</li>
                    <li>• Higher voltage systems (56V-80V) preferred</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mower Comparison Table */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Top Electric Mower Comparison 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-32">Model</TableHead>
                      <TableHead>Deck Width</TableHead>
                      <TableHead>Battery</TableHead>
                      <TableHead>Runtime</TableHead>
                      <TableHead>Max Yard Size</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Best For</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mowers.map((mower) => (
                      <TableRow key={mower.rank}>
                        <TableCell>
                          <div>
                            <Badge variant="outline" className="mb-1">{mower.badge}</Badge>
                            <p className="font-medium">{mower.brand} {mower.model}</p>
                          </div>
                        </TableCell>
                        <TableCell>{mower.deckWidth}</TableCell>
                        <TableCell>{mower.batteryCapacity}</TableCell>
                        <TableCell>{mower.runtime}</TableCell>
                        <TableCell>{mower.yardSize}</TableCell>
                        <TableCell className="font-medium">{mower.price}</TableCell>
                        <TableCell className="text-sm">{mower.bestFor}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Runtime Analysis by Yard Size */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Runtime Analysis by Yard Size
              </CardTitle>
              <p className="text-gray-600 text-sm">Real-world runtime expectations based on grass conditions and mowing patterns</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {runtimeByYardSize.map((data, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-3">{data.yardSize}</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="mb-2"><strong>Expected Runtime by Model:</strong></p>
                        <ul className="space-y-1">
                          <li>• EGO LM2142SP: {data.egoRuntime}</li>
                          <li>• Greenworks MO40L410: {data.greenworksRuntime}</li>
                          <li>• Ryobi RY401110: {data.ryobiRuntime}</li>
                          <li>• Kobalt KM2180B: {data.kobaltRuntime}</li>
                        </ul>
                      </div>
                      <div>
                        <p className="mb-2"><strong>Battery Strategy:</strong></p>
                        <p className="text-green-700">{data.batteriesNeeded}</p>
                        <p className="mt-2"><strong>Total Mowing Time:</strong></p>
                        <p className="text-blue-700">{data.mowingTime}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Battery Strategy Guide */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Battery className="h-5 w-5 mr-2" />
                Smart Battery Strategy for Electric Mowers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Small Yards (Under 1/4 Acre)</h3>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Single 4.0-5.0Ah battery sufficient</li>
                    <li>• Charge after every 2-3 mowing sessions</li>
                    <li>• Standard charger adequate</li>
                    <li>• Total battery investment: $100-150</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Medium Yards (1/4 - 1/2 Acre)</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• One 5.0Ah + backup 2.5Ah battery</li>
                    <li>• Rapid charger recommended</li>
                    <li>• Swap batteries mid-season for thick grass</li>
                    <li>• Total battery investment: $200-300</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">Large Yards (1/2+ Acre)</h3>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• Two 5.0-7.5Ah batteries minimum</li>
                    <li>• Rapid charger essential</li>
                    <li>• Continuous mowing capability</li>
                    <li>• Total battery investment: $300-500</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Comparison */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Cutting Performance & Features Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Mulching Performance</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>EGO LM2142SP:</strong> Excellent mulching with dual-blade system</p>
                      <p><strong>Kobalt KM2180B:</strong> Superior for thick grass, steel deck</p>
                      <p><strong>Ryobi RY401110:</strong> Good with load-sensing technology</p>
                      <p><strong>Greenworks MO40L410:</strong> Adequate for normal conditions</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Weather Resistance</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>EGO:</strong> IPX4 rating, LED headlights for low light</p>
                      <p><strong>Kobalt:</strong> All-weather design, steel construction</p>
                      <p><strong>Ryobi:</strong> Weather-resistant, tool ecosystem</p>
                      <p><strong>Greenworks:</strong> Basic weather protection</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3">Storage & Convenience</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Folding Handles:</strong> All models offer vertical storage</p>
                      <p><strong>Weight:</strong> Greenworks lightest (37 lbs), Kobalt heaviest (68 lbs)</p>
                    </div>
                    <div>
                      <p><strong>Height Adjustment:</strong> Single-lever on all premium models</p>
                      <p><strong>Collection:</strong> Side discharge and bagging available</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Related Articles */}
          <Card>
            <CardHeader>
              <CardTitle>Related Yard Care Guides</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/yard/battery-vs-gas-lawn-mowers" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-semibold mb-2">Battery vs Gas Mowers: Ultimate Comparison</h4>
                  <p className="text-sm text-gray-600">Detailed analysis of electric vs gas lawn mower pros and cons</p>
                  <ArrowRight className="h-4 w-4 mt-2 text-primary" />
                </Link>
                <Link to="/yard/lawn-care-maintenance-schedule" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-semibold mb-2">Seasonal Lawn Care Schedule</h4>
                  <p className="text-sm text-gray-600">Month-by-month lawn maintenance guide for healthy grass</p>
                  <ArrowRight className="h-4 w-4 mt-2 text-primary" />
                </Link>
              </div>
            </CardContent>
          </Card>

          <AffiliateDisclosure />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BestElectricMowers2025;