import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductCard } from "./container/ProductCard";

export const ProductList = ({ filter }) => {
  const [foodData, setFoodData] = useState([]);

  const getFoodData = () => {
    axios
      .get(`https://api.mudoapi.tech/menus?perPage=4&page=1&type=${filter}`)
      .then((res) => {
        setFoodData(res?.data.data.Data);
      })
      .catch((err) => {
        console.log("failed to fetch data", err);
      });
  };

  useEffect(() => {
    getFoodData();
  }, [filter]);
  console.log(foodData);

  return (
    <div className="w-full grid grid-cols-4 gap-10">
      {foodData.map((item) => (
        <ProductCard productData={item} key={item.id} />
      ))}
    </div>
  );
};
