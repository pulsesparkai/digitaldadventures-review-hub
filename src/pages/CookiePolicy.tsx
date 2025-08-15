
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cookie, Settings, Shield, Calendar, Info, ExternalLink } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - DigitalDadVentures</title>
        <meta name="description" content="Learn about how DigitalDadVentures uses cookies and tracking technologies to improve your browsing experience." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  <Cookie className="h-8 w-8 text-orange-600" />
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                Last Updated: December 15, 2024
              </div>
            </div>

            {/* What Are Cookies */}
            <Card className="mb-8 border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-900 flex items-center">
                  <Info className="h-5 w-5 mr-2" />
                  What Are Cookies?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-800">
                  Cookies are small text files stored on your device when you visit websites. They help us remember your 
                  preferences, understand how you use our site, and provide you with a better browsing experience.
                </p>
              </CardContent>
            </Card>

            {/* Cookie Categories */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>1. Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 border rounded-lg bg-green-50 border-green-200">
                    <div className="flex items-center mb-3">
                      <Badge className="bg-green-600">Essential</Badge>
                      <span className="ml-2 text-sm text-gray-600">Always Active</span>
                    </div>
                    <h4 className="font-semibold mb-2">Essential Cookies</h4>
                    <p className="text-sm text-gray-700">
                      Required for basic website functionality. These cannot be disabled as they are necessary for the site to work properly.
                    </p>
                    <ul className="text-xs mt-2 space-y-1">
                      <li>• Session management</li>
                      <li>• Security features</li>
                      <li>• Cookie consent preferences</li>
                    </ul>
                  </div>

                  <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
                    <div className="flex items-center mb-3">
                      <Badge variant="outline" className="border-blue-600 text-blue-600">Analytics</Badge>
                      <span className="ml-2 text-sm text-gray-600">Can be disabled</span>
                    </div>
                    <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                    <p className="text-sm text-gray-700">
                      Help us understand how visitors interact with our website by collecting anonymous information.
                    </p>
                    <ul className="text-xs mt-2 space-y-1">
                      <li>• Google Analytics</li>
                      <li>• Page view tracking</li>
                      <li>• User behavior analysis</li>
                    </ul>
                  </div>

                  <div className="p-4 border rounded-lg bg-purple-50 border-purple-200">
                    <div className="flex items-center mb-3">
                      <Badge variant="outline" className="border-purple-600 text-purple-600">Marketing</Badge>
                      <span className="ml-2 text-sm text-gray-600">Can be disabled</span>
                    </div>
                    <h4 className="font-semibold mb-2">Marketing Cookies</h4>
                    <p className="text-sm text-gray-700">
                      Track affiliate link clicks and conversions to help us earn commissions from retail partners.
                    </p>
                    <ul className="text-xs mt-2 space-y-1">
                      <li>• Affiliate tracking</li>
                      <li>• Conversion measurement</li>
                      <li>• Retargeting pixels</li>
                    </ul>
                  </div>

                  <div className="p-4 border rounded-lg bg-amber-50 border-amber-200">
                    <div className="flex items-center mb-3">
                      <Badge variant="outline" className="border-amber-600 text-amber-600">Functional</Badge>
                      <span className="ml-2 text-sm text-gray-600">Can be disabled</span>
                    </div>
                    <h4 className="font-semibold mb-2">Functional Cookies</h4>
                    <p className="text-sm text-gray-700">
                      Remember your preferences and provide enhanced functionality for a personalized experience.
                    </p>
                    <ul className="text-xs mt-2 space-y-1">
                      <li>• Dark mode preferences</li>
                      <li>• Language settings</li>
                      <li>• Personalized content</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specific Cookies */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>2. Specific Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Google Analytics</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm mb-2">
                      We use Google Analytics to understand how our website is used and to improve our content.
                    </p>
                    <ul className="text-xs space-y-1">
                      <li><strong>Cookies:</strong> _ga, _ga_*, _gid</li>
                      <li><strong>Purpose:</strong> Visitor counting, session tracking, behavior analysis</li>
                      <li><strong>Retention:</strong> Up to 26 months</li>
                      <li><strong>Data shared:</strong> Anonymous usage statistics with Google</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Affiliate Tracking</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm mb-2">
                      We track affiliate link clicks to receive commissions from retail partners when you make purchases.
                    </p>
                    <ul className="text-xs space-y-1">
                      <li><strong>Partners:</strong> Amazon Associates, Lowe's, Home Depot</li>
                      <li><strong>Purpose:</strong> Commission tracking, conversion measurement</li>
                      <li><strong>Data collected:</strong> Click events, referral information</li>
                      <li><strong>No personal identification:</strong> We cannot see what you purchase</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Cookie Consent Management</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm mb-2">
                      We store your cookie preferences to remember your choices and comply with privacy laws.
                    </p>
                    <ul className="text-xs space-y-1">
                      <li><strong>Storage:</strong> Local browser storage and our database</li>
                      <li><strong>Purpose:</strong> Remember your consent choices</li>
                      <li><strong>Retention:</strong> Until you change preferences or clear browser data</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Managing Cookies */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  3. Managing Your Cookie Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Cookie Banner</h4>
                  <p className="text-gray-700 mb-2">
                    When you first visit our site, you'll see a cookie consent banner where you can:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Accept all cookies</li>
                    <li>Decline non-essential cookies</li>
                    <li>Customize your preferences by category</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Browser Settings</h4>
                  <p className="text-gray-700 mb-2">
                    You can also manage cookies through your browser settings:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</p>
                      <p><strong>Firefox:</strong> Settings → Privacy & Security → Cookies</p>
                    </div>
                    <div>
                      <p><strong>Safari:</strong> Preferences → Privacy → Cookies</p>
                      <p><strong>Edge:</strong> Settings → Cookies and Site Permissions</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Opt-Out Links</h4>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <ul className="text-sm space-y-2">
                      <li>
                        <strong>Google Analytics:</strong>{' '}
                        <a 
                          href="https://tools.google.com/dlpage/gaoptout" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline inline-flex items-center"
                        >
                          Browser Add-on <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </li>
                      <li>
                        <strong>Network Advertising Initiative:</strong>{' '}
                        <a 
                          href="https://optout.networkadvertising.org/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline inline-flex items-center"
                        >
                          Opt Out <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact of Disabling */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>4. Impact of Disabling Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-amber-800">What happens when you disable cookies:</h4>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li><strong>Essential cookies disabled:</strong> Website may not function properly</li>
                    <li><strong>Analytics cookies disabled:</strong> We can't improve our content based on usage data</li>
                    <li><strong>Marketing cookies disabled:</strong> We can't track affiliate commissions (but links still work)</li>
                    <li><strong>Functional cookies disabled:</strong> Your preferences won't be remembered</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Cookies */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>5. Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Some cookies on our site are set by third-party services. We don't control these cookies, 
                  and they are subject to the privacy policies of their respective providers:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-3 border rounded-lg">
                    <h5 className="font-semibold">Google Analytics</h5>
                    <p className="text-sm text-gray-600">Website analytics and performance tracking</p>
                    <a 
                      href="https://policies.google.com/privacy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:underline inline-flex items-center mt-1"
                    >
                      Privacy Policy <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h5 className="font-semibold">Affiliate Partners</h5>
                    <p className="text-sm text-gray-600">Commission tracking for Amazon, Lowe's, etc.</p>
                    <p className="text-xs text-gray-500 mt-1">Various privacy policies apply</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Updates to Policy */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>6. Updates to This Cookie Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices, 
                  technology, or legal requirements. We will post any updates on this page with a revised "Last Updated" date.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-900">
                  <Cookie className="h-5 w-5 mr-2" />
                  Questions About Cookies?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  If you have questions about our cookie usage or this policy, please contact us:
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> cookies@digitaldadventures.com</p>
                  <p><strong>Contact Form:</strong> <Link to="/contact" className="text-primary hover:underline">Contact Us</Link></p>
                  <p><strong>Privacy Policy:</strong> <Link to="/privacy" className="text-primary hover:underline">View Privacy Policy</Link></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default CookiePolicy;
