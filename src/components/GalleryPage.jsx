import React, { useState } from "react";
import Image from "next/legacy/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);

  const weddingPhotos = [
    "/static/wedding/image00001.jpeg",
    "/static/wedding/image00002.jpeg",
    "/static/wedding/image00003.jpeg",
    "/static/wedding/image00004.jpeg",
    "/static/wedding/image00005.jpeg",
    "/static/wedding/image00006.jpeg",
    "/static/wedding/image00007.jpeg",
    "/static/wedding/image00008.jpeg",
    "/static/wedding/image00009.jpeg",
  ];

  const birthdayPhotos = [
    "/static/birthday/image00001.jpeg",
    "/static/birthday/image00002.jpeg",
    "/static/birthday/image00003.jpeg",
    "/static/birthday/image00004.jpeg",
    "/static/birthday/image00005.jpeg",
    "/static/birthday/image00006.jpeg",
    "/static/birthday/image00007.jpeg",
    "/static/birthday/image00008.jpeg",
    "/static/birthday/image00009.jpeg",
  ];

  const babyShowerPhotos = [
    "/static/babyshower/image00001.jpeg",
    "/static/babyshower/image00002.jpeg",
    "/static/babyshower/image00003.jpeg",
    "/static/babyshower/image00004.jpeg",
    "/static/babyshower/image00005.jpeg",
    "/static/babyshower/image00006.jpeg",
    "/static/babyshower/image00007.jpeg",
    "/static/babyshower/image00008.jpeg",
    "/static/babyshower/image00009.jpeg",
  ];

  const categories = [
    { name: "Weddings", photos: weddingPhotos },
    { name: "Birthdays", photos: birthdayPhotos },
    { name: "Baby Showers", photos: babyShowerPhotos },
  ];

  const openModal = (image, category) => {
    setSelectedImage(image);
    setCurrentCategory(category);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentCategory(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = currentCategory.photos.indexOf(selectedImage);
    const newIndex =
      (currentIndex + direction + currentCategory.photos.length) %
      currentCategory.photos.length;
    setSelectedImage(currentCategory.photos[newIndex]);
  };

  return (
    <>
      <motion.div
        className="relative h-[50vh] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/static/gallery-header.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            className="text-white text-4xl md:text-6xl font-light"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Our Gallery
          </motion.h1>
        </div>
      </motion.div>

      <Container>
        <div className="mt-20">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="mb-50"
            >
              <h2 className="text-center text-4xl font-light text-gray-800 light:text-white md:text-4xl mb-2">
                {category.name}
              </h2>
              <h3 className="text-2xl font-playfair italic text-center mb-8">
                {category.name === "Weddings" &&
                  "Capture the Moments of Your Special Day"}
                {category.name === "Birthdays" &&
                  "Celebrate with Fun and Memorable Captures"}
                {category.name === "Baby Showers" &&
                  "Celebrate the Arrival of a New Life"}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {category.photos.map((photo, index) => (
                  <motion.div
                    key={index}
                    className="aspect-[4/4] relative cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openModal(photo, category)}
                  >
                    <Image
                      src={photo}
                      alt={`${category.name} photo ${index + 1}`}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-none"
                      loading="lazy"
                      quality={50}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full h-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <Image
                src={selectedImage}
                alt="Full size image"
                layout="fill"
                objectFit="contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-4xl"
                onClick={closeModal}
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
    </>
  );
};

export default GalleryPage;
