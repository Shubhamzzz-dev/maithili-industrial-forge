
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' }
  ];

  const products = [
    'Fly Ash Handling System',
    'Automatic Brick Making Plant',
    'Semi-Automatic Brick Machines',
    'Pan Mixers and Conveyors',
    'Industrial Conveyor Systems'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-industrial-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-steel-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-poppins">Maithili Engineering</h3>
                <p className="text-sm text-gray-400">Industrial Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading manufacturer of fly ash handling systems and automated brick making plants, 
              delivering robust industrial solutions across India.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <span className="w-2 h-2 bg-steel-400 rounded-full"></span>
                <span className="text-gray-300">10+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span className="w-2 h-2 bg-steel-400 rounded-full"></span>
                <span className="text-gray-300">100+ Satisfied Clients</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span className="w-2 h-2 bg-steel-400 rounded-full"></span>
                <span className="text-gray-300">24/7 Technical Support</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-poppins">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-steel-400 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-poppins">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {product}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-poppins">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone size={16} className="text-steel-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">+91 98765 43210</p>
                  <p className="text-gray-300 text-sm">+91 87654 32109</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={16} className="text-steel-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">info@maithiliengineering.com</p>
                  <p className="text-gray-300 text-sm">sales@maithiliengineering.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-steel-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Industrial Area, Phase-2</p>
                  <p className="text-gray-300 text-sm">Chandigarh, Punjab 160002</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Maithili Engineering. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Privacy Policy</span>
              <span className="text-gray-400 text-sm">Terms of Service</span>
              <span className="text-gray-400 text-sm">Sitemap</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
