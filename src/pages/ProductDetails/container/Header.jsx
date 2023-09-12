import React from "react";
import Button from "../../../components/common/Button";
import { Icon } from "@iconify/react";

function Header({ productData }) {
  console.log(productData);
  return (
    <div
      style={{ backgroundImage: `url(${productData.imageUrl})` }}
      className="w-full h-auto bg-cover bg-right bg-no-repeat "
    >
      <div className="flex bg-black bg-opacity-70 w-full h-full">
        <div className="flex flex-col md:flex-row justify-between p-6 lg:p-8 xl:p-16 w-full items-center">
          <div className="flex gap-6 items-start w-full">
            <img
              src={productData.imageUrl}
              className="w-24 h-24 md:h-40 md:w-40 lg:h-56 lg:w-56 xl:w-64 xl:h-64 object-cover rounded-xl"
            />
            <div className="flex flex-col">
              <div className="hidden lg:flex w-1/2">
                <Button variant="primary">Favorite</Button>
              </div>
              <div className="flex lg:hidden bg-red-600 w-fit p-2 rounded-md">
                <Icon
                  icon="akar-icons:heart"
                  className=" text-white text-2xl"
                />
              </div>
              <h1 className="text-white text-xl lg:text-4xl mt-2 lg:mt-4 xl:mt-7">
                {productData.name}
              </h1>
              <p className="text-white text-sm lg:text-lg mt-0 lg:mt-3 mb-5">
                {`${productData.type}`.charAt(0).toUpperCase() +
                  `${productData.type}`.slice(1)}
              </p>
              <div className="md:flex gap-10 text-white text-base lg:text-lg hidden">
                <p>
                  30 Mins
                  <br />
                  Delivery Time
                </p>
                <p>
                  {productData.priceFormatted}
                  <br />
                  Price per serving
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-2 mb-6 mx-auto gap-10 text-white text-lg md:hidden">
            <p>
              30 Mins
              <br />
              Delivery Time
            </p>
            <div className="h-full w-1 bg-white" />
            <p>
              {productData.priceFormatted}
              <br />
              Price per serving
            </p>
          </div>
          <div className="flex flex-col border-dashed border-2 rounded-md p-4 xl:p-6 h-fit md:w-1/3 lg:w-auto text-white">
            <p className="font-medium text-lg lg:text-xl">Offer</p>
            <p className="text-base lg:text-lg">
              50% off up to 20$ with code <strong>TRYNEW</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
