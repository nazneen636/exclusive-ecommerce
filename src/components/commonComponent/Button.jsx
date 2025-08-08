import React from "react";

const Button = ({ btnText, className }) => {
  return (
    <button
      className={`px-[48px]! py-4! bg-red-db4444 rounded text-md font-poppins font-medium text-white-ffffff hover:opacity-75 cursor-pointer ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
