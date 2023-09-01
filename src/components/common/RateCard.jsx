import React from "react";
import { Icon } from "@iconify/react";

const RateCard = () => {
  return (
    <div>
      <div className="flex gap-3">
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-xl">Theresa Jordan</p>
          <p className="text-gray-700">Food Enthusiast</p>
        </div>
      </div>
      <div className="flex mt-4 items-center">
        <Icon
          icon="basil:star-solid"
          className="text-yellow-500 text-lg mr-1"
        />
        <Icon
          icon="basil:star-solid"
          className="text-yellow-500 text-lg mr-1"
        />
        <Icon
          icon="basil:star-solid"
          className="text-yellow-500 text-lg mr-1"
        />
        <Icon
          icon="basil:star-solid"
          className="text-yellow-500 text-lg mr-1"
        />
        <Icon
          icon="basil:star-outline"
          className="text-yellow-500 text-lg mr-1"
        />
        <p className="font-bold px-2">4,8</p>
      </div>
    </div>
  );
};

export default RateCard;
