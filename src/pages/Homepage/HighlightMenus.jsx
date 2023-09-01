import React from "react";
import { ProductList } from "../../components/FoodList";
import Button from "../../components/common/Button";

const HighlightMenus = () => {
  return (
    <div className="flex flex-col px-16">
      <div className="flex flex-col w-1/2 mx-auto mb-10">
        <p className="text-lg font-medium text-red-600 text-center tracking-[0.3em]">
          OUR MENU
        </p>
        <h2 className="text-5xl font-bold text-center py-5 leading-tight">
          Menu That Always Make You to Fall in Love
        </h2>
      </div>
      <div className="flex flex-col gap-14">
        <div>
          <img src="src/assets/promo-banner.png" />
        </div>
        <ProductList />
      </div>
    </div>
  );
};

export default HighlightMenus;
