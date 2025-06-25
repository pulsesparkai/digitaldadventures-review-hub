
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Handshake, TrendingUp, Users, Zap, Mail, Package } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WorkWithUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-purple-100 rounded-full">
              <Handshake className="h-12 w-12 text-purple-600" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Work With Us</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Partner with DigitalDadVentures to reach engaged families who trust our honest, 
            transparent reviews. We offer multiple collaboration opportunities for brands, 
            retailers, and content creators.
          </p>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Join our growing community of families and parents seeking smarter product recommendations
          </Badge>
        </div>

        {/* Partnership Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Product Reviews</CardTitle>
                <CardDescription>
                  Get your product reviewed by our expert team with transparent methodology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Hands-on testing when possible</li>
                  <li>• AI-powered market analysis</li>
                  <li>• Honest, unbiased evaluation</li>
                  <li>• SEO-optimized content</li>
                  <li>• Social media promotion</li>
                </ul>
                <div className="text-center">
                  <Badge variant="outline">Starting at $500</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Affiliate Partnerships</CardTitle>
                <CardDescription>
                  Long-term partnerships with performance-based compensation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Featured placement opportunities</li>
                  <li>• Custom tracking and analytics</li>
                  <li>• Regular content updates</li>
                  <li>• Newsletter mentions</li>
                  <li>• Category page features</li>
                </ul>
                <div className="text-center">
                  <Badge variant="outline">Commission-Based</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Sponsored Content</CardTitle>
                <CardDescription>
                  Native advertising that provides value to our audience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Clearly labeled sponsored posts</li>
                  <li>• Editorial oversight maintained</li>
                  <li>• Multi-platform distribution</li>
                  <li>• Performance reporting</li>
                  <li>• Brand alignment guaranteed</li>
                </ul>
                <div className="text-center">
                  <Badge variant="outline">Custom Pricing</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why Partner With DigitalDadVentures?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Users className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Engaged Family Audience</h3>
                      <p className="text-gray-600 text-sm">
                        Our readers are active parents and families looking for honest, AI-assisted 
                        and expert-backed recommendations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">SEO & Performance Focus</h3>
                      <p className="text-gray-600 text-sm">
                        Every piece is crafted for top performance in Google, Bing, and AI-driven 
                        search engines—maximizing your brand's visibility and reach.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Zap className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Transparent AI Integration</h3>
                      <p className="text-gray-600 text-sm">
                        We combine human expertise with advanced AI analysis, always clearly disclosed 
                        to maintain your brand's trust and ours.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Handshake className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Editorial Independence</h3>
                      <p className="text-gray-600 text-sm">
                        All reviews and recommendations are based on research, trend analysis, and 
                        data-driven insights—no paid placements or guarantees.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Reach */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Reach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              DigitalDadVentures is a fast-growing platform—real engagement stats are always 
              available to brand partners upon request.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">Growing</div>
                <div className="text-sm text-gray-600">Community</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">Engaged</div>
                <div className="text-sm text-gray-600">Audience</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">Family</div>
                <div className="text-sm text-gray-600">Focused</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">High</div>
                <div className="text-sm text-gray-600">Quality Content</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              All current engagement data is available to partners on request.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Partnership Process</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
                  <p className="text-gray-600">
                    We discuss your goals, products, and how we can best serve your brand while maintaining our editorial standards.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Content Planning</h3>
                  <p className="text-gray-600">
                    We create a content strategy that aligns with your marketing goals and our audience's interests.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Content Creation</h3>
                  <p className="text-gray-600">
                    Our team creates high-quality, SEO-optimized content that provides real value to our readers.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Performance Tracking</h3>
                  <p className="text-gray-600">
                    We provide detailed analytics and performance reports to measure the success of our partnership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-orange-50 to-blue-50 border-orange-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h3>
              <p className="text-gray-600 mb-6">
                Let's discuss how we can help your brand reach engaged families through honest, 
                transparent content that drives results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-orange-600 hover:bg-orange-700">
                  <Link to="/contact">
                    <Mail className="h-4 w-4 mr-2" />
                    Get in Touch
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/submit-product">
                    <Package className="h-4 w-4 mr-2" />
                    Submit a Product
                  </Link>
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Response time: 24-48 hours | Initial consultation: Free
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default WorkWithUs;
