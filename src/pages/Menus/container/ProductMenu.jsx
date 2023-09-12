import React from "react";
import { ProductCard } from "../../../components/FoodList/container/ProductCard";
import DefaultPagination from "../../../components/common/Pagination";

function ProductMenu({
  handleDetail,
  menus,
  currentPage,
  nextPage,
  setCurrentPage,
}) {
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
