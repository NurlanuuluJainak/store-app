import React from "react";
import { adressCart } from "../../utils/constant";
import { ReactComponent as Group } from "../../assats/icons/Group 480964073.svg";
import { ReactComponent as Location } from "../../assats/icons/Location.svg";
import { ReactComponent as Clock } from "../../assats/icons/Clock-Square.svg";
import { ReactComponent as Telephone } from "../../assats/icons/Vector 208.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const StoreAdress = () => {
  return (
    <div className="px-4 lg:px-16 mt-8 lg:mt-16">
      <p className="text-black text-2xl font-semibold mb-8">Адреса магазинов</p>
      <div className="flex flex-wrap justify-around gap-4 ">
        {adressCart.map((el, index) => (
          <div key={index} className="w-full lg:w-96 bg-white rounded-md p-4 shadow-lg shadow-cyan-500/50">
            <div className="flex items-center justify-between pb-4 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <Group />
                <div className="flex flex-col">
                  <span className="text-black text-lg font-medium">{el.title}</span>
                  <a href="./" className="text-blue-500 text-sm font-normal">
                    {el.text}
                  </a>
                </div>
              </div>
              {/* <ArrowForwardIconStyle /> */}
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Location />
              <p className="text-black text-base font-normal">{el.description}</p>
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex items-center gap-2">
                <Clock />
                <p className="text-black text-base font-normal">{el.time}</p>
              </div>
              <div className="flex items-center gap-2">
                <Telephone />
                <p className="text-black text-base font-normal">{el.number}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};