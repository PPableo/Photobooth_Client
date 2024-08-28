import Landing from '@/components/Landing.jsx';
import NavBar from '@/components/NavBar.jsx';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';
import GalleryPage from '@/components/GalleryPage';
import SocialSection from '@/components/SocialSection';

export default function gallery() {
  return (
    <>
    <NavBar />
    {/* <Landing /> */}
    <GalleryPage />
    <SocialSection />
    <ContactUs />
    <Footer />
    </>
  );
}
