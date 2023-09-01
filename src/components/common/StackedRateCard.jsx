import React from "react";
import { Icon } from "@iconify/react";

const StackedRateCard = () => {
  return (
    <div className="flex gap-5">
      <div className=" flex -space-x-4 overflow-hidden">
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-lg font-medium">Our Happy Customer</p>
        <div className="flex items-center">
          <Icon
            icon="basil:star-solid"
            className="text-yellow-500 text-lg mr-1"
          />
          <p className="text-base font-medium">
            4,9{" "}
            <span className="text-gray-700 font-normal">(12.5k Reviews)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StackedRateCard;
