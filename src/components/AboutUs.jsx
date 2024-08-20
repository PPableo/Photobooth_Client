import Image from "next/legacy/image";
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
        <h2 className="pt-20 text-left text-2xl font-light text-gray-800 light:text-white md:text-4xl">About <span className="text-primary"> Us.</span></h2>
        <h3 className="text-xl text-left mb-8">Capturing Moments, Creating Memories</h3>
        <div className="container mx-auto px-4 py-16">

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="aspect-[3/4] relative">
              <Image
                src={photo}
                alt={`About us photo ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                loading="lazy"
                quality={50}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;