import React from "react";
import Navlist from "./container/Navlist";
import NavUtility from "./container/NavUtility";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between py-5">
      <Link to={"/"}>
        <img src="/src/assets/icon.png" className="h-12 w-auto" />
      </Link>
      <Navlist />
      <NavUtility />
    </div>
  );
};

export default NavBar;
