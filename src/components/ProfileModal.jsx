import React from "react";

const ProfileModal = ({ profile }) => {
  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 flex gap-4 items-center justify-center">
      {/* Profile Content */}
      <div className="flex-col flex gap-2 items-center">
        <h1 className="text-4xl">{profile.name}</h1>
        <img src={profile.imageUrl} alt="" className="size-24" />
      </div>
      {/* Map */}
      <div>MAP</div>
    </div>
  );
};

export default ProfileModal;
