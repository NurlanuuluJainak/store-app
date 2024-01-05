import React from "react";

export const UiCart = ({ title, image }) => {
  return (
    <div className="w-48 h-56 rounded-md bg-white p-4 shadow-md shadow-cyan-500/50 transition-transform hover:scale-105">
      <div className="flex flex-col">
        <span className="text-black text-base font-medium">{title}</span>
        <span className="text-gray-600 text-sm font-normal">3000 товаров</span>
      </div>
      <div className="flex justify-end items-center h-full">
        <img className="object-cover" src={image} alt="img" />
      </div>
    </div>
  );
};
