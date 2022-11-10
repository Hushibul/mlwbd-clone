import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

const MainMovieCard = ({ image, title, level, date, rating }) => {
  const string = JSON.stringify(title);
  const str = string.substring(0, 16);
  const last = str.replace(/[""]/g, "");
  return (
    <div className="flex flex-col relative group duration-400 px-2 py-3">
      <div className="h-44 relative">
        <img src={image} alt="" className="h-44 w-full" />

        <div className="flex items-center absolute bottom-0 right-0 bg-slate-900 px-2 py-1">
          <AiFillStar className="text-yellow-400 text-base" />
          <p className="text-white text-xs pl-1">{rating}</p>
        </div>

        <p className="text-white text-[12px] absolute top-2 left-2 bg-red-600 px-2">
          {level}
        </p>
      </div>

      <h4 className="text-white text-sm">{last + "..."}</h4>

      <p className="text-gray-300 text-xs">{date}</p>

      <FaPlay className="text-white absolute text-4xl top-20 left-16 hidden group-hover:block" />
    </div>
  );
};

export default MainMovieCard;
