import React from "react";

const Instruction = ({ date, month, title, description }) => {
  return (
    <div className="flex border-b-[1px] border-gray-600 my-3">
      <div className="flex flex-col w-[30px] items-center justify-start px-4 ml-3">
        <h1 className="text-2xl text-red-600">{date}</h1>
        <p className="text-gray-600 text-[10px] uppercase">{month}</p>
      </div>
      <div className="px-8">
        <h3 className="text-base text-gray-300">{title}</h3>
        <p className="text-sm text-gray-300 py-3">{description}</p>
      </div>
    </div>
  );
};

export default Instruction;
