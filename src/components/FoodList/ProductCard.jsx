import React from "react";
import { Icon } from "@iconify/react";

export const ProductCard = () => {
  return (
    <div className="group hover:shadow-2xl hover:scale-110 mr-6 duration-300 transition-all bg-[#fff] w-full relative rounded-xl overflow-hidden shadow-lg ">
      <div className="absolute flex justify-between p-4 w-full opacity-0 top-0 group-hover:opacity-100">
        <Icon className="text-xl text-[#AD7D52]" icon="akar-icons:heart" />
        <div className="float-right flex items-center">
          <Icon className="text-xl text-[#AD7D52]" icon="akar-icons:alarm" />
          {/* <svg
            className="w-4 align-middle ml-1 text-[#AD7D52]"
            viewBox="0 0 24 24"
          >
            <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
          </svg> */}
          <span className="text-xs ml-1 align-middle text-[#AD7D52]">
            15 min
          </span>
        </div>
      </div>
      <div className="invisible bg-cover bg-center bg-no-repeat w-full h-[235px] rounded-tl-xl rounded-tr-xl bg-[url('https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')] "></div>
      <div className="duration-200 ease-out bg-cover bg-center bg-no-repeat w-full absolute h-[235px] rounded-tl-xl rounded-tr-xl top-0 group-hover:h-full group-hover:opacity-30 bg-[url('https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')]"></div>
      <div className="z-[2] bg-[#fff] rounded-bl-xl rounded-br-xl pt-3 pb-4 px-6 group-hover:bg-transparent group-hover:relative">
        <span className="uppercase text-sm tracking-[2px] font-medium text-[#868686] text-left">
          Recipe
        </span>
        <h3 className="mt-1 mb-3 text-gray-800 text-left font-bold text-xl">
          Crisp Spanish tortilla Matzo brei
        </h3>
      </div>
    </div>
  );
};
