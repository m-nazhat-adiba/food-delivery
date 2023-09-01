import React from "react";
import Button from "../common/Button";
import { Icon } from "@iconify/react";

const NavUtility = () => {
  return (
    <div className="flex gap-5 items-center bg-white">
      <Icon icon="akar-icons:search" className="text-2xl" />
      <Icon icon="akar-icons:shopping-bag" className="text-2xl" />
      <Button variant="primary">Login</Button>
    </div>
  );
};

export default NavUtility;
