import React from "react";
import Button from "../../../components/common/Button";

const GetApp = () => {
  return (
    <div className="flex bg-red-100 px-20 rounded-2xl">
      <div className="flex flex-col justify-center">
        <p className="text-lg font-medium text-start text-red-600 tracking-[0.3em]">
          DOWNLOAD APP
        </p>
        <h2 className="text-5xl font-bold text-start py-5 leading-tight w-[90%]">
          Get Started With Mudocafe Today!
        </h2>
        <p className="text-xl font-medium text-gray-800 w-[75%] py-1">
          Discover food wherever, whenever and get your food delivered quickly
        </p>
        <br></br>
        <Button variant="primary">Get The App</Button>
      </div>
      <div className="w-[60%]">
        <img src="src/assets/get-the-app.png" />
      </div>
    </div>
  );
};

export default GetApp;
