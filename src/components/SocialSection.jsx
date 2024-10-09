import React from "react";
import { motion } from "framer-motion";

const SocialSection = () => {
  const socialPlatforms = [
    {
      name: "Digital",
      description: "Capture and share digital memories",
      link: "#",
    },
    {
      name: "Signature",
      description: "Our classic photobooth experience",
      link: "#",
    },
    {
      name: "Premium",
      description: "The ultimate photobooth package",
      link: "#",
    },
  ];

  return (
    <section className="bg-[#505050] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl italic md:text-5xl font-light text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          follow @photohaus.to
        </motion.h2>
        <motion.p 
          className="text-center text-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          If you want to see our photobooth packages, a bit of our work and backstage,
          <br />
          our different inspirations. You've come to the right place.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialPlatforms.map((platform, index) => (
            <motion.div 
              key={platform.name}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <h3 className="text-3xl md:text-4xl mb-2">{platform.name}</h3>
              <p className="text-lg mb-4">{platform.description}</p>
              <motion.a
                href={platform.link}
                className="inline-block border-b-2 border-white pb-1 transition-all duration-300 hover:border-gray-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn more →
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;