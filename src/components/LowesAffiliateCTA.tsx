import React from 'react';
import { ExternalLink, MapPin, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LowesAffiliateCTAProps {
  productName: string;
  affiliateUrl: string;
  price?: string;
  className?: string;
}

const LowesAffiliateCTA: React.FC<LowesAffiliateCTAProps> = ({
  productName,
  affiliateUrl,
  price,
  className = ""
}) => {
  return (
    <div className={`bg-gradient-to-r from-blue-50 to-orange-50 border-2 border-orange-200 rounded-xl p-6 ${className}`}>
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Ready to Buy?
        </h3>
        
        {price && (
          <div className="text-2xl font-bold text-orange-600 mb-3">
            {price}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
          <Button 
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground min-h-[48px] flex-1 sm:flex-none"
          >
            <a 
              href={affiliateUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <ShoppingCart className="h-5 w-5" />
              Shop at Lowe's
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>

          <Button 
            variant="outline"
            size="lg"
            asChild
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 min-h-[48px] flex-1 sm:flex-none"
          >
            <a 
              href={affiliateUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <MapPin className="h-5 w-5" />
              Buy Online, Pick Up In-Store
            </a>
          </Button>
        </div>

        <div className="text-xs text-gray-500">
          <span className="font-medium">#LowesPartner #EarnsCommission</span> - We earn commission on qualifying purchases at no extra cost to you.
        </div>
      </div>
    </div>
  );
};

export default LowesAffiliateCTA;