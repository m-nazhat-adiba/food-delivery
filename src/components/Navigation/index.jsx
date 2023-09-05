import React from "react";
import Navlist from "./container/Navlist";
import NavUtility from "./container/NavUtility";

const NavBar = () => {
  return (
    <div className="flex justify-between py-5">
      <img src="src/assets/icon.png" className="h-12 w-auto" />
      <Navlist />
      <NavUtility />
    </div>
  );
};

export default NavBar;
