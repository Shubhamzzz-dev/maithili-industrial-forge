
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.query) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Quote Request Submitted",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      query: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@maithiliengineering.com", "sales@maithiliengineering.com"],
      description: "Send us your requirements"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Industrial Area, Phase-2", "Chandigarh, Punjab 160002"],
      description: "Visit our manufacturing facility"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-800 mb-4 font-poppins">
            Get in <span className="text-steel-600">Touch</span>
          </h2>
          <p className="text-lg text-industrial-600 max-w-2xl mx-auto">
            Ready to discuss your project requirements? Contact us for a detailed quote 
            and technical consultation from our engineering experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-industrial-200">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-industrial-800 font-poppins">
                Request a Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-industrial-700 font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 border-industrial-300 focus:border-steel-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-industrial-700 font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 border-industrial-300 focus:border-steel-500"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-industrial-700 font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 border-industrial-300 focus:border-steel-500"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="query" className="text-industrial-700 font-medium">
                    Project Requirements *
                  </Label>
                  <Textarea
                    id="query"
                    name="query"
                    value={formData.query}
                    onChange={handleInputChange}
                    rows={5}
                    className="mt-1 border-industrial-300 focus:border-steel-500"
                    placeholder="Describe your project requirements, capacity, timeline, and any specific needs..."
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-steel-600 hover:bg-steel-700 text-white font-semibold"
                >
                  Submit Quote Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-industrial-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-steel-600 rounded-lg flex items-center justify-center">
                          <info.icon size={24} className="text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-industrial-800 mb-1 font-poppins">
                          {info.title}
                        </h3>
                        <div className="space-y-1 mb-2">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-industrial-600 font-medium">
                              {detail}
                            </p>
                          ))}
                        </div>
                        <p className="text-sm text-industrial-500">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Embedded Map */}
            <Card className="border-industrial-200">
              <CardContent className="p-0">
                <div className="w-full h-64 bg-industrial-100 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.472!2d76.7794!3d30.7333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh%2C%20Punjab!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Maithili Engineering Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
