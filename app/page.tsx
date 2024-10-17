import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import WhyChooseUs from './components/WhyChooseUs';
import Solutions from './components/Solutions';
import BuildingBlocks from './components/BuildingBlocks';
import FAQs from './components/FAQs';
import CaseStudies from './components/CaseStudies';
import AIAccelerators from './components/AIAccelerators';
import TechnologyStack from './components/TechnologyStack';
import Testimonials from './components/Testimonials';
import CompanyLogos from './components/CompanyLogos';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HomeSection />
      <WhyChooseUs />
      <Solutions />
      <BuildingBlocks />
      <FAQs />
      <CaseStudies />
      <AIAccelerators />
      <TechnologyStack />
      <Testimonials />
      <CompanyLogos />
      <Blog />
      <ContactUs />
      <Footer />
    </main>
  );
}