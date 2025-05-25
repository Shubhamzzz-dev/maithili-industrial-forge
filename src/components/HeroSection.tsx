
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=600&fit=crop",
      title: "Leading Manufacturer of Fly Ash Handling Plants"
    },
    {
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1200&h=600&fit=crop", 
      title: "Automated Brick Making Solutions"
    },
    {
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=1200&h=600&fit=crop",
      title: "Industrial Engineering Excellence"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
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
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins animate-fade-in">
              Leading Manufacturer of <br />
              <span className="text-steel-400">Fly Ash Handling</span> & <br />
              <span className="text-steel-400">Brick Making Plants</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fade-in max-w-2xl mx-auto">
              Delivering robust industrial solutions with precision engineering, 
              custom design capabilities, and comprehensive after-sales support across India.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center animate-fade-in">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-steel-600 hover:bg-steel-700 text-white px-8 py-4 text-lg font-semibold"
              >
                Get a Quote
              </Button>
              <Button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-industrial-800 px-8 py-4 text-lg font-semibold"
              >
                View Products
              </Button>
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
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
