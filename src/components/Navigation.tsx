
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Shop', path: '/shop' },
    { name: 'Lookbook', path: '/lookbook' },
    { name: 'Virtual Try-On', path: '/virtual-try-on' },
    { name: 'Customize', path: '/customize' },
    { name: 'Community', path: '/community' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-onyx bg-opacity-95 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-gold to-africanprint rounded-lg flex items-center justify-center">
              <span className="text-onyx font-bold text-lg sm:text-xl">Z</span>
            </div>
            <span className="font-playfair font-bold text-xl sm:text-2xl text-gold">Zillion Kulture</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gold ${
                  location.pathname === item.path ? 'text-gold' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/shop" className="luxury-button rounded-full flex items-center space-x-2 px-6 py-3">
              <ShoppingBag size={16} />
              <span>Shop Now</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-gold transition-colors p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-onyx bg-opacity-95 backdrop-blur-lg rounded-2xl mb-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-gold ${
                    location.pathname === item.path ? 'text-gold' : 'text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link to="/shop" className="luxury-button rounded-full w-full flex items-center justify-center space-x-2 px-6 py-3" onClick={() => setIsOpen(false)}>
                  <ShoppingBag size={16} />
                  <span>Shop Now</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
