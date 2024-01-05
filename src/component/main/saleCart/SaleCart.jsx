import React from "react";
import { UiSaleCart } from "../../UI/UiSaleCart";
import { saleCartData } from "../../utils/constant";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SaleCart = () => {
  return (
    <div className="px-16 mt-8">
      <p className="text-black text-xl font-semibold">Хиты продаж</p>
      <div className="carousel carousel-center max-w-full p-6 space-x-24 bg-neutral rounded-box">
        {saleCartData.map((el) => (
          <div className="carousel-item">
            <UiSaleCart
              Icon={el.Icon}
              image={el.image}
              title={el.title}
              price={el.price}
              availability={el.availability}
              set={el.set}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
