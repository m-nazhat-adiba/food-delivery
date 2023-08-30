import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

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
    <div>
      {foodData.map((item) => (
        <ProductCard productData={item} key={item.id} />
      ))}
    </div>
  );
};
