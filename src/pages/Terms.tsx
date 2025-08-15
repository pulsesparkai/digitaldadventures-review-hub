
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, ExternalLink, Calendar } from 'lucide-react';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - DigitalDadVentures</title>
        <meta name="description" content="Terms of service for DigitalDadVentures including affiliate disclosures, user agreements, and liability limitations." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                Last Updated: December 15, 2024
              </div>
            </div>

            {/* Important Notice */}
            <Card className="mb-8 border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-900 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Important Affiliate Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-800">
                  <strong>FTC Compliance Notice:</strong> DigitalDadVentures is a participant in affiliate advertising programs. 
                  We earn commissions when you purchase products through our links at no additional cost to you. 
                  This helps support our site and allows us to continue providing product reviews and recommendations.
                </p>
              </CardContent>
            </Card>

            {/* Acceptance of Terms */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  By accessing and using DigitalDadVentures ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p>
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            {/* Affiliate Relationships */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>2. Affiliate Relationships & Compensation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">Affiliate Programs</h4>
                <p>
                  We participate in various affiliate advertising programs including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Amazon Associates Program</li>
                  <li>Lowe's Affiliate Program</li>
                  <li>Home Depot Affiliate Program</li>
                  <li>Other retail affiliate programs</li>
                </ul>
                
                <h4 className="font-semibold">Compensation Disclosure</h4>
                <p>
                  When you click on affiliate links and make purchases, we may receive a commission. This does not:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Increase the price you pay for products</li>
                  <li>Influence our honest opinions and reviews</li>
                  <li>Affect our editorial independence</li>
                </ul>
                
                <h4 className="font-semibold">Price and Availability</h4>
                <p>
                  Prices and availability of products are subject to change without notice. We make every effort to display accurate pricing but cannot guarantee real-time accuracy.
                </p>
              </CardContent>
            </Card>

            {/* Use of Website */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>3. Use of Website</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">Permitted Use</h4>
                <p>You may use our website for:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Reading product reviews and recommendations</li>
                  <li>Research for personal purchase decisions</li>
                  <li>Sharing content via social media</li>
                  <li>Subscribing to our newsletter</li>
                </ul>
                
                <h4 className="font-semibold">Prohibited Uses</h4>
                <p>You may not:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Copy, reproduce, or distribute our content without permission</li>
                  <li>Use automated systems to scrape our website</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Post spam or malicious content</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </CardContent>
            </Card>

            {/* Content and Reviews */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>4. Content and Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">Editorial Independence</h4>
                <p>
                  Our reviews and recommendations are based on research, analysis, and where applicable, hands-on testing. 
                  Affiliate relationships do not influence our editorial content or ratings.
                </p>
                
                <h4 className="font-semibold">AI-Generated Content</h4>
                <p>
                  Some content may be generated or assisted by artificial intelligence. All AI-generated content is 
                  reviewed and approved by our editorial team. AI content is clearly labeled as per our AI Content Policy.
                </p>
                
                <h4 className="font-semibold">Accuracy Disclaimer</h4>
                <p>
                  While we strive for accuracy, we cannot guarantee that all information is current, complete, or error-free. 
                  Always verify product details with the manufacturer or retailer before purchasing.
                </p>
              </CardContent>
            </Card>

            {/* User Comments and Submissions */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>5. User Comments and Submissions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  By submitting comments, reviews, or other content to our website, you grant us a non-exclusive, 
                  royalty-free, perpetual license to use, modify, and display such content.
                </p>
                <p>You are responsible for ensuring your submissions do not:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Contain false or misleading information</li>
                  <li>Include spam, advertising, or promotional content</li>
                  <li>Contain offensive or inappropriate material</li>
                </ul>
              </CardContent>
            </Card>

            {/* Disclaimers and Liability */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>6. Disclaimers and Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">Website Disclaimer</h4>
                <p>
                  This website is provided "as is" without any representations or warranties. We disclaim all warranties, 
                  including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
                </p>
                
                <h4 className="font-semibold">Product Recommendations</h4>
                <p>
                  Our recommendations are opinions based on research and analysis. Individual results may vary. 
                  We are not responsible for your purchase decisions or product performance.
                </p>
                
                <h4 className="font-semibold">Limitation of Liability</h4>
                <p>
                  In no event shall DigitalDadVentures be liable for any direct, indirect, incidental, special, 
                  or consequential damages arising from your use of this website or reliance on our content.
                </p>
              </CardContent>
            </Card>

            {/* Privacy and Data */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>7. Privacy and Data Collection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Our data collection and usage practices are detailed in our Privacy Policy. By using our website, 
                  you consent to data collection as described in our Privacy Policy.
                </p>
                <p>We use cookies and tracking technologies to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Improve website functionality</li>
                  <li>Analyze website traffic and usage</li>
                  <li>Track affiliate conversions</li>
                  <li>Provide personalized content</li>
                </ul>
              </CardContent>
            </Card>

            {/* Third-Party Links */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>8. Third-Party Links and Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Our website contains links to third-party websites and services. We are not responsible for 
                  the content, privacy practices, or terms of service of these external sites.
                </p>
                <p>
                  When you click affiliate links, you will be directed to retailer websites that have their own 
                  terms of service and privacy policies.
                </p>
              </CardContent>
            </Card>

            {/* Modifications */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>9. Modifications to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We reserve the right to modify these terms at any time. Changes will be posted on this page 
                  with an updated "Last Modified" date. Continued use of the website constitutes acceptance of modified terms.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>10. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> legal@digitaldadventures.com</p>
                  <p><strong>Contact Form:</strong> <a href="/contact" className="text-primary hover:underline">Contact Us</a></p>
                </div>
              </CardContent>
            </Card>

            {/* Legal Information */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Legal Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  These terms are governed by the laws of the United States. Any disputes will be resolved 
                  in the appropriate courts. If any provision of these terms is found unenforceable, 
                  the remainder shall remain in full force and effect.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Terms;
