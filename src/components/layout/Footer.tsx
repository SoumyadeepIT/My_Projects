import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-display font-bold text-primary-600">CraftMarket</span>
            </Link>
            <p className="mt-3 text-gray-600 text-sm">
              Connecting artisans with customers who appreciate handcrafted quality and unique pieces.
            </p>
            <div className="mt-4 flex space-x-4">
              <a 
                href="#" 
                className="text-gray-500 hover:text-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-primary-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-base font-medium text-gray-900">Explore</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/explore" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  All Crafts
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/artists" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Featured Artists
                </Link>
              </li>
              <li>
                <Link to="/sales" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-medium text-gray-900">For Artists</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/register" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Join as an Artist
                </Link>
              </li>
              <li>
                <Link to="/seller-guide" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Seller Guide
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-medium text-gray-900">Help & Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} CraftMarket. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link to="/privacy" className="text-xs text-gray-600 hover:text-primary-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-gray-600 hover:text-primary-600 transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-xs text-gray-600 hover:text-primary-600 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;