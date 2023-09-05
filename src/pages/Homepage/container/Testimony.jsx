import React from "react";
import RateCard from "../../components/common/RateCard";
import StackedRateCard from "../../components/common/StackedRateCard";

const Testimony = () => {
  return (
    <div className="flex gap-28">
      <div className="w-[80%] h-auto relative">
        <img src="src/assets/Testimony-Banner.png" />
        <div className="absolute right-0 bottom-0 bg-white px-4 py-6 rounded-2xl shadow-lg">
          <StackedRateCard />
        </div>
      </div>
      <div className="flex flex-col justify-center mt-20">
        <p className="text-lg font-medium text-start text-red-600 tracking-[0.3em]">
          WHAT THEY SAY
        </p>
        <h2 className="text-5xl font-bold text-start py-5 leading-tight w-[90%]">
          What Our Customers Say About Us
        </h2>
        <p className="text-xl font-medium text-gray-800 w-[85%] py-1">
          “Mudocafe is the best. Besides the many and delicious meals, the
          service is also very good, especially in the very fast delivey. I
          highly recommend Mudocafe to you”.
        </p>
        <div className="mt-10">
          <RateCard />
        </div>
      </div>
    </div>
  );
};

export default Testimony;
