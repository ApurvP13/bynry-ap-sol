import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-screen h-screen bg-black p-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/grid-bg.jpg')] size-full bg-cover opacity-15 z-0" />

      {/* Content */}
      <div className="relative flex flex-col gap-4 items-center justify-center size-full z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="text-2xl font-display py-2 md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent"
        >
          Bynry Profile Task
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="text-lg font-sans md:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent"
        >
          Solution by Apurv Pandey
        </motion.p>

        <motion.a
          href="/profiles"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.9,
            opacity: 0.7,
            transition: { duration: 0.1 },
          }}
          className="px-6 py-4 tracking-wide  font-semibold rounded-3xl mt-4 border-l-2 border-r-2 hover:border-t-2 hover:border-b-2 transition-all duration-200 border-blue-500 text-white"
        >
          Profiles
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
