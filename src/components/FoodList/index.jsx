import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductCard } from "./container/ProductCard";

export const ProductList = () => {
  const [foodData, setFoodData] = useState([]);

  const getFoodData = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => {
        setFoodData(res?.data.data.Data);
      })
      .catch((err) => {
        console.log("failed to fetch data", err);
      });
  };

  useEffect(() => {
    getFoodData();
  }, []);
  console.log(foodData);

  return (
    <div className="w-full grid grid-cols-5 gap-10">
      {foodData.map((item) => (
        <ProductCard productData={item} key={item.id} />
      ))}
    </div>
  );
};
