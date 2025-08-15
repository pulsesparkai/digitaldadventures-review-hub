
import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const ProductReview = () => {
  const { slug } = useParams();
  
  const products: Record<string, any> = {};
  
  const product = products[slug || ''];

  if (!product) {
    return <NotFound />;
  }

  // This will never be reached since products is empty
  return null;
};

export default ProductReview;
