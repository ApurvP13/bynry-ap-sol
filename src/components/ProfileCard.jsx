import React from "react";
import { motion } from "framer-motion";

const ProfileCard = ({ profile, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      className="backdrop-blur-md bg-white/10 border border-white/20 hover:border-l-2 hover:border-t-0 hover:border-b-0 hover:border-r-2 hover:border-blue-500 transition-all duration-200 shadow-xl text-white font-sans size-80 p-6 rounded-3xl flex flex-col items-center justify-between gap-4"
    >
      <img
        className="w-24 h-24 object-cover rounded-full border-2 border-white shadow-md"
        src={profile.imageUrl}
        alt="Profile picture"
      />
      <h1 className="text-xl font-bold tracking-wide text-white text-center">
        {profile.name}
      </h1>
      <p className="text-sm text-white/80 text-center px-2 italic">
        {profile.description}
      </p>
      <p className="text-sm text-blue-200 font-medium">{profile.job}</p>
    </motion.div>
  );
};

export default ProfileCard;
