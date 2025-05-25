
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "Fly Ash Handling System",
      description: "Complete pneumatic conveying systems for efficient fly ash transportation and storage with minimal dust emission.",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=400&h=300&fit=crop",
      features: [
        "Pneumatic conveying technology",
        "Dust-free operation",
        "Automated control systems",
        "Low maintenance design"
      ]
    },
    {
      id: 2,
      title: "Fully Automatic Brick Making Plant",
      description: "High-capacity automated brick production lines with advanced controls for consistent quality output.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
      features: [
        "PLC-based automation",
        "High production capacity",
        "Quality brick formation",
        "Energy efficient operation"
      ]
    },
    {
      id: 3,
      title: "Semi-Automatic Brick Making Machines",
      description: "Cost-effective brick making solutions ideal for medium-scale production with manual assistance.",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop",
      features: [
        "Manual + automatic operation",
        "Lower investment cost",
        "Flexible production",
        "Easy operation"
      ]
    },
    {
      id: 4,
      title: "Pan Mixers and Conveyors",
      description: "Heavy-duty mixing and material handling equipment designed for continuous industrial operations.",
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=400&h=300&fit=crop",
      features: [
        "Robust construction",
        "Uniform mixing",
        "Variable speed control",
        "Heavy-duty bearings"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-800 mb-4 font-poppins">
            Our <span className="text-steel-600">Products</span>
          </h2>
          <p className="text-lg text-industrial-600 max-w-2xl mx-auto">
            Comprehensive range of industrial machinery designed for efficiency, 
            reliability, and optimal performance in demanding environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-industrial-200">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-industrial-800 font-poppins">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-industrial-600">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-industrial-700 mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-industrial-600">
                        <span className="w-2 h-2 bg-steel-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button 
                  onClick={scrollToContact}
                  className="bg-steel-600 hover:bg-steel-700 text-white flex-1"
                >
                  Enquire Now
                </Button>
                <Button 
                  variant="outline" 
                  className="border-steel-600 text-steel-600 hover:bg-steel-50"
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
