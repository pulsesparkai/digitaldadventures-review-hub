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
  const [imgSrc, setImgSrc] = useState(() => {
    // Optimize Lowe's images with size parameters
    if (src.includes('mobileimages.lowes.com') || src.includes('images.lowes.com')) {
      const sizeParams = {
        'small': '?size=pdhi',
        'medium': '?size=pdhz', 
        'large': '?size=pdp1600',
        'extra-large': '?size=pdp2000'
      };
      
      // Remove existing size param and add new one
      const baseUrl = src.split('?')[0];
      return `${baseUrl}${sizeParams[size] || '?size=pdhz'}`;
    }
    return src;
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    if (retryCount === 0 && (src.includes('mobileimages.lowes.com') || src.includes('images.lowes.com'))) {
      // First retry: try without size parameter for Lowe's images
      setRetryCount(1);
      const baseUrl = src.split('?')[0];
      setImgSrc(baseUrl);
    } else if (retryCount === 1 && (src.includes('mobileimages.lowes.com') || src.includes('images.lowes.com'))) {
      // Second retry: try different Lowe's CDN
      setRetryCount(2);
      const baseUrl = src.split('?')[0];
      const imageId = baseUrl.split('/').pop();
      setImgSrc(`https://images.lowes.com/product/converted/product/converted/${imageId}`);
    } else {
      // Final fallback to placeholder
      setHasError(true);
      setImgSrc('/placeholder.svg');
    }
    setIsLoading(false);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-lg" />
      )}
      
      <img
        src={imgSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-all duration-300 ease-in-out ${
          isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
        }`}
        loading={priority ? 'eager' : 'lazy'}
      />
      
      {/* Subtle attribution overlay */}
      {(src.includes('lowes.com') || imgSrc.includes('lowes.com')) && !hasError && (
        <div className="absolute bottom-2 right-2 text-xs text-white bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md opacity-75 hover:opacity-100 transition-opacity">
          Lowe's
        </div>
      )}
      
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default ProductImage;