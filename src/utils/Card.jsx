import React from "react";

export default function Card({ description, title, image }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border-2  text-center h-52 w-52 shadow-md ">
      <img src={image} alt={title} className="w-24 h-24 m-1" />
      <h1 className="text-center text-2xl">{title}</h1>
      {/* <p className="text-center text-xl">{description}</p> */}
    </div>
  );
}
