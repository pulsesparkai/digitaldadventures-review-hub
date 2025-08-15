import React from 'react';
import ProductImage from './ProductImage';
import LowesAffiliateCTA from './LowesAffiliateCTA';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Product {
  name: string;
  image: string;
  affiliateLink: string;
  price?: string;
  description: string;
}

interface ProductShowcaseProps {
  products: Product[];
  title: string;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ products, title }) => {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-12">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden bg-gray-100">
                <ProductImage
                  src={product.image}
                  alt={product.name}
                  size="medium"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl line-clamp-2">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-3">{product.description}</p>
                <LowesAffiliateCTA
                  productName={product.name}
                  affiliateUrl={product.affiliateLink}
                  price={product.price}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;