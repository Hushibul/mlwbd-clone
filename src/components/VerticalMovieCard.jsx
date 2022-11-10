import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

const VerticalMovieCard = ({ image, title, subtitle, year, rating }) => {
  const string = JSON.stringify(title);
  const str = string.substring(0, 16);
  const last = str.replace(/[""]/g, "");

  return (
    <div className="flex flex-col relative group duration-400 px-2">
      <div className="h-44 relative">
        <img src={image} alt="" className="h-44 w-full" />

        <p className="text-white text-[10px] absolute top-0 left-0 bg-red-600 px-2 py-1">
          {subtitle}
        </p>

        <div className="flex items-center absolute bottom-0 right-0 bg-slate-900 px-2 py-1">
          <AiFillStar className="text-yellow-400 text-base" />
          <p className="text-white text-xs pl-1">{rating}</p>
        </div>
      </div>
      <h4 className="text-white text-sm">{last + "..."}</h4>

      <p className="text-white text-sm">{year}</p>

      <FaPlay className="text-white absolute text-4xl top-20 left-16 hidden group-hover:block" />
    </div>
  );
};

export default VerticalMovieCard;
