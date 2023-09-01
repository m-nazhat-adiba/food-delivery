import React from "react";
import { NavBar } from "../components/Navigation/index";
import { Button } from "../components/common/Button";

export const Homepage = () => {
  return (
    <div className="container mx-auto">
      <NavBar />
      <div className="flex justify-between my-2 w-full">
        <div className="flex flex-col justify-center">
          <h1 className="text-7xl font-bold leading-tight">
            Be The Fastest in Delivering Your{" "}
            <span className="text-red-600">Food</span>
          </h1>
          <p className="text-lg font-medium my-4 w-[90%]">
            Our job is to filling your tummy with delicious food and with fast
            nad free delivery
          </p>
          <Button variant="primary">Sign Up</Button>
        </div>
        <img src="src/assets/Banner.png" className="w-[60%] h-auto " />
      </div>
    </div>
  );
};
