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
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="aspect-video">
              <ProductImage
                src={product.image}
                alt={product.name}
                size="medium"
                className="rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <LowesAffiliateCTA
                productName={product.name}
                affiliateUrl={product.affiliateLink}
                price={product.price}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;