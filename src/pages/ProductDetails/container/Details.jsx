import React from "react";
import Button from "../../../components/common/Button";

const Details = ({ productData }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col my-5">
        <p className="font-bold text-lg">Description</p>
        <p>{productData.description}</p>
      </div>
      <div className="flex flex-col my-6 gap-8">
        <div className="flex justify-between border-2 border-gray-300 p-4 relative">
          <div className="flex flex-col w-1/2 xl:max-w-lg">
            <p className="font-bold text-lg mb-2">Deluxe</p>
            <p className="font-bold">${productData.price * 1.5}</p>
            <p className="my-4">
              One menu to rule them all! Grab this mega saver combo. This is
              just bliss on a plate!
            </p>
          </div>
          <div
            style={{
              backgroundImage: `url(${productData.imageUrl})`,
            }}
            className="flex w-36 h-36 my-auto bg-cover rounded-lg relative justify-center"
          >
            <div className="absolute -bottom-3">
              <Button variant="primary">Add</Button>
            </div>
          </div>
        </div>
        <div className="flex justify-between border-2 border-gray-300 p-4 relative">
          <div className="flex flex-col w-1/2 xl:max-w-lg">
            <p className="font-bold text-lg mb-2">Regular</p>
            <p className="font-bold">${productData.price}</p>
            <p className="my-4">
              One menu to rule them all! Grab this mega saver combo. This is
              just bliss on a plate!
            </p>
          </div>
          <div
            style={{
              backgroundImage: `url(${productData.imageUrl})`,
            }}
            className="flex my-auto w-36 h-36 bg-cover rounded-lg relative justify-center"
          >
            <div className="absolute -bottom-3">
              <Button variant="primary">Add</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
