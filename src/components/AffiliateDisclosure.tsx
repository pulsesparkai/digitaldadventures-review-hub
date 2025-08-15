import React from 'react';
import { AlertCircle } from 'lucide-react';

const AffiliateDisclosure: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 ${className}`}>
      <div className="flex items-start space-x-3">
        <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-orange-800 mb-1">Partner Disclosure</h4>
          <p className="text-sm text-orange-700 leading-relaxed">
            As a Lowe's Partner, we earn commission on qualifying purchases made through our links at no additional cost to you. 
            We only recommend products we believe offer value to families. <span className="font-medium">#LowesPartner</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AffiliateDisclosure;