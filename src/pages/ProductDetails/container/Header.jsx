import React from "react";
import Button from "../../../components/common/Button";

function Header({ productData }) {
  console.log(productData);
  return (
    <div
      style={{ backgroundImage: `url(${productData.imageUrl})` }}
      className=" w-full h-auto bg-cover bg-right bg-no-repeat "
    >
      <div className="flex bg-black bg-opacity-70 w-full h-full">
        <div className="flex justify-between p-16 w-full items-center">
          <div className="flex gap-6">
            <img
              src={productData.imageUrl}
              className="w-64 h-64 object-cover rounded-xl"
            />
            <div className="flex flex-col">
              <Button variant="primary">Favorite</Button>
              <h1 className="text-white text-4xl mt-7">{productData.name}</h1>
              <p className="text-white text-lg mt-3 mb-5">
                {`${productData.type}`.charAt(0).toUpperCase() +
                  `${productData.type}`.slice(1)}
              </p>
              <div className="flex gap-10 text-white text-lg">
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
            </div>
          </div>
          <div className="flex flex-col border-dashed border-2 rounded-md p-6 h-28 text-white">
            <p className="font-medium text-xl">Offer</p>
            <p className="text-lg">
              50% off up to 20$ with code <strong>TRYNEW</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
