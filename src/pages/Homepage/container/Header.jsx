import React from "react";
import Button from "../../../components/common/Button";
import StackedRateCard from "../../../components/common/StackedRateCard";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between my-2 w-full">
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="xl:text-7xl md:text-4xl text-2xl font-bold leading-tight text-center md:text-left">
            Be The Fastest in Delivering Your
            <span className="text-red-600"> Food</span>
          </h1>
          <p className="xl:text-lg md:text-base text-sm md:text-left text-center font-medium my-4 md:w-[90%]">
            Our job is to filling your tummy with delicious food and with fast
            nad free delivery
          </p>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Button variant="primary">Sign Up</Button>
          </div>
          <div className="xl:mt-20 md:mt-10 mt-5">
            <StackedRateCard />
          </div>
        </div>
        <img
          src="./src/assets/Banner.png"
          className="xl:w-[60%] md:w-[50%] w-full h-full "
        />
      </div>
    </div>
  );
};

export default Header;
