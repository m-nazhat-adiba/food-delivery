import React, { useState } from "react";
import Button from "../../common/Button";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";

const NavUtility = ({ handleSearch, handleSearchSubmit, value }) => {
  const [searchView, setSearchView] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    setToken(localStorage.removeItem("token"));
  };

  const handleSearchView = (isOpen = "close") => {
    if (isOpen === "open") {
      setSearchView(true);
    } else {
      setSearchView(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-5 items-center bg-white relative">
      <div
        className={clsx(
          "lg:flex border-2 w-fit items-center rounded-full hidden",
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
              "w-80": searchView,
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
      <Icon
        icon="akar-icons:shopping-bag"
        className="text-2xl hidden lg:block"
      />
      {!token || token === "undefined" ? (
        <Link to={"/authentication"}>
          <Button variant="primary">Login</Button>
        </Link>
      ) : (
        <div className="w-full lg:w-fit">
          <Link to={"/"}>
            <Button target={handleLogout} variant="primary">
              Logout
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavUtility;
