import React from "react";
import { Icon } from "@iconify/react";

export const ProductCard = ({ productData, handleDetail }) => {
  return (
    <div
      onClick={() => handleDetail(productData.id)}
      className="group hover:shadow-2xl hover:scale-110 mr-6 duration-300 transition-all bg-[#fff] w-full relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
    >
      <div className="absolute flex justify-between p-4 w-full opacity-0 top-0 group-hover:opacity-100">
        <Icon className="text-xl text-[#AD7D52]" icon="akar-icons:heart" />
        <div className="float-right flex items-center">
          <Icon className="text-xl text-[#AD7D52]" icon="akar-icons:alarm" />
          <span className="text-xs ml-1 align-middle text-[#AD7D52]">
            15 min
          </span>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${productData.imageUrl})`,
        }}
        className={`invisible bg-cover bg-center bg-no-repeat w-full h-44 xl:h-[235px] rounded-tl-xl rounded-tr-xl`}
      ></div>
      <div
        style={{
          backgroundImage: `url(${productData.imageUrl})`,
        }}
        className={`duration-200 ease-out bg-cover bg-center bg-no-repeat w-full absolute h-44 xl:h-[235px] rounded-tl-xl rounded-tr-xl top-0 group-hover:h-full group-hover:opacity-30`}
      ></div>
      <div className="z-[2] bg-[#fff] rounded-bl-xl rounded-br-xl pt-3 pb-2 xl:pb-4 px-4 xl:px-6 group-hover:bg-transparent group-hover:relative">
        <span className="uppercase text-xs md:text-sm tracking-[2px] font-medium text-[#868686] text-left">
          {productData.type}
        </span>
        <h3 className="mt-1 mb-3 text-gray-800 text-left font-bold text-lg md:text-xl">
          {productData.name}
        </h3>
      </div>
    </div>
  );
};
