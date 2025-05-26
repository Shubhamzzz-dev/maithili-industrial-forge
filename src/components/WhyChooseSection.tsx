
import { Factory, Phone, Mail, MapPin } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: Factory,
      title: "Turnkey Plant Setup",
      description: "Complete project execution from design to commissioning with comprehensive testing and handover."
    },
    {
      icon: Factory,
      title: "Precision Engineering",
      description: "Advanced manufacturing processes ensuring highest quality standards and dimensional accuracy."
    },
    {
      icon: Phone,
      title: "After Sales Support",
      description: "24/7 technical support, spare parts availability, and maintenance services across India."
    },
    {
      icon: MapPin,
      title: "Custom Design Solutions",
      description: "Tailored engineering solutions to meet specific client requirements and site conditions."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-industrial-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            Why Choose <span className="text-orange-400">Maithili Engineering</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our commitment to excellence, innovation, and customer satisfaction 
            sets us apart in the industrial machinery sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:bg-white/5 p-6 rounded-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4 group-hover:bg-orange-400 transition-colors">
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-poppins">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-16 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2 font-poppins">10+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2 font-poppins">100+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2 font-poppins">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2 font-poppins">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
