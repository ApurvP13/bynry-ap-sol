import React from "react";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import MapView from "./MapView";
import { IoMail, IoCall } from "react-icons/io5";

const InterestTags = ({ interest }) => {
  return (
    <div className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-600 transition-all duration-200">
      {interest}
    </div>
  );
};

const ProfileModal = ({ profile }) => {
  return (
    <div className="w-[90vw] font-sans max-w-3xl h-auto backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-xl flex gap-4 items-center justify-center text-white">
      <motion.div
        className="flex w-1/2 flex-col items-left gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex gap-2 items-center">
          <img
            src={profile.imageUrl}
            alt=""
            className="size-12 rounded-full hover:scale-110 transition-all duration-200"
          />
          <h1 className="text-3xl font-bold text-white">{profile.name}</h1>
        </div>
        <h2 className="text-lg text-gray-300 mb-4">{profile.job}</h2>

        <div className="text-white space-y-1 border-t border-gray-600 pt-3 mt-1">
          <p className="flex gap-2 items-center text-lg hover:text-blue-500">
            <IoMail />
            {profile.email}
          </p>
          <p className="flex gap-2 items-center text-lg hover:text-blue-500">
            <IoCall />
            {profile.phone}
          </p>
        </div>
        <div className="flex gap-2 mt-2 p-2 border-t border-gray-600">
          {profile.interests.map((interest, index) => (
            <InterestTags key={index} interest={interest} />
          ))}
        </div>
      </motion.div>

      <MapView name={profile.name} lat={profile.lat} lng={profile.lng} />
    </div>
  );
};

export default ProfileModal;
