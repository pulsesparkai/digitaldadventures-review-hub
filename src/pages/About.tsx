
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Shield, Target, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About DigitalDadVentures</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            We're on a mission to help families make smarter purchasing decisions through honest, 
            transparent reviews and recommendations. Whether it's the latest kitchen gadget, 
            fitness equipment, or family tech, we've got you covered.
          </p>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Founded in 2024 • Family-First Reviews
          </Badge>
        </div>

        {/* Our Approach */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Hands-On Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  When possible, we put products through real-world testing in family environments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>AI-Powered Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Advanced AI helps us analyze market data, specifications, and user feedback at scale.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Full Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Clear disclosure of AI-generated content, affiliate relationships, and editorial standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Family-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Every recommendation considers real family needs, budgets, and lifestyles.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Editorial Standards */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Editorial Standards</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Independence</h3>
                    <p className="text-gray-700">
                      Our reviews and recommendations are editorially independent. While we may earn 
                      affiliate commissions, this never influences our honest assessment of products.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                    <p className="text-gray-700">
                      We clearly disclose when content is AI-generated, when we have affiliate relationships, 
                      and our methodology for testing and analysis. No hidden agendas.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Accuracy</h3>
                    <p className="text-gray-700">
                      All product information, pricing, and specifications are verified and regularly updated. 
                      We correct errors promptly when brought to our attention.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
                    <p className="text-gray-700">
                      While we started as "DigitalDadVentures," our content serves all parents, families, 
                      and smart consumers regardless of gender, family structure, or background.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* AI Content Policy */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">AI Content Policy</h2>
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <p className="text-blue-900">
                    <strong>We believe in being upfront about our use of AI technology.</strong> Here's how we use it:
                  </p>
                  
                  <ul className="space-y-2 text-blue-800">
                    <li>• <strong>Market Analysis:</strong> AI helps us analyze thousands of reviews, specifications, and market trends</li>
                    <li>• <strong>Content Generation:</strong> Some reviews are AI-generated based on comprehensive data analysis</li>
                    <li>• <strong>Clear Labeling:</strong> All AI-generated content is clearly marked with disclosure badges</li>
                    <li>• <strong>Human Oversight:</strong> All AI content is reviewed and edited by our human editorial team</li>
                    <li>• <strong>Continuous Improvement:</strong> We're constantly refining our AI processes for better accuracy</li>
                  </ul>
                  
                  <p className="text-blue-900">
                    Our goal is to combine the efficiency of AI with human insight to provide you with 
                    the most comprehensive and helpful product recommendations possible.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Questions About Our Process?</CardTitle>
              <CardDescription>
                We're always happy to discuss our editorial standards, AI usage, or anything else about how we operate.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-orange-600 text-white hover:bg-orange-700 h-10 px-4 py-2"
                >
                  Contact Us
                </a>
                <a 
                  href="/work-with-us" 
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  Work With Us
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
