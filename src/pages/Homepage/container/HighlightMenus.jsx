import React, { useEffect, useState } from "react";
import { ProductList } from "../../../components/FoodList";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Promo from "../../../assets/promo-banner.png";

const HighlightMenus = () => {
  const [filter, setFilter] = useState("");
  const handleFilter = (filter = "main-dish") => {
    switch (filter) {
      case "main-dish":
        setFilter("main-dish");
        break;
      case "beverage":
        setFilter("beverage");
        break;
      default:
        null;
    }
  };
  useEffect(() => {
    handleFilter();
  }, []);

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col w-full md:w-1/2 mx-auto mb-10">
        <p className="text-base xl:text-lg font-medium text-red-600 text-center tracking-[0.3em]">
          OUR MENU
        </p>
        <h2 className="text-3xl xl:text-5xl md:text-4xl font-bold text-center py-5 leading-tight">
          Menu That Always Make You to Fall in Love
        </h2>
      </div>
      <div className="flex flex-col gap-14">
        <div>
          <img src={Promo} />
        </div>
        <div className="flex flex-col md:flex-row gap-16 lg:gap-32 ">
          <div className="flex flex-row justify-center md:justify-start md:flex-col w-full md:w-80 gap-2">
            <button
              onClick={() => handleFilter("main-dish")}
              className={clsx(
                "group flex flex-col md:flex-row items-center md:text-xl px-4 py-4 rounded-xl md:rounded-full",
                filter === "main-dish"
                  ? "bg-red-600 text-white"
                  : "hover:text-red-600"
              )}
            >
              <div
                className={clsx(
                  "group-hover:bg-white p-3 rounded-full md:mr-2",
                  filter === "main-dish" ? "bg-white text-white" : null
                )}
              >
                <Icon
                  icon="akar-icons:utensils"
                  className="text-black group-hover:text-red-600"
                />
              </div>
              Main Dish
            </button>
            <button
              onClick={() => handleFilter("beverage")}
              className={clsx(
                "group flex flex-col md:flex-row items-center md:text-xl px-4 py-4 rounded-xl md:rounded-full",
                filter === "beverage"
                  ? "bg-red-600 text-white"
                  : "hover:text-red-600"
              )}
            >
              <div
                className={clsx(
                  "group-hover:bg-white p-3 rounded-full md:mr-2",
                  filter === "beverage" ? "bg-white text-white" : null
                )}
              >
                <Icon
                  icon="akar-icons:wine-glass"
                  className="text-black group-hover:text-red-600"
                />
              </div>
              Beverage
            </button>
            <Link to={"Menus"}>
              <button
                className={clsx(
                  "group flex flex-col md:flex-row items-center md:text-xl px-4 py-4 rounded-xl md:rounded-full",
                  filter === "" ? "bg-red-600 text-white" : "hover:text-red-600"
                )}
              >
                <div
                  className={clsx(
                    "group-hover:bg-white p-3 rounded-full md:mr-2",
                    filter === "" ? "bg-white text-white" : null
                  )}
                >
                  <Icon
                    icon="akar-icons:dot-grid-fill"
                    className="text-black group-hover:text-red-600"
                  />
                </div>
                Show All
              </button>
            </Link>
          </div>
          <ProductList filter={filter} />
        </div>
      </div>
    </div>
  );
};

export default HighlightMenus;
