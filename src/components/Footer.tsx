import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, User, Shield, FileText } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/lovable-uploads/e490cc97-3f4e-4f7f-8a9a-ad4eb457a78b.png" 
                alt="DigitalDadVentures logo featuring a family icon and modern text – trusted product reviews for families and parents"
                title="Logo of DigitalDadVentures – Honest Reviews for Smart Families"
                className="h-16 sm:h-20 md:h-24 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Honest reviews and recommendations for smart families. 
              Research-backed insights with transparent AI disclosure.
            </p>
            <div className="text-xs sm:text-sm text-gray-500">
              © {currentYear} DigitalDadVentures. All rights reserved.
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Navigation</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><Link to="/" className="hover:text-white transition-colors block py-1 min-h-[32px] flex items-center">Home</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors block py-1 min-h-[32px] flex items-center">Product Reviews</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors block py-1 min-h-[32px] flex items-center">Blog</Link></li>
              <li><Link to="/newsletter" className="hover:text-white transition-colors block py-1 min-h-[32px] flex items-center">Newsletter</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors block py-1 min-h-[32px] flex items-center">About</Link></li>
            </ul>
          </div>

          {/* Work With Us */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Partnership</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <Link to="/work-with-us" className="hover:text-white transition-colors flex items-center py-1 min-h-[32px]">
                  <User className="h-4 w-4 mr-2" />
                  Work With Us
                </Link>
              </li>
              <li>
                <Link to="/submit-product" className="hover:text-white transition-colors block py-1 min-h-[32px] flex items-center">
                  Submit a Product
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center py-1 min-h-[32px]">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal & Policies</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <Link to="/terms" className="hover:text-white transition-colors flex items-center py-1 min-h-[32px]">
                  <FileText className="h-4 w-4 mr-2" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors flex items-center py-1 min-h-[32px]">
                  <Shield className="h-4 w-4 mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li><Link to="/cookie-policy" className="hover:text-white transition-colors block py-1 min-h-[32px] flex items-center">Cookie Policy</Link></li>
              <li><Link to="/ai-content-policy" className="hover:text-white transition-colors block py-1 min-h-[32px] flex items-center">AI Content Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Global Affiliate Disclaimer */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
            <p className="text-xs sm:text-sm text-gray-400">
              <strong className="text-white">Affiliate Disclosure:</strong> This website contains affiliate links. 
              We may earn a commission when you make a purchase through these links at no additional cost to you. 
              Our recommendations are based on research, hands-on testing, and/or AI analysis, and we only promote 
              products we believe offer value to our readers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
