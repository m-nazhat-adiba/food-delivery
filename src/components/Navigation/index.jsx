import React from "react";
import { Navlist } from "./Navlist";
import { NavUtility } from "./NavUtility";

export const NavBar = () => {
  return (
    <div className="flex justify-between py-5">
      <img src="src/assets/icon.png" className="h-12 w-auto" />
      <Navlist />
      <NavUtility />
    </div>
  );
};
