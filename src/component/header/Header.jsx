import React from "react";
import { InputUi } from "../UI/Input";
import { ReactComponent as Basket } from "../assats/icons/Cart.svg";
import { ReactComponent as User } from "../assats/icons/Profile.svg";
import { ReactComponent as Image } from "../assats/icons/Group.svg";
import { ReactComponent as Line } from "../assats/icons/Line 1.svg";
import { ReactComponent as Burger } from "../assats/icons/Burger.svg";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-around py-5 fixed z-10 w-full h-15 bg-[#0063a9] top-0">
      <Image />
      <div className="flex gap-1 items-center justify-center cursor-pointer sm:w-[137px] h-[40px] sm:rounded-full bg-indigo-300 text-white font-bold">
        <Burger />
        <p className="hidden sm:block">Каталог</p>
      </div>
      <div className="mt-3 sm:mt-0">
        <InputUi
          width="100%"
          height="40px"
          borderradius="62.5rem"
          background="#fff"
          placeholder="Поиск"
        />
      </div>
      <div className="flex gap-2 mt-3 sm:mt-0">
        <div className="flex flex-col text-center sm:text-left">
          <span className="text-white text-xs font-normal">
            Добро пожаловать
          </span>
          <span className="text-white font-normal text-xs">
            Вход/Регистрация
          </span>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center justify-center w-[30px] bg-white h-[30px] rounded-full cursor-pointer">
            <User />
          </div>
          <Line className="hidden sm:block" />
          <div className="flex items-center justify-center w-[30px] h-[30px] bg-white rounded-full cursor-pointer">
            <Basket />
          </div>
          <div className="flex relative right-4 bottom-1 items-center justify-center w-3 h-3 rounded-full text-white text-xs bg-red-600">
            2
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
