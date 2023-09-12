import React, { useState } from "react";
import { Icon } from "@iconify/react";
import clsx from "clsx";

const NavUtilityLg = ({ handleSearch, handleSearchSubmit, value }) => {
  const [searchView, setSearchView] = useState(false);

  const handleSearchView = (isOpen = "close") => {
    if (isOpen === "open") {
      setSearchView(true);
    } else {
      setSearchView(false);
    }
  };
  return (
    <div className="flex items-center gap-2 relative lg:hidden">
      <div
        className={clsx(
          "flex border-2 w-fit items-center rounded-full absolute right-7 bg-white",
          {
            "border-gray-300": searchView,
            "border-transparent": !searchView,
          }
        )}
      >
        {searchView ? (
          <Icon
            onClick={() => handleSearchView("close")}
            icon="akar-icons:x-small"
            className="text-2xl mx-2"
          />
        ) : null}
        <input
          onChange={handleSearch}
          value={value}
          className={clsx(
            "my-2  bg-transparent focus:outline-none duration-300",
            {
              "md:w-[30vw] w-[40vw]": searchView,
              "w-0": !searchView,
            }
          )}
          placeholder="Search Menu"
        />
        <Icon
          onClick={() =>
            handleSearchView(searchView ? handleSearchSubmit() : "open")
          }
          icon="akar-icons:search"
          className="text-2xl mx-2"
        />
      </div>
      <Icon icon="akar-icons:shopping-bag" className="text-2xl" />
    </div>
  );
};

export default NavUtilityLg;
