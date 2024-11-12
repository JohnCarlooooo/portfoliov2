import React from "react";

const PillButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      className={
        "bg-orange text-customGray rounded-full w-fit px-4 py-2 text-xl hover:scale-105 duration-300 cursor-none " +
        className
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PillButton;
