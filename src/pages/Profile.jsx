import React, { useState } from "react";
import profiles from "../data/data";
import ProfileCard from "../components/ProfileCard";
import ProfileModal from "../components/ProfileModal";

const Profile = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  return (
    <div className="relative flex flex-col gap-4 font-sans items-center">
      <h1 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent">
        Profiles
      </h1>
      <div className=" py-4 flex flex-wrap gap-4 items-center justify-center">
        {profiles.map((profile) => (
          <ProfileCard
            onClick={() => setSelectedProfile(profile)}
            key={profile.id}
            profile={profile}
          />
        ))}
      </div>

      {selectedProfile && (
        <div
          onClick={() => setSelectedProfile(null)}
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-md w-full h-full flex items-center justify-center"
        >
          <ProfileModal
            profile={selectedProfile}
            onClose={() => setSelectedProfile(null)}
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
