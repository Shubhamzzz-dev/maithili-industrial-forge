
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&h=800&fit=crop&auto=format&q=80",
      title: "Leading Manufacturer of Fly Ash Handling Plants"
    },
    {
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1920&h=800&fit=crop&auto=format&q=80", 
      title: "Automated Brick Making Solutions"
    },
    {
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1920&h=800&fit=crop&auto=format&q=80",
      title: "Industrial Engineering Excellence"
    },
    {
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=800&fit=crop&auto=format&q=80",
      title: "Advanced Manufacturing Technology"
    },
    {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=800&fit=crop&auto=format&q=80",
      title: "Precision Construction Equipment"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden mt-20 lg:mt-28">
      {/* Slider Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover brightness-110 contrast-105"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
      </div>

      {/* White Background Overlay for Text */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-200">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins text-industrial-800">
                  Leading Manufacturer of <br />
                  <span className="text-orange-500">Fly Ash Handling</span> & <br />
                  <span className="text-orange-500">Brick Making Plants</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
                  Delivering robust industrial solutions with precision engineering, 
                  custom design capabilities, and comprehensive after-sales support across India.
                </p>
                <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                  <Button 
                    onClick={scrollToContact}
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg"
                  >
                    Get a Quote
                  </Button>
                  <Button 
                    onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                    variant="outline"
                    size="lg"
                    className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg"
                  >
                    View Products
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all shadow-lg ${
              index === currentSlide ? 'bg-orange-500' : 'bg-white/70 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
