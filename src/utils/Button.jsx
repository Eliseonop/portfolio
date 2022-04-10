import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-cyan-500 font-bold text-xl text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-500 duration-500">
      {children}
    </button>
  );
};

export default Button;
