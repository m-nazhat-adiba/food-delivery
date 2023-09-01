import React from "react";
import Button from "../common/Button";

const Navlist = () => {
  return (
    <div className="flex gap-2">
      <Button variant="link">Why Us?</Button>
      <Button variant="link">Services</Button>
      <Button variant="link">Menu</Button>
      <Button variant="link">Contact</Button>
    </div>
  );
};

export default Navlist;
