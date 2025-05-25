
const ClientsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Thermal Power Plant - Fly Ash Handling",
      client: "NTPC Limited",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=400&h=250&fit=crop",
      description: "Complete pneumatic fly ash handling system for 600MW thermal power plant."
    },
    {
      id: 2,
      title: "Automated Brick Manufacturing Unit",
      client: "Gujarat Construction Corp",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=250&fit=crop",
      description: "Fully automated brick making plant with 50,000 bricks/day capacity."
    },
    {
      id: 3,
      title: "Industrial Conveyor Systems",
      client: "Steel Authority of India",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=250&fit=crop",
      description: "Heavy-duty conveyor systems for steel plant material handling."
    }
  ];

  const clientLogos = [
    "NTPC Limited",
    "Steel Authority of India",
    "Gujarat Construction Corp",
    "Ambuja Cements",
    "ACC Limited",
    "Shree Cement"
  ];

  return (
    <section id="clients" className="py-20 bg-industrial-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-800 mb-4 font-poppins">
            Our <span className="text-steel-600">Clients & Projects</span>
          </h2>
          <p className="text-lg text-industrial-600 max-w-2xl mx-auto">
            Trusted by leading industries across India for delivering reliable, 
            efficient, and innovative engineering solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-sm mb-1">{project.client}</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-industrial-800 mb-2 font-poppins">
                  {project.title}
                </h3>
                <p className="text-industrial-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="bg-white rounded-lg shadow-sm border border-industrial-200 p-8">
          <h3 className="text-center text-xl font-semibold text-industrial-800 mb-8 font-poppins">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-4 bg-industrial-50 rounded-lg hover:bg-steel-50 transition-colors"
              >
                <span className="text-sm font-medium text-industrial-700 text-center">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 text-center bg-white rounded-lg shadow-sm border border-industrial-200 p-8">
          <blockquote className="text-lg italic text-industrial-600 mb-4">
            "Maithili Engineering delivered an exceptional fly ash handling system that exceeded our expectations. 
            Their technical expertise and commitment to quality made them our preferred partner."
          </blockquote>
          <cite className="text-industrial-800 font-semibold">
            - Project Manager, NTPC Limited
          </cite>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
