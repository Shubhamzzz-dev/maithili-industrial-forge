
import { useState, useEffect } from 'react';
import { Menu, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top Bar */}
      <div className="bg-industrial-800 text-white py-2 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@maithiliengineering.com</span>
            </div>
          </div>
          <div className="text-xs">
            10+ Years Experience | 100+ Satisfied Clients
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-steel-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-industrial-800 font-poppins">
                Maithili Engineering
              </h1>
              <p className="text-xs text-industrial-600">Industrial Solutions</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-industrial-700 hover:text-steel-600 font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-industrial-700 hover:text-steel-600 font-medium transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-industrial-700 hover:text-steel-600 font-medium transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className="text-industrial-700 hover:text-steel-600 font-medium transition-colors"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('clients')}
              className="text-industrial-700 hover:text-steel-600 font-medium transition-colors"
            >
              Clients
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-steel-600 hover:bg-steel-700 text-white"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-industrial-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-industrial-700 hover:text-steel-600 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-industrial-700 hover:text-steel-600 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-left text-industrial-700 hover:text-steel-600 font-medium"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('why-choose-us')}
                className="text-left text-industrial-700 hover:text-steel-600 font-medium"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('clients')}
                className="text-left text-industrial-700 hover:text-steel-600 font-medium"
              >
                Clients
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-steel-600 hover:bg-steel-700 text-white w-full"
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
