/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const SliderCard = ({ image, title, year }) => {
  return (
    <div className="w-3/6 h-[200px] px-2 relative">
      <div className="w-full h-[200px]">
        <img className="w-full" src={image} alt="image slide" />
        <p className="bg-red-600 px-2 py-1 text-white absolute z-10 bottom-2 right-2 text-xs">
          MOVIE
        </p>
      </div>
      <h4 className="text-white z-10 absolute bottom-6 left-5">{title}</h4>
      <p className="text-xs text-white z-10 absolute bottom-2 left-5">{year}</p>
    </div>
  );
};

export default SliderCard;
