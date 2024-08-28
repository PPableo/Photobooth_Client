import Landing from '@/components/Landing.jsx';
import NavBar from '@/components/NavBar.jsx';
import Reviews from '@/components/Reviews.jsx';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import AboutUs from '@/components/AboutUs';
import ContactUs from '@/components/ContactUs';
import CTAComponent from '@/components/CTA';
import SocialSection from '@/components/SocialSection';

export default function Home() {
  return (
    <>
    <NavBar />
    <Landing />
    <AboutUs />
    <CTAComponent />
    <SocialSection />
    <Features />
    <Reviews />
    <ContactUs />
    <Footer />
    </>
  );
}
