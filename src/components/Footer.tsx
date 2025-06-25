
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, User, Shield, FileText } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/lovable-uploads/e490cc97-3f4e-4f7f-8a9a-ad4eb457a78b.png" 
                alt="DigitalDadVentures logo featuring a family icon and modern text – trusted product reviews for families and parents"
                title="Logo of DigitalDadVentures – Honest Reviews for Smart Families"
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Honest reviews and recommendations for smart families. 
              Research-backed insights with transparent AI disclosure.
            </p>
            <div className="text-sm text-gray-500">
              © {currentYear} DigitalDadVentures. All rights reserved.
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors">Product Reviews</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/newsletter" className="hover:text-white transition-colors">Newsletter</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Work With Us */}
          <div>
            <h3 className="font-semibold mb-4">Partnership</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/work-with-us" className="hover:text-white transition-colors flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Work With Us
                </Link>
              </li>
              <li>
                <Link to="/submit-product" className="hover:text-white transition-colors">
                  Submit a Product
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h3 className="font-semibold mb-4">Legal & Policies</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/terms" className="hover:text-white transition-colors flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li><Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/ai-content-policy" className="hover:text-white transition-colors">AI Content Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Global Affiliate Disclaimer */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-sm text-gray-400">
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
