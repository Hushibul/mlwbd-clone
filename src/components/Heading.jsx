import React from "react";

const Heading = ({ heading, numbers }) => {
  return (
    <div className="py-4 flex justify-between items-center">
      <h2 className="border-l-4 border-l-red-600 text-white px-2 text-xl">
        {heading}
      </h2>
      <div className="flex px-2">
        <p className="px-2 text-sm text-gray-400">{numbers}</p>
        <button className="bg-red-600 px-2 rounded-sm  text-[9px] text-white">
          SEE ALL
        </button>
      </div>
    </div>
  );
};

export default Heading;
