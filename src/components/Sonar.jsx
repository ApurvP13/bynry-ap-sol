import React from "react";
import { IoIosWarning } from "react-icons/io";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Sonar = ({ variant, text }) => {
  const bgColor = variant === "warning" ? "bg-red-500" : "bg-emerald-500";
  const textColor = variant === "warning" ? "text-rose-300" : "text-green-300";
  return (
    <div
      className={`${bgColor} ${textColor} w-72 p-2 h-24 rounded-xl items-center justify-center flex gap-4`}
    >
      {variant === "warning" ? (
        <IoIosWarning className="fill-red-700 text-xl" />
      ) : (
        <IoCheckmarkDoneCircle className="fill-green-800 text-xl" />
      )}
      <p className="font-bold uppercase tracking-wide text-sm">{text}</p>
    </div>
  );
};

export default Sonar;
