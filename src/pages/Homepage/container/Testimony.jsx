import React from "react";
import RateCard from "../../../components/common/RateCard";
import StackedRateCard from "../../../components/common/StackedRateCard";
const Testimony = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-10 lg:gap-28">
      <div className="w-[85%] md:w-full lg:w-[80%] h-auto relative">
        <img src="src/assets/Testimony-Banner.png" />
        <div className="absolute bottom-0 right-0 md:bottom-auto lg:bottom-0 bg-white px-4 py-6 rounded-2xl shadow-lg">
          <StackedRateCard />
        </div>
      </div>
      <div className="flex flex-col justify-center mt-20">
        <p className="text-base xl:text-lg font-medium text-red-600 text-center md:text-start tracking-[0.3em]">
          WHAT THEY SAY
        </p>
        <h2 className="text-3xl xl:text-5xl md:text-4xl font-bold text-center md:text-start py-5 leading-tight md:w-[90%]">
          What Our Customers Say About Us
        </h2>
        <p className="text-base md:text-xl text-center md:text-start font-medium text-gray-800 md:w-[85%] py-1">
          “Mudocafe is the best. Besides the many and delicious meals, the
          service is also very good, especially in the very fast delivey. I
          highly recommend Mudocafe to you”.
        </p>
        <div className="mt-10 flex justify-center md:justify-start">
          <RateCard />
        </div>
      </div>
    </div>
  );
};

export default Testimony;
