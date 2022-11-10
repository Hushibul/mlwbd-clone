import React from "react";
import { IoIosArrowForward } from "react-icons/io";
const Category = ({ category }) => {
  return (
    <div className="flex items-center w-full py-2 border-b-[1px] border-gray-600 group">
      <h2 className="text-xs text-white px-2 font-black">
        <IoIosArrowForward className="" />{" "}
      </h2>
      <h4 className="text-sm text-gray-300 group-hover:text-red-600">
        {category}
      </h4>
    </div>
  );
};

export default Category;
