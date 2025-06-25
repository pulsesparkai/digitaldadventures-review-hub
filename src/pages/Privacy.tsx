
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Privacy Policy (Placeholder)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                This Privacy Policy page is currently being developed. Please check back soon for our complete privacy policy and data handling practices.
              </p>
              <p className="text-sm text-gray-500">
                For any questions regarding your privacy and data, please contact us at hello@digitaldadventures.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
