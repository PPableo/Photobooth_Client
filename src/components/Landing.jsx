import Image from "next/image";
import Container from "./Container";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Landing = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden" id="home">
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 grid grid-cols-2-space-x-52"
      >
        <Image
          src="/static/background2.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </motion.div>
      <Container>
        <div className="max-w-7xl pt-56 mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative pt-56 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="tracking-widest text-white font-thin light:text-white font-copperplate text-5xl sm:text-4xl md:text-6xl xl:text-7xl"
              >
                PHOTOHAUS
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center text-white font-semibold uppercase light:text-gray-300 text-xl"
              >
                A modern photobooth
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 flex flex-wrap justify-center gap-y-4 gap-x-6"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.instagram.com/photohaus.to/"
                  className="relative bg-white px-6 py-3 text-lg font-semibold items-center justify-center before:absolute before:inset-0 before:rounded-none before:bg-white before:transition before:duration-300 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-gray-600">
                    Book Now
                  </span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#faqs"
                  className="relative flex bg-white px-6 py-3 text-lg font-semibold items-center justify-center before:absolute before:inset-0 before:rounded-none before:bg-white before:transition before:duration-300 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-gray-600">
                    Learn more
                  </span>
                </motion.a>
                
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Landing;