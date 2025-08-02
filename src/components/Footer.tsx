
import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const footerLinks = {
    shop: [
      { name: 'Smart Casual', path: '/shop' },
      { name: 'Luxury Collection', path: '/shop' },
      { name: 'New Arrivals', path: '/shop' },
      { name: 'Sale', path: '/shop' }
    ],
    experience: [
      { name: 'Virtual Try-On', path: '/virtual-try-on' },
      { name: 'Customize', path: '/customize' },
      { name: 'Lookbook', path: '/lookbook' },
      { name: 'Size Guide', path: '/shop' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Community', path: '/community' },
      { name: 'Careers', path: '/about' },
      { name: 'Press', path: '/community' }
    ],
    support: [
      { name: 'Contact Us', path: '/about' },
      { name: 'Shipping Info', path: '/shop' },
      { name: 'Returns', path: '/shop' },
      { name: 'FAQ', path: '/about' }
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-onyx to-black border-t border-gray-800">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-4">
              Stay in the <span className="text-gold">Loop</span>
            </h3>
            <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Be the first to know about new collections, exclusive drops, and cultural stories that inspire our designs.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-card border border-gray-700 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-sm sm:text-base"
                required
              />
              <button
                type="submit"
                className="luxury-button rounded-lg px-6 py-3 font-medium text-sm sm:text-base whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-2" onClick={scrollToTop}>
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-gold to-africanprint rounded-lg flex items-center justify-center">
                <img className="text-onyx font-bold text-lg sm:text-xl" src="logo.png" alt="Zillion Kulture Logo" />
              </div>
              <span className="font-playfair font-bold text-xl sm:text-2xl text-gold">Zillion Kulture</span>
            </Link>
            
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Unapologetically African, Uncommonly Stylish. We bridge cultures and rewire style for the 21st century with bold heritage and cutting-edge innovation.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Twitter size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Youtube size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="sm:col-span-1">
            <h4 className="font-playfair text-lg font-bold text-white mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-gray-400 hover:text-gold transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-1">
            <h4 className="font-playfair text-lg font-bold text-white mb-4">Experience</h4>
            <ul className="space-y-2">
              {footerLinks.experience.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-gray-400 hover:text-gold transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-1">
            <h4 className="font-playfair text-lg font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-gray-400 hover:text-gold transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-1">
            <h4 className="font-playfair text-lg font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-gray-400 hover:text-gold transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="text-gold flex-shrink-0" size={18} />
              <div>
                <div className="text-white font-medium text-sm sm:text-base">Email</div>
                <div className="text-gray-400 text-sm break-all">hello@zillionkulture.com</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="text-gold flex-shrink-0" size={18} />
              <div>
                <div className="text-white font-medium text-sm sm:text-base">Phone</div>
                <div className="text-gray-400 text-sm">+(234)814-739-0810</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="text-gold flex-shrink-0" size={18} />
              <div>
                <div className="text-white font-medium text-sm sm:text-base">Global Headquarters</div>
                <div className="text-gray-400 text-sm">Lagos, Nigeria</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Zillion Kulture. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors"
            >
              <ArrowUp size={16} />
              <span className="text-sm">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
