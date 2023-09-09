import React from "react";

const Checkout = ({ productData }) => {
  return (
    <div className="flex flex-col h-full justify-between bg-white border-2 shadow-xl rounded-lg p-5">
      <div className="">
        <h1 className="text-2xl font-bold mb-5 pb-4 border-b-2 border-gray-300">
          Checkout
        </h1>
        <ul className="flex flex-col gap-5">
          <li className="flex justify-between">
            <p className="font-semibold text-lg">
              {productData.name}
              <br />
              <p className="font-normal">Deluxe</p>
            </p>
            <p className="font-semibold text-lg">${productData.price * 1.5}</p>
          </li>
          <li className="flex justify-between">
            <p className="font-semibold text-lg">
              {productData.name}
              <br />
              <p className="font-normal">Regular</p>
            </p>
            <p className="font-semibold text-lg">${productData.price}</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col justify-between my-5">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold">Subtotal </p>
            <p className="font-semibold text-xl">
              ${productData.price * 1.5 + productData.price}
            </p>
          </div>
          <p className="text-base font-normal">Extra charge may apply</p>
        </div>
        <button className="w-full py-3 rounded-xl bg-red-600 text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Checkout;
