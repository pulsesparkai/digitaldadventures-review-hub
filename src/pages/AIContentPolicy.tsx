
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Info, Bot, User } from 'lucide-react';

const AIContentPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <Bot className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">AI Content Policy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparency is at the heart of everything we do. Here's how we use AI technology 
              and ensure you always know when content is AI-generated.
            </p>
          </div>

          {/* AI Usage Overview */}
          <Card className="mb-8 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center">
                <Info className="h-5 w-5 mr-2" />
                Our AI Commitment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800">
                We believe AI can enhance our ability to provide comprehensive product analysis 
                while maintaining the highest standards of transparency and editorial integrity.
              </p>
            </CardContent>
          </Card>

          {/* How We Use AI */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>How We Use AI Technology</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Bot className="h-5 w-5 mr-2 text-blue-600" />
                  AI-Generated Content
                </h3>
                <p className="text-gray-700 mb-3">
                  Some of our product reviews and analyses are generated using advanced AI systems that:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Analyze thousands of customer reviews and ratings</li>
                  <li>Compare product specifications and features</li>
                  <li>Research market trends and pricing data</li>
                  <li>Generate comprehensive summaries and insights</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <User className="h-5 w-5 mr-2 text-green-600" />
                  Human-Written Content
                </h3>
                <p className="text-gray-700 mb-3">
                  Our hands-on reviews and personal experiences are written by our human editorial team:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Real-world testing in family environments</li>
                  <li>Personal opinions and experiences</li>
                  <li>Editorial commentary and analysis</li>
                  <li>Trend discussions and industry insights</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Content Labeling */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>How We Label Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Badge variant="outline" className="text-xs">
                    <Info className="h-3 w-3 mr-1" />
                    AI Analysis
                  </Badge>
                  <span className="text-sm text-gray-700">
                    This badge indicates content that is fully or partially AI-generated
                  </span>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <Badge variant="secondary">Hands-On Review</Badge>
                  <span className="text-sm text-gray-700">
                    This indicates content based on real-world testing and human experience
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quality Standards */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Our Quality Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Human Oversight</h4>
                  <p className="text-gray-700 text-sm">
                    All AI-generated content is reviewed, edited, and approved by our human editorial team 
                    before publication.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Accuracy Verification</h4>
                  <p className="text-gray-700 text-sm">
                    Product specifications, pricing, and availability are verified through multiple sources 
                    and regularly updated.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Editorial Independence</h4>
                  <p className="text-gray-700 text-sm">
                    Our AI systems are designed to maintain editorial independence and provide balanced 
                    analysis regardless of affiliate relationships.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Continuous Improvement */}
          <Card>
            <CardHeader>
              <CardTitle>Continuous Improvement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We're constantly refining our AI processes to provide more accurate, helpful, and 
                transparent content. If you have feedback about our AI-generated content, 
                please don't hesitate to reach out.
              </p>
              <div className="text-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-orange-600 text-white hover:bg-orange-700 h-10 px-4 py-2"
                >
                  Contact Us About AI Content
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AIContentPolicy;
