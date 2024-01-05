import React from "react";
import { UiCart } from "../../UI/UiCart";
import { dataCart, dataCarts } from "../../utils/constant";

export const Categories = () => {
  return (
    <div className="px-16 mt-12">
      <p className="text-black text-2xl font-semibold">Категории</p>
      <div className="flex justify-between ">
        <div className="carousel carousel-center max-w-full p-6 space-x-24 bg-white rounded-box">
          {dataCart.map((el, index) => (
            <div className="carousel-item">
              <UiCart key={index} title={el.title} image={el.image} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="carousel carousel-center max-w-full p-6 space-x-24 bg-white rounded-box">
          {dataCarts.map((el, index) => (
            <div className="carousel-item">
              <UiCart key={index} title={el.title} image={el.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
