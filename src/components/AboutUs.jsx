import { useState } from "react";
import Image from "next/legacy/image";
import Container from "./Container";

const AboutUs = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const allPhotos = [
    {
      src: "/static/wedding/image00001.jpeg",
      category: "Wedding",
      aspect: "video",
    },
    {
      src: "/static/birthday/image00001.jpeg",
      category: "Birthday",
      aspect: "square",
    },
    {
      src: "/static/babyshower/image00001.jpeg",
      category: "Baby Shower",
      aspect: "square",
    },
    {
      src: "/static/wedding/image00002.jpeg",
      category: "Wedding",
      aspect: "square",
    },
    {
      src: "/static/birthday/image00002.jpeg",
      category: "Birthday",
      aspect: "video",
    },
    {
      src: "/static/babyshower/image00002.jpeg",
      category: "Baby Shower",
      aspect: "video",
    },
    {
      src: "/static/wedding/image00003.jpeg",
      category: "Wedding",
      aspect: "square",
    },
    {
      src: "/static/birthday/image00003.jpeg",
      category: "Birthday",
      aspect: "video",
    },
    {
      src: "/static/babyshower/image00003.jpeg",
      category: "Baby Shower",
      aspect: "square",
    },
    {
      src: "/static/birthday/image00004.jpeg",
      category: "Birthday",
      aspect: "video",
    },
    {
      src: "/static/babyshower/image00005.jpeg",
      category: "Baby Shower",
      aspect: "square",
    },
    {
      src: "/static/wedding/image00006.jpeg",
      category: "Wedding",
      aspect: "square",
    },
    {
      src: "/static/birthday/image00007.jpeg",
      category: "Birthday",
      aspect: "square",
    },
    {
      src: "/static/wedding/image00008.jpeg",
      category: "Baby Shower",
      aspect: "video",
    },
    {
      src: "/static/wedding/image00009.jpeg",
      category: "Wedding",
      aspect: "square",
    },
    {
      src: "/static/birthday/image00010.jpeg",
      category: "Birthday",
      aspect: "video",
    },
    {
      src: "/static/babyshower/image00004.jpeg",
      category: "Baby Shower",
      aspect: "square",
    },
  ];

  const openFullImage = (src) => {
    setSelectedImage(src);
  };

  const closeFullImage = () => {
    setSelectedImage(null);
  };

  return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center font-medium font-Public text-gray-600 max-w-2xl mb-8 mx-auto">
          HI, FRIENDS, WE'RE PHOTOHAUS
        </p>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-normal mb-4">
            {" "}
            Corporate, Parties <span className="font-Public">&</span> Wedding
            Photobooth{" "}
          </h2>
          <h2 className="text-4xl font-thin font-playfair italic mb-8">
            {" "}
            Editorial, Artistic Storytelling{" "}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We are a team of passionate individuals dedicated to delivering
            exceptional products and services to our clients.
          </p>
        </div>

        <div className="">
          <h2 className="text-center text-2xl font-light text-gray-800 light:text-white md:text-4xl mb-4">
            Our Photo Gallery
          </h2>
          <h3 className="text-xl text-center mb-8">
            Capturing Life's Special Moments
          </h3>
          <div className="gap-8 columns-1 sm:columns-2 md:columns-3">
            {allPhotos.map((photo, index) => (
              <div
                key={index}
                className={`w-full ${
                  photo.aspect === "video" ? "aspect-video" : "aspect-square"
                } mb-6 relative cursor-pointer`}
                onClick={() => openFullImage(photo.src)}
              >
                <Image
                  src={photo.src}
                  alt={`${photo.category} photo ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 w-full h-full rounded-none"
                  loading="lazy"
                  quality={50}
                />
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                  {photo.category}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            To provide innovative solutions that empower our clients and
            contribute to their success.
          </p>
        </div>
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeFullImage}
          >
            <div
              className="max-w-4xl max-h-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Full size image"
                layout="responsive"
                width={16}
                height={9}
                objectFit="contain"
                quality={100}
              />
            </div>
          </div>
        )}
      </div>

  );
};

export default AboutUs;
