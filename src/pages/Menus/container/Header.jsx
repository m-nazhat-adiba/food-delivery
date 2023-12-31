import React from "react";
import Banner from "../../../assets/promo-banner.png";

function Header() {
  return (
    <div>
      <img className="my-4 md:my-10" src={Banner} />
      <h1 className="text-2xl md:text-4xl xl:text-6xl font-medium mt-6 md:mt-16 xl:mt-20">
        Our Menu
      </h1>
    </div>
  );
}

export default Header;
