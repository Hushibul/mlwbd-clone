import React from "react";
import { AiFillStar } from "react-icons/ai";

const HorizontalMovieCard = ({ image, title, rating, year }) => {
  const string = JSON.stringify(title);
  const str = string.substring(0, 28);
  const last = str.replace(/[""]/g, "");
  return (
    <div className="flex group my-4 overflow-hidden bg-black">
      <img
        className="h-[108px] group-hover:scale-110 group-hover:rotate-1 duration-300"
        src={image}
        alt=""
      />
      <div className="py-3 px-3">
        <h5 className="text-sm text-white">{last + "..."}</h5>
        <h5 className="text-xs text-gray-600 py-1 font-bold">{year}</h5>
        <div className="py-2 flex">
          <AiFillStar className="text-white text-sm group-hover:text-red-600" />
          <p className="text-xs text-white">{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalMovieCard;
