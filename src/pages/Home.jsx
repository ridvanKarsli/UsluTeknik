import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import ClientsSection from '../components/ClientsSection';
import HandsSection from '../components/HandsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <ClientsSection />
      <HandsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
