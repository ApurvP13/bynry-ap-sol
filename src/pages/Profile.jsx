import React, { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard";
import ProfileModal from "../components/ProfileModal";
import CardSkeleton from "../components/CardSkeleton"; // 👈 Import skeleton
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Profile = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 Track loading state

  useEffect(() => {
    setTimeout(() => {
      fetch("/api/profiles")
        .then((res) => res.json())
        .then((data) => {
          setProfiles(data.profiles);
          setLoading(false); // 👈 Stop loading after fetch
        });
    }, 2000); // 👈 2s delay to showcase skeletons
  }, []);

  return (
    <div className="relative flex flex-col gap-4 font-sans items-center">
      <motion.h1
        className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Profiles
      </motion.h1>

      <motion.div
        className="py-4 flex flex-wrap gap-4 items-center justify-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {loading
          ? [...Array(6)].map((_, index) => (
              <motion.div key={index} variants={item}>
                <CardSkeleton />
              </motion.div>
            ))
          : profiles.map((profile) => (
              <motion.div key={profile.id} variants={item}>
                <ProfileCard
                  onClick={() => setSelectedProfile(profile)}
                  profile={profile}
                />
              </motion.div>
            ))}
      </motion.div>

      {selectedProfile && (
        <div
          onClick={() => setSelectedProfile(null)}
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-md w-full h-full flex items-center justify-center"
        >
          <div onClick={(e) => e.stopPropagation()}>
            <ProfileModal profile={selectedProfile} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
