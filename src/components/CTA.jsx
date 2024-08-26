import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const CTAComponent = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/static/video/cta.mp4" type="video/mp4" />
      </video>
      <motion.div
        className="relative h-full flex flex-col items-center justify-center text-white"
        style={{ y }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Let's Create Magic</h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
          If we're a good match, let's chat about documenting your event
        </p>
        <button className="bg-white text-gray-600 px-6 py-3 text-lg font-semibold">
          Inquire
        </button>
      </motion.div>
    </div>
  );
};

export default CTAComponent;