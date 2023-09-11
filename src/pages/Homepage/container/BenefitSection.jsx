import React from "react";

const BenefitSection = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full md:w-1/2 xl:w-1/3 mx-auto">
        <p className="text-base xl:text-lg font-medium text-red-600 text-center tracking-[0.3em]">
          WHAT WE SERVE
        </p>
        <h2 className="text-3xl xl:text-5xl md:text-4xl font-bold text-center py-5 leading-tight">
          Your Favorite Food Delivery Partner
        </h2>
      </div>
      <div className="grid grid-col-1 md:grid-cols-3 gap-2 xl:gap-32 md:gap-10 my-4">
        <div className="flex flex-col xl:px-24 px-10">
          <img src="src/assets/benefit-1.png" className="py-5" />
          <p className="text-2xl font-bold text-center pb-3">Easy To Order</p>
          <p className="text-lg text-center">
            You only need a few steps in ordering foods
          </p>
        </div>
        <div className="flex flex-col xl:px-24 px-10">
          <img src="src/assets/benefit-2.png" className="py-5" />
          <p className="text-2xl font-bold text-center pb-3">
            Fastest Delivery
          </p>
          <p className="text-lg text-center">
            Delivery that is always ontime even faster
          </p>
        </div>
        <div className="flex flex-col xl:px-24 px-10">
          <img src="src/assets/benefit-3.png" className="py-5" />
          <p className="text-2xl font-bold text-center pb-3">Best Quality</p>
          <p className="text-lg text-center">
            Not only fast for us quality is also number one
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitSection;
