
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Cookie Policy (Placeholder)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                This Cookie Policy page is currently being developed. Please check back soon for our complete cookie usage policy.
              </p>
              <p className="text-sm text-gray-500">
                For any questions regarding cookies and tracking, please contact us at hello@digitaldadventures.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
