import { useState } from "react";
import Image from "next/legacy/image";
import { motion, AnimatePresence } from "framer-motion";

const AboutUs = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

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
      src: "/static/wedding/image00010.jpeg",
      category: "Wedding",
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
    {
      src: "/static/wedding/image00014.jpeg",
      category: "Wedding",
      aspect: "video",
    },
    {
      src: "/static/wedding/image00015.jpeg",
      category: "Wedding",
      aspect: "square",
    },
    {
      src: "/static/birthday/image00013.jpeg",
      category: "Birthday",
      aspect: "video",
    },
    {
      src: "/static/wedding/image00016.jpeg",
      category: "Wedding",
      aspect: "square",
    },
  ];

  const openFullImage = (src, index) => {
    setSelectedImage(src);
    setCurrentIndex(index);
  };

  const closeFullImage = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const navigateImage = (direction) => {
    const newIndex =
      (currentIndex + direction + allPhotos.length) % allPhotos.length;
    setSelectedImage(allPhotos[newIndex].src);
    setCurrentIndex(newIndex);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto m-10 px-4 py-12"
    >
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center font-medium font-Public text-gray-600 max-w-2xl mb-4 mx-auto"
      >
        WELCOME TO PHOTOHAUS
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-playfair font-[500] mb-4">
          {" "}
          Corporate, Parties <span className="font-public">&</span> Wedding
          Photobooth{" "}
        </h2>
        <h2 className="text-4xl font-thin font-playfair italic mb-8">
          {" "}
          A Fun Party Favour!{" "}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Photohaus is an all-age modern photobooth. We are here to help you
          capture special moments to look back on.{" "}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className=""
      >
        <div className="gap-4 sm:gap-6 md:gap-8 columns-2 sm:columns-2 md:columns-3">
          {allPhotos.map((photo, index) => (
            <motion.div
              key={index}
              className={`w-full mb-4 sm:mb-6 md:mb-8 relative cursor-pointer overflow-hidden`}
              onClick={() => openFullImage(photo.src, index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`${
                  photo.aspect === "video" ? "aspect-video" : "aspect-square"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={`${photo.category} photo ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className=""
                  loading="lazy"
                  quality={50}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="my-20 text-center">
        <h3 className="text-4xl font-normal mb-4">Our Mission</h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          To help you capture special moments and entertain your guests so that
          your event will be known as the party of theyear.
        </p>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeFullImage}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full h-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Full size image"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
              <button
                className="absolute top-4 right-4 text-white text-4xl"
                onClick={closeFullImage}
              >
                ×
              </button>
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
                onClick={() => navigateImage(-1)}
              >
                ‹
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
                onClick={() => navigateImage(1)}
              >
                ›
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AboutUs;
