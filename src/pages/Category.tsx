
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Category = () => {
  const { category } = useParams();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 capitalize">
            {category?.replace('-', ' ')} Reviews
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best {category?.replace('-', ' ')} products through our honest reviews and analysis.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Category Page (In Development)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              This category page is currently being built. Soon you'll find all our {category} reviews, 
              comparisons, and buying guides here.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Category;
