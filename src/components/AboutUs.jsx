import Image from "next/legacy/image";
import Container from './Container';

const AboutUs = () => {
    const weddingPhotos = [
        '/static/wedding/image00001.jpeg',
        '/static/wedding/image00002.jpeg',
        '/static/wedding/image00003.jpeg',
        '/static/wedding/image00004.jpeg',
        '/static/wedding/image00005.jpeg',
        '/static/wedding/image00006.jpeg',
        '/static/wedding/image00007.jpeg',
        '/static/wedding/image00008.jpeg',
        '/static/wedding/image00009.jpeg',
        // '/static/wedding/image00010.jpeg',
        // '/static/wedding/image00011.jpeg',
      ];
      
      const birthdayPhotos = [
        '/static/birthday/image00001.jpeg',
        '/static/birthday/image00002.jpeg',
        '/static/birthday/image00003.jpeg',
        '/static/birthday/image00004.jpeg',
        '/static/birthday/image00005.jpeg',
        '/static/birthday/image00006.jpeg',
        '/static/birthday/image00007.jpeg',
        '/static/birthday/image00008.jpeg',
        '/static/birthday/image00009.jpeg',
        // '/static/birthday/image00010.jpeg',
        // '/static/birthday/image00011.jpeg',
      ];
      
      const babyShowerPhotos = [
        '/static/babyshower/image00001.jpeg',
        '/static/babyshower/image00002.jpeg',
        '/static/babyshower/image00003.jpeg',
        '/static/babyshower/image00004.jpeg',
        '/static/babyshower/image00005.jpeg',
        '/static/babyshower/image00006.jpeg',
        '/static/babyshower/image00007.jpeg',
        '/static/babyshower/image00008.jpeg',
        '/static/babyshower/image00009.jpeg',
        // '/static/babyshower/image00010.jpeg',
        // '/static/babyshower/image00011.jpeg',
      ];

  return (
    <Container>
      <div className="mt-20">
        <h2 className="text-left text-2xl font-light text-gray-800 light:text-white md:text-4xl">
          Weddings
        </h2>
        <h3 className="text-xl text-left mb-8">
          Capture the Moments of Your Special Day
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {weddingPhotos.map((photo, index) => (
            <div key={index} className="aspect-[3/4] relative">
              <Image
                src={photo}
                alt={`Wedding photo ${index + 1}`}
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

      <div className="mt-20">
        <h2 className="text-left text-2xl font-light text-gray-800 light:text-white md:text-4xl">
          Birthdays
        </h2>
        <h3 className="text-xl text-left mb-8">
          Celebrate with Fun and Memorable Captures
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {birthdayPhotos.map((photo, index) => (
            <div key={index} className="aspect-[3/4] relative">
              <Image
                src={photo}
                alt={`Birthday photo ${index + 1}`}
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

      <div className="mt-20">
        <h2 className="text-left text-2xl font-light text-gray-800 light:text-white md:text-4xl">
          Baby Showers
        </h2>
        <h3 className="text-xl text-left mb-8">
          Celebrate the Arrival of a New Life
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {babyShowerPhotos.map((photo, index) => (
            <div key={index} className="aspect-[3/4] relative">
              <Image
                src={photo}
                alt={`Baby Shower photo ${index + 1}`}
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