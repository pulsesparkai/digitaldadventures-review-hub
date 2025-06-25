
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
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
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/e490cc97-3f4e-4f7f-8a9a-ad4eb457a78b.png" 
              alt="DigitalDadVentures logo featuring a family icon and modern text – trusted product reviews for families and parents"
              title="Logo of DigitalDadVentures – Honest Reviews for Smart Families"
              className="h-40 w-auto"
            />
          </Link>

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
              <DropdownMenuContent className="w-48 bg-white border shadow-lg">
                {categories.map((category) => (
                  <DropdownMenuItem key={category} asChild>
                    <Link 
                      to={`/category/${category.toLowerCase().replace(' ', '-')}`}
                      className="w-full px-4 py-2 hover:bg-gray-50"
                    >
                      {category}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              asChild 
              className="bg-orange-600 hover:bg-orange-700"
            >
              <Link to="/submit-product">Submit a Product</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`hover:text-orange-600 transition-colors ${
                    location.pathname === item.path ? 'text-orange-600' : 'text-gray-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t pt-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">Categories</p>
                {categories.map((category) => (
                  <Link
                    key={category}
                    to={`/category/${category.toLowerCase().replace(' ', '-')}`}
                    className="block py-1 text-gray-600 hover:text-orange-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {category}
                  </Link>
                ))}
              </div>
              <Button 
                asChild 
                className="bg-orange-600 hover:bg-orange-700 w-full"
              >
                <Link to="/submit-product">Submit a Product</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
