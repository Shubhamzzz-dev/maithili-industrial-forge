
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    { number: "10+", label: "Years Industry Experience" },
    { number: "100+", label: "Industrial Clients" },
    { number: "24/7", label: "Technical Support" },
    { number: "100%", label: "Custom-Built Machinery" }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-industrial-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-800 mb-6 font-poppins">
              About <span className="text-steel-600">Maithili Engineering</span>
            </h2>
            <p className="text-lg text-industrial-600 mb-6 leading-relaxed">
              Maithili Engineering is a trusted manufacturer and supplier of robust fly ash handling 
              solutions and automated brick making systems, delivering to industries across India.
            </p>
            <p className="text-industrial-600 mb-8 leading-relaxed">
              With over a decade of experience in industrial engineering, we specialize in creating 
              custom-built machinery that meets the specific needs of our clients. Our commitment to 
              precision engineering, quality manufacturing, and comprehensive support has made us a 
              preferred partner for businesses across various industries.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className={`text-center p-4 bg-white rounded-lg shadow-sm border border-industrial-200 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl font-bold text-steel-600 mb-1 font-poppins">
                    {highlight.number}
                  </div>
                  <div className="text-sm text-industrial-600 font-medium">
                    {highlight.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop"
                alt="Maithili Engineering Factory"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-900/20 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold mb-1">State-of-the-Art Facility</h3>
                <p className="text-sm opacity-90">Advanced manufacturing capabilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
