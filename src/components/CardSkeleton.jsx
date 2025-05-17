import React from "react";
import { motion } from "framer-motion";

const CardSkeleton = () => {
  return (
    <motion.div className="animate-pulse backdrop-blur-md bg-white/10 border border-white/20 shadow-xl text-white font-sans size-80 p-6 rounded-3xl flex flex-col items-center justify-between gap-4">
      {/* Image Placeholder */}
      <div className="w-24 h-24 rounded-full bg-white/20 border-2 border-white shadow-md" />

      {/* Name */}
      <div className="h-6 w-32 bg-white/20 rounded-lg" />

      {/* Description */}
      <div className="h-4 w-40 bg-white/10 rounded-md" />
      <div className="h-4 w-28 bg-white/10 rounded-md" />

      {/* Job Title */}
      <div className="h-4 w-20 bg-blue-200/20 rounded-md" />
    </motion.div>
  );
};

export default CardSkeleton;
