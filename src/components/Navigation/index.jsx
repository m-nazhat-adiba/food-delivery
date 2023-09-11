import React, { useState } from "react";
import Navlist from "./container/Navlist";
import NavUtility from "./container/NavUtility";
import NavUtilityLg from "./container/NavUtilityLg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import clsx from "clsx";

const NavBar = () => {
  const [navBarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row justify-between py-5 relative">
      <div className="flex w-full lg:w-auto justify-between">
        <Link className="flex my-auto" to={"/"}>
          <img src="/src/assets/icon.png" className="h-8 md:h-12 w-auto" />
        </Link>
        <div className="flex gap-3 items-center">
          <NavUtilityLg />
          <button
            onClick={() => setNavbarOpen(!navBarOpen)}
            className="text-4xl block lg:hidden"
          >
            <Icon icon="akar-icons:three-line-horizontal" />
          </button>
        </div>
      </div>
      <div
        className={clsx(
          "lg:flex lg:gap-10 gap-3",
          navBarOpen
            ? "flex flex-col absolute z-50 top-20 w-full pb-4 px-4 rounded-lg bg-white shadow-lg"
            : "hidden"
        )}
      >
        <Navlist />
        <NavUtility />
      </div>
    </div>
  );
};

export default NavBar;
