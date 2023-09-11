import React from "react";
import Button from "../../../components/common/Button";

const GetApp = () => {
  return (
    <div className="flex flex-col-reverse gap-12 md:gap-0 md:flex-row bg-red-100 px-4 md:px-8 lg:px-20 rounded-2xl">
      <div className="flex flex-col justify-center items-center md:items-start md:my-6">
        <p className="text-base xl:text-lg font-medium text-red-600 text-center tracking-[0.3em]">
          DOWNLOAD APP
        </p>
        <h2 className="text-3xl xl:text-5xl md:text-4xl font-bold text-center md:text-start py-5 leading-tight md:w-[90%]">
          Get Started With Mudocafe Today!
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-center md:text-start font-medium text-gray-800 md:w-[75%] py-1">
          Discover food wherever, whenever and get your food delivered quickly
        </p>
        <div className="w-full md:w-1/2 my-6 md:mt-4 md:mb-0">
          <Button variant="primary">Get The App</Button>
        </div>
      </div>
      <div className="md:w-[100%] h-fit mt-auto">
        <img src="src/assets/get-the-app.png" />
      </div>
    </div>
  );
};

export default GetApp;
