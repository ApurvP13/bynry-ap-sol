import React from "react";

const ListSkeleton = () => {
  return (
    <div className="w-full flex justify-between items-center bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl animate-pulse">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white/30" />
        <div className="h-4 w-32 bg-white/30 rounded" />
      </div>
      <div className="w-10 h-10 bg-red-800/40 rounded-full" />
    </div>
  );
};

export default ListSkeleton;
