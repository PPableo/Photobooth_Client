import Image from 'next/image';
import Container from './Container';

const AboutUs = () => {
  const photos = [
    '/images/photo1.jpg',
    '/images/photo2.jpg',
    '/images/photo3.jpg',
    '/images/photo4.jpg',
    '/images/photo5.jpg',
    '/images/photo6.jpg',
  ];

  return (
    <Container>
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-4">About Us</h2>
      <h3 className="text-xl text-center mb-8">Capturing Moments, Creating Memories</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
            <div key={index} className="aspect-[3/4] relative">
<Image 
  src={photo} 
  alt={`About us photo ${index + 1}`} 
  fill
  style={{ objectFit: 'cover' }}
  className="rounded-lg"
  loading="lazy"
  quality={75}
/>
</div>
        ))}
      </div>
    </div>
    </Container>
  );
};

export default AboutUs;