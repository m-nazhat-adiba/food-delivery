import React from "react";
import Button from "../../common/Button";
import { Link } from "react-router-dom";

const Navlist = () => {
  return (
    <div className="flex gap-2">
      <Button variant="link">Why Us?</Button>
      <Button variant="link">Services</Button>
      <Link to={"/menus"}>
        <Button variant="link">Menu</Button>
      </Link>
      <Button variant="link">Contact</Button>
    </div>
  );
};

export default Navlist;
