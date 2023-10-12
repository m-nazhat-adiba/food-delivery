import React, { useState } from "react";
import Login from "./container/Login";
import Register from "./container/Register";
import Logo from "../../assets/icon.png";
import Banner from "../../assets/login-banner.png";

const LoginPage = () => {
  const [showRegister, setShowRegister] = useState(false);
  const handleSwitchToRegister = (isOpen) => {
    if (isOpen === "open") {
      setShowRegister(true);
    } else {
      setShowRegister(false);
    }
  };

  return (
    <div
      // style={{ backgroundImage: `url("/src/assets/login-bg.jpg")` }}
      className="flex flex-col justify-center h-screen w-screen bg-cover bg-right bg-gray-50"
    >
      <div className="bg-white flex flex-col md:flex-row shadow-xl rounded-lg w-[90%] xl:w-[75%] 2xl:w-[60%] mx-auto">
        <div className="block w-full md:hidden">
          <img src={Logo} className="w-full px-6 pt-8" />
        </div>
        <div className="hidden md:block w-[60%] h-auto p-8">
          <img src={Banner} className="rounded-xl" />
        </div>
        <div className="text-center mx-8 lg:mx-auto my-auto">
          {showRegister ? (
            <Register handleSwitchToRegister={handleSwitchToRegister} />
          ) : (
            <Login handleSwitchToRegister={handleSwitchToRegister} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
