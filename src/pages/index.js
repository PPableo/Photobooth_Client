import Landing from '@/components/Landing.jsx';
import NavBar from '@/components/NavBar.jsx';
import Reviews from '@/components/Reviews.jsx';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import AboutUs from '@/components/AboutUs';
import FeaturesSection from '@/components/FeaturesSection';
import ContactUs from '@/components/ContactUs';

export default function Home() {
  return (
    <>
    <NavBar />
    <Landing />
    <AboutUs />
    <FeaturesSection />
    <Features />
    <Reviews />
    <ContactUs />
    <Footer />
    </>
  );
}
