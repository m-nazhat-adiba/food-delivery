import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "../../../components/FoodList/container/ProductCard";
import DefaultPagination from "../../../components/common/Pagination";

function ProductMenu({ handleDetail }) {
  const [menus, setMenus] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(1);

  const getMenus = () => {
    axios
      .get(
        `https://api.mudoapi.tech/menus?perPage=10&page=${currentPage}&name=`
      )
      .then((res) => {
        const data = res?.data?.data?.Data;
        setCurrentPage(res.data.data.currentPage);
        setNextPage(res.data.data.nextPage);
        setMenus(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenus();
  }, [currentPage]);

  return (
    <div className="w-full flex flex-col items-center gap-12">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
        {menus.map((item) => (
          <ProductCard
            handleDetail={handleDetail}
            productData={item}
            key={item.id}
          />
        ))}
      </div>
      <DefaultPagination
        currentState={currentPage}
        nextState={nextPage}
        handleState={setCurrentPage}
      />
    </div>
  );
}

export default ProductMenu;
