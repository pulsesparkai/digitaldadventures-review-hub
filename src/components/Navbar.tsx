
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Facebook, Youtube, Music } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const categories = [
    'Kitchen', 'Fitness', 'Desk Gear', 'Outdoor', 'Tools', 'Family Tech'
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Product Reviews', path: '/reviews' },
    { name: 'Blog', path: '/blog' },
    { name: 'Newsletter', path: '/newsletter' },
    { name: 'About', path: '/about' },
    { name: 'Work With Us', path: '/work-with-us' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24 md:h-28 lg:h-32">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/e490cc97-3f4e-4f7f-8a9a-ad4eb457a78b.png" 
              alt="DigitalDadVentures logo featuring a family icon and modern text – trusted product reviews for families and parents"
              title="Logo of DigitalDadVentures – Honest Reviews for Smart Families"
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
            />
          </Link>

          {/* Social Media Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://m.facebook.com/61578172692503/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-600 transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="https://www.tiktok.com/@digitaldadventures?_t=ZT-8yuX4WRdlId&_r=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-600 transition-colors"
              aria-label="Follow us on TikTok"
            >
              <Music className="h-5 w-5" />
            </a>
            <a 
              href="https://youtube.com/@digitaldadventures?si=uevcLxue4D6UX6rO" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-600 transition-colors"
              aria-label="Subscribe to our YouTube channel"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`hover:text-orange-600 transition-colors ${
                  location.pathname === item.path ? 'text-orange-600' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors">
                <span>Categories</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white border shadow-lg z-50">
                {categories.map((category) => (
                  <DropdownMenuItem key={category} asChild>
                    <Link 
                      to={`/category/${category.toLowerCase().replace(' ', '-')}`}
                      className="w-full px-4 py-2 hover:bg-gray-50 cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      {category}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90"
            >
              <Link to="/submit-product">Submit a Product</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`hover:text-orange-600 transition-colors min-h-[44px] flex items-center px-2 py-3 rounded ${
                    location.pathname === item.path ? 'text-orange-600' : 'text-gray-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t pt-4 mt-4">
                <p className="text-sm font-semibold text-gray-500 mb-2 px-2">Categories</p>
                {categories.map((category) => (
                  <Link
                    key={category}
                    to={`/category/${category.toLowerCase().replace(' ', '-')}`}
                    className="block py-3 px-2 text-gray-600 hover:text-orange-600 transition-colors min-h-[44px] flex items-center rounded"
                    onClick={() => setIsOpen(false)}
                  >
                    {category}
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <Button 
                  asChild 
                  className="bg-primary hover:bg-primary/90 w-full min-h-[48px]"
                >
                  <Link to="/submit-product">Submit a Product</Link>
                </Button>
              </div>
              
              {/* Mobile Social Media Icons */}
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm font-semibold text-gray-500 mb-3 px-2">Follow Us</p>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://m.facebook.com/61578172692503/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-orange-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@digitaldadventures?_t=ZT-8yuX4WRdlId&_r=1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-orange-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="Follow us on TikTok"
                  >
                    <Music className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://youtube.com/@digitaldadventures?si=uevcLxue4D6UX6rO" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-orange-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="Subscribe to our YouTube channel"
                  >
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
