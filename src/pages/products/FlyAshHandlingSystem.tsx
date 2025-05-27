
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const FlyAshHandlingSystem = () => {
  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-industrial-800 text-white py-20 mt-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
            Fly Ash Handling System
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Complete pneumatic conveying systems for efficient fly ash transportation and storage with minimal dust emission.
          </p>
        </div>
      </div>

      {/* Product Image */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&h=500&fit=crop"
              alt="Fly Ash Handling System"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-industrial-800 mb-8 font-poppins">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Pneumatic conveying technology",
                "Dust-free operation",
                "Automated control systems",
                "Low maintenance design",
                "High efficiency transportation",
                "Environmentally friendly operation"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-orange-500 mr-3" size={20} />
                  <span className="text-industrial-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-industrial-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-poppins">Get a Quote for Fly Ash Handling System</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a customized solution that meets your specific requirements.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
          >
            <Phone className="mr-2" size={20} />
            Contact Us Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlyAshHandlingSystem;
