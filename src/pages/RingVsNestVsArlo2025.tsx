import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExternalLink, ArrowRight, Star, Shield, Zap, Home, ChevronRight, Camera, Wifi, Bell } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import ProductImage from '@/components/ProductImage';

const RingVsNestVsArlo2025 = () => {
  const doorbells = [
    {
      brand: "Ring",
      model: "Video Doorbell Pro 2",
      resolution: "1536p HD",
      fieldOfView: "150° horizontal, 90° vertical",
      monthlyStorage: "$4/month (Basic) - $10/month (Plus)",
      installation: "Wired only (hardwired required)",
      batteryLife: "N/A (hardwired)",
      nightVision: "Color with ambient light",
      twoWayAudio: "Yes with noise cancellation",
      priceRange: "$249-279",
      bestFor: "Amazon ecosystem users, apartment renters",
      keyFeatures: ["Pre-roll recording", "3D motion detection", "Alexa integration"],
      kidFeatures: ["Package detection", "Person alerts", "Custom motion zones"],
      affiliate: "https://digitaldadventures.com/go/ring-doorbell-pro2"
    },
    {
      brand: "Google Nest",
      model: "Nest Hello (discontinued) / Nest Doorbell",
      resolution: "1080p HD / 960p",
      fieldOfView: "160° diagonal / 145° diagonal",
      monthlyStorage: "$6/month (Nest Aware) - $12/month (Nest Aware Plus)",
      installation: "Wired / Battery + wired options",
      batteryLife: "2-6 months (battery version)",
      nightVision: "Night vision with HDR",
      twoWayAudio: "Yes with echo cancellation",
      priceRange: "$179-229",
      bestFor: "Google ecosystem users, smart home integration",
      keyFeatures: ["Familiar face detection", "Google Assistant integration", "Activity zones"],
      kidFeatures: ["Family member recognition", "School hours quiet time", "Smart alerts"],
      affiliate: "https://digitaldadventures.com/go/nest-doorbell"
    },
    {
      brand: "Arlo",
      model: "Arlo Essential Video Doorbell",
      resolution: "1080p HD",
      fieldOfView: "180° diagonal",
      monthlyStorage: "$3/month (Secure) - $10/month (Secure Plus)",
      installation: "Wired or wireless battery",
      batteryLife: "3-6 months (battery version)",
      nightVision: "Color night vision",
      twoWayAudio: "Yes with siren",
      priceRange: "$149-199",
      bestFor: "Renters, no wiring required, wide angle coverage",
      keyFeatures: ["No hub required", "Color night vision", "Built-in siren"],
      kidFeatures: ["Package detection", "Visitor recognition", "Quick responses"],
      affiliate: "https://digitaldadventures.com/go/arlo-doorbell"
    }
  ];

  const faqData = [
    {
      question: "Which video doorbell works best for apartments?",
      answer: "Arlo Essential is ideal for apartments due to its wireless battery operation requiring no hardwiring. Ring Pro 2 requires hardwiring but offers better video quality. Check with your landlord about installation requirements before purchasing any wired model."
    },
    {
      question: "Do I need a subscription to use these video doorbells?",
      answer: "Basic functionality works without subscriptions, but cloud storage and advanced features require monthly plans. Ring ($4-10/month), Nest ($6-12/month), and Arlo ($3-10/month) all offer different storage durations and AI features with their paid plans."
    },
    {
      question: "Which doorbell has the best night vision for safety?",
      answer: "Arlo Essential offers the best night vision with full-color imaging in low light. Ring Pro 2 provides color night vision with ambient lighting. Nest Doorbell uses traditional infrared night vision but with excellent HDR processing for clear images."
    },
    {
      question: "How do motion detection zones work for busy sidewalks?",
      answer: "All three brands offer customizable motion zones. Ring's 3D Motion Detection is most precise for busy areas. Nest's Activity Zones work well with AI person detection. Arlo's zones are basic but sufficient for most residential settings. Proper zone setup reduces false alerts by 70-80%."
    },
    {
      question: "Which doorbell integrates best with existing smart home systems?",
      answer: "Ring works seamlessly with Alexa/Amazon devices. Nest integrates perfectly with Google Assistant and Nest products. Arlo works with both Amazon and Google systems but with limited functionality compared to native ecosystems."
    },
    {
      question: "What's the real battery life for wireless models?",
      answer: "Battery life varies significantly: Arlo Essential (3-6 months), Nest Doorbell battery (2-6 months). Factors include weather, motion frequency, and video quality settings. Expect 2-3 months in typical residential use with moderate activity."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ring vs Nest vs Arlo Video Doorbell Comparison 2025: Smart Home Security Guide",
    "description": "Comprehensive comparison of Ring, Google Nest, and Arlo video doorbells covering installation, features, subscription costs, and family-friendly capabilities.",
    "image": "/images/ring-nest-arlo-doorbells.jpg",
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
      "@id": "https://digitaldadventures.com/smarthome/ring-vs-nest-vs-arlo-2025"
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
        <title>Ring vs Nest vs Arlo Video Doorbell Comparison 2025: Smart Home Security Guide</title>
        <meta name="description" content="Compare Ring, Google Nest, and Arlo video doorbells with detailed analysis of features, installation, subscription costs, and family safety capabilities." />
        <meta name="keywords" content="ring vs nest vs arlo, video doorbell comparison, smart doorbell, home security, apartment doorbell, wireless doorbell" />
        <link rel="canonical" href="https://digitaldadventures.com/smarthome/ring-vs-nest-vs-arlo-2025" />
        <meta property="og:title" content="Ring vs Nest vs Arlo Video Doorbell Comparison 2025" />
        <meta property="og:description" content="Detailed comparison of top video doorbell brands with installation guides, feature analysis, and family-focused recommendations." />
        <meta property="og:image" content="/images/ring-nest-arlo-doorbells.jpg" />
        <meta property="og:url" content="https://digitaldadventures.com/smarthome/ring-vs-nest-vs-arlo-2025" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ring vs Nest vs Arlo: Which Video Doorbell Wins in 2025?" />
        <meta name="twitter:description" content="Complete video doorbell comparison covering security features, installation options, and smart home integration." />
        <meta name="twitter:image" content="/images/ring-nest-arlo-doorbells.jpg" />
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
              <Link to="/category/smarthome" className="text-gray-500 hover:text-primary">Smart Home</Link>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-gray-900">Ring vs Nest vs Arlo 2025</span>
            </nav>
          </div>
        </div>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4">Smart Home Security</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ring vs Nest vs Arlo Video Doorbell Comparison 2025
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Complete guide to choosing the best video doorbell for your family's security needs, covering installation, features, and ongoing costs.
            </p>
            
            <div className="relative mb-8">
              <ProductImage 
                src="/images/ring-nest-arlo-doorbells.jpg"
                alt="Ring, Google Nest, and Arlo video doorbells installed side by side showing different designs and mounting options for apartment and home use"
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Quick Decision Guide */}
          <Card className="mb-12 border-2 border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="h-6 w-6 mr-2 text-primary" />
                Quick Doorbell Selection Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Ring Pro 2 - Best for Amazon Users</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Excellent video quality (1536p)</li>
                    <li>• Perfect Alexa integration</li>
                    <li>• Advanced motion detection</li>
                    <li>• Requires hardwiring</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Nest Doorbell - Best for Google Homes</h3>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Smart person recognition</li>
                    <li>• Battery + wired options</li>
                    <li>• Google Assistant integration</li>
                    <li>• Family-friendly features</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">Arlo Essential - Best for Renters</h3>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• 100% wireless operation</li>
                    <li>• Wide 180° viewing angle</li>
                    <li>• Color night vision</li>
                    <li>• No hub required</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Comparison Table */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Feature Comparison: Ring vs Nest vs Arlo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-40">Feature</TableHead>
                      <TableHead>Ring Pro 2</TableHead>
                      <TableHead>Nest Doorbell</TableHead>
                      <TableHead>Arlo Essential</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      ["Resolution", "1536p HD", "1080p HD", "1080p HD"],
                      ["Field of View", "150° × 90°", "145° diagonal", "180° diagonal"],
                      ["Installation", "Hardwired only", "Battery or wired", "Wireless/wired"],
                      ["Battery Life", "N/A", "2-6 months", "3-6 months"],
                      ["Monthly Cost", "$4-10/month", "$6-12/month", "$3-10/month"],
                      ["Night Vision", "Color (ambient)", "IR + HDR", "Full color"],
                      ["Smart Integration", "Alexa native", "Google native", "Both platforms"],
                      ["Price Range", "$249-279", "$179-229", "$149-199"]
                    ].map(([feature, ring, nest, arlo]) => (
                      <TableRow key={feature}>
                        <TableCell className="font-medium">{feature}</TableCell>
                        <TableCell>{ring}</TableCell>
                        <TableCell>{nest}</TableCell>
                        <TableCell>{arlo}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Installation Comparison */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Installation Requirements & Options</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-3 text-blue-600">Ring Pro 2</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Wiring:</strong> Hardwired only (16-24V transformer)</p>
                    <p><strong>Difficulty:</strong> Moderate (electrical knowledge helpful)</p>
                    <p><strong>Time:</strong> 30-60 minutes</p>
                    <p><strong>Apartment Use:</strong> Requires landlord permission</p>
                    <p><strong>Tools Needed:</strong> Screwdriver, voltage tester, drill</p>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-3 text-green-600">Nest Doorbell</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Wiring:</strong> Battery or hardwired options</p>
                    <p><strong>Difficulty:</strong> Easy (battery) / Moderate (wired)</p>
                    <p><strong>Time:</strong> 15 minutes (battery) / 45 minutes (wired)</p>
                    <p><strong>Apartment Use:</strong> Battery version ideal for renters</p>
                    <p><strong>Tools Needed:</strong> Screwdriver, level, drill (for mounting)</p>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-3 text-orange-600">Arlo Essential</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Wiring:</strong> 100% wireless or optional wired</p>
                    <p><strong>Difficulty:</strong> Very Easy</p>
                    <p><strong>Time:</strong> 10-20 minutes</p>
                    <p><strong>Apartment Use:</strong> Perfect for renters</p>
                    <p><strong>Tools Needed:</strong> Screwdriver, level</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Subscription Breakdown */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Subscription Plans & Ongoing Costs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Ring Protect Plans</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Basic ($4/month):</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• 180 days video history</li>
                        <li>• 1 doorbell/camera</li>
                        <li>• Basic motion alerts</li>
                      </ul>
                    </div>
                    <div>
                      <p><strong>Plus ($10/month):</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Unlimited devices</li>
                        <li>• Extended warranty</li>
                        <li>• Professional monitoring discount</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Nest Aware Plans</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Nest Aware ($6/month):</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• 30 days video history</li>
                        <li>• Intelligent alerts</li>
                        <li>• Familiar face detection</li>
                      </ul>
                    </div>
                    <div>
                      <p><strong>Nest Aware Plus ($12/month):</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• 60 days video history</li>
                        <li>• 10 days 24/7 recording</li>
                        <li>• Advanced features</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Arlo Secure Plans</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Secure ($3/month):</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• 30 days video history</li>
                        <li>• 1 camera</li>
                        <li>• Smart notifications</li>
                      </ul>
                    </div>
                    <div>
                      <p><strong>Secure Plus ($10/month):</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Unlimited cameras</li>
                        <li>• Advanced AI detection</li>
                        <li>• Emergency response</li>
                      </ul>
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
              <CardTitle>Related Smart Home Guides</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/smarthome/best-security-cameras-2025" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-semibold mb-2">Best Home Security Cameras 2025</h4>
                  <p className="text-sm text-gray-600">Indoor and outdoor security camera recommendations</p>
                  <ArrowRight className="h-4 w-4 mt-2 text-primary" />
                </Link>
                <Link to="/smarthome/apartment-smart-home-setup" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-semibold mb-2">Smart Home Setup for Renters</h4>
                  <p className="text-sm text-gray-600">Renter-friendly smart home devices and installation tips</p>
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

export default RingVsNestVsArlo2025;