import React from "react";
import { UiSaleCart } from "../../UI/UiSaleCart";
import { saleCartData } from "../../utils/constant";

export const DiscountProduct = () => {
  return (
    <div className="px-16 mt-8">
      <p className="text-black text-xl font-semibold">Аукционные товары</p>
      <div className="carousel carousel-center max-w-full p-6 space-x-24 bg-neutral rounded-box">
        {saleCartData.map((el, index) => (
          <div key={index} className="mx-2">
            <div className="carousel-item">
              <UiSaleCart
                Icon={el.Icon}
                image={el.image}
                title={el.title}
                discountPrice={el.discountPrice}
                availability={el.availability}
                set={el.set}
                discount={el.discount}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
