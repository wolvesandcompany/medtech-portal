import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Solutions from '@/components/Solutions';
import Products from '@/components/Products';
import Impact from '@/components/Impact';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Products />
      <Impact />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
