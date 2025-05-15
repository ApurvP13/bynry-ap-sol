import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-screen h-screen bg-black p-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/grid-bg.jpg')] size-full bg-cover opacity-15 z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="relative flex flex-col gap-4 items-center justify-center size-full z-10"
      >
        <h1 className="text-2xl font-display py-2 md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent">
          Bynry Profile Task
        </h1>
        <p className=" text-lg font-sans md:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent">
          Solution by Apurv Pandey
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
