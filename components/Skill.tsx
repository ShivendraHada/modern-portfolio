"use client";

import NextLogo from "@/assets/images/next-logo.png";
import Image from "next/image";

function Skill() {
  return (
    <div className="group relative flex cursor-pointer m-4">
      <Image
        src={NextLogo.src}
        alt="skill logo"
        className="w-24 h-24 rounded-full object-cover border border-gray-500 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        width="96"
        height="96"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
