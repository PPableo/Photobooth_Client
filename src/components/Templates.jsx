import React, { useState } from "react";
import Image from "next/legacy/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";

const Templates = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);

  const Templates = [
    "/static/templates/image00001.jpeg",
    "/static/templates/image00002.jpeg",
    "/static/templates/image00003.jpeg",
    "/static/templates/image00004.jpeg",
    "/static/templates/image00005.jpeg",
    "/static/templates/image00006.jpeg",
    "/static/templates/image00007.jpeg",
    "/static/templates/image00008.jpeg",
    "/static/templates/image00009.jpeg",
    "/static/templates/image00010.jpeg",
    "/static/templates/image00011.jpeg",
    "/static/templates/image00012.jpeg",
    "/static/templates/image00013.jpeg",
    "/static/templates/image00014.jpeg",
    "/static/templates/image00015.jpeg",
    "/static/templates/image00016.jpeg",
    "/static/templates/image00017.jpeg",
    "/static/templates/image00018.jpeg",
    "/static/templates/image00019.jpeg",
    "/static/templates/image00020.jpeg",
    "/static/templates/image00021.jpeg",
    "/static/templates/image00022.jpeg",
    "/static/templates/image00024.jpeg",
    // "/static/templates/image00025.jpeg",
    // "/static/templates/image00026.jpeg",
  ];

  const categories = [
    { name: "Postcard Templates", photos: Templates },
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
            Our Templates
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
                {category.name === "Strip Templates" &&
                  "Customize for Any Event"}
              </h3>
              <div className="mb-10 grid grid-cols-2 md:grid-cols-3 gap-4">
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

export default Templates;
