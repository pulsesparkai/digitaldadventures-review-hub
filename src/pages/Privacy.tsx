
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Eye, Database, Globe, Calendar, Mail } from 'lucide-react';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - DigitalDadVentures</title>
        <meta name="description" content="Privacy policy for DigitalDadVentures detailing how we collect, use, and protect your personal information and data." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                Last Updated: December 15, 2024
              </div>
            </div>

            {/* Privacy Commitment */}
            <Card className="mb-8 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Our Privacy Commitment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800">
                  At DigitalDadVentures, we respect your privacy and are committed to protecting your personal information. 
                  This policy explains how we collect, use, and safeguard your data in compliance with GDPR, CCPA, and other privacy laws.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2" />
                  1. Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Information You Provide Directly</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Newsletter Subscriptions:</strong> Email address, name (optional)</li>
                    <li><strong>Contact Forms:</strong> Name, email, message content</li>
                    <li><strong>Comments:</strong> Name, email, comment text (if commenting system implemented)</li>
                    <li><strong>Survey Responses:</strong> Any information you choose to share in surveys or feedback forms</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Information Collected Automatically</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Website Analytics:</strong> Page views, session duration, bounce rate, referrer sites</li>
                    <li><strong>Device Information:</strong> Browser type, operating system, screen resolution</li>
                    <li><strong>Location Data:</strong> General geographic location based on IP address (country/region level)</li>
                    <li><strong>Cookie Data:</strong> Preferences, session information, tracking data (see Cookie Policy)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Affiliate and E-commerce Data</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Click Tracking:</strong> Which affiliate links you click on</li>
                    <li><strong>Purchase Information:</strong> Whether a purchase was made (through affiliate partners)</li>
                    <li><strong>Referral Data:</strong> How you arrived at our site and which content led to clicks</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="h-5 w-5 mr-2" />
                  2. How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Website Operations</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Provide and improve our website functionality</li>
                    <li>Respond to your inquiries and support requests</li>
                    <li>Send newsletter updates (with your consent)</li>
                    <li>Analyze website performance and user behavior</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Content Personalization</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Recommend relevant products and content</li>
                    <li>Customize your browsing experience</li>
                    <li>Understand which content is most valuable to our audience</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Affiliate Program Operations</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Track affiliate link clicks and conversions</li>
                    <li>Receive commission payments from retail partners</li>
                    <li>Analyze which products and content drive engagement</li>
                    <li>Comply with affiliate program requirements</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Legal and Business Purposes</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Comply with legal obligations and regulations</li>
                    <li>Protect our rights and prevent fraud</li>
                    <li>Enforce our terms of service</li>
                    <li>Business analytics and reporting</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  3. How We Share Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Third-Party Services</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Analytics Services:</strong> Google Analytics, Supabase Analytics</li>
                    <li><strong>Email Marketing:</strong> Newsletter service providers (if applicable)</li>
                    <li><strong>Hosting Services:</strong> Lovable.dev, cloud infrastructure providers</li>
                    <li><strong>Affiliate Networks:</strong> Amazon Associates, retail partner programs</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">We Do NOT Sell Personal Data</h4>
                  <p className="text-gray-700">
                    We do not sell, rent, or trade your personal information to third parties for their marketing purposes. 
                    Any data sharing is limited to the services necessary to operate our website and affiliate programs.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Legal Requirements</h4>
                  <p className="text-gray-700">
                    We may share information if required by law, court order, or government regulation, 
                    or to protect our rights, property, or safety.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>4. Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We use cookies and similar tracking technologies to improve your experience. 
                  For detailed information about our cookie usage, please see our{' '}
                  <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Cookie Categories</h4>
                  <ul className="text-sm space-y-1">
                    <li><strong>Essential:</strong> Required for website functionality</li>
                    <li><strong>Analytics:</strong> Help us understand site usage</li>
                    <li><strong>Marketing:</strong> Track affiliate conversions and ad performance</li>
                    <li><strong>Functional:</strong> Remember your preferences and settings</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>5. Your Privacy Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">GDPR Rights (EU Residents)</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Right to access your personal data</li>
                    <li>Right to correct inaccurate information</li>
                    <li>Right to delete your data ("right to be forgotten")</li>
                    <li>Right to restrict processing</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">CCPA Rights (California Residents)</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Right to know what personal information is collected</li>
                    <li>Right to know if personal information is sold or disclosed</li>
                    <li>Right to say no to the sale of personal information</li>
                    <li>Right to access your personal information</li>
                    <li>Right to equal service and price</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">How to Exercise Your Rights</h4>
                  <p className="text-gray-700 mb-2">
                    To exercise any of these rights, please contact us using the information below. 
                    We will respond to your request within 30 days.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>6. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure hosting infrastructure</li>
                  <li>Regular security updates and monitoring</li>
                  <li>Limited access to personal data</li>
                  <li>Data minimization practices</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  While we strive to protect your information, no method of transmission over the internet 
                  is 100% secure. We cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>7. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We retain personal information only as long as necessary for the purposes outlined in this policy:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Analytics Data:</strong> Up to 26 months (Google Analytics default)</li>
                  <li><strong>Email Subscribers:</strong> Until you unsubscribe or request deletion</li>
                  <li><strong>Contact Form Data:</strong> Up to 2 years for customer service purposes</li>
                  <li><strong>Cookie Consent:</strong> Until you withdraw consent or clear browser data</li>
                </ul>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>8. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our website is not directed to children under 13. We do not knowingly collect personal 
                  information from children under 13. If we become aware that we have collected such information, 
                  we will take steps to delete it promptly.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>9. Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any material changes 
                  by posting the new policy on this page with an updated "Last Modified" date. 
                  Your continued use of our website constitutes acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-900">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Us About Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  If you have questions about this privacy policy or want to exercise your privacy rights, please contact us:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p><strong>Privacy Inquiries:</strong> privacy@digitaldadventures.com</p>
                  <p><strong>General Contact:</strong> <a href="/contact" className="text-primary hover:underline">Contact Form</a></p>
                  <p><strong>Cookie Management:</strong> Use our cookie banner or browser settings</p>
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

export default Privacy;
