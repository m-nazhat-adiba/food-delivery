import React from "react";
import Button from "../common/Button";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const NavUtility = () => {
  return (
    <div className="flex gap-5 items-center bg-white">
      <Icon icon="akar-icons:search" className="text-2xl" />
      <Icon icon="akar-icons:shopping-bag" className="text-2xl" />
      <Link to={"/authentication"}>
        <Button variant="primary">Login</Button>
      </Link>
    </div>
  );
};

export default NavUtility;
