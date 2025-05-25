
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ClientsSection from '@/components/ClientsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
