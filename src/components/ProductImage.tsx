import React, { useState } from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  size?: 'small' | 'medium' | 'large' | 'extra-large';
}

const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  className = "",
  priority = false,
  size = 'medium'
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc('/placeholder.svg');
    }
    setIsLoading(false);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
      )}
      
      <img
        src={imgSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  );
};

export default ProductImage;