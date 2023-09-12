import React, { useState } from "react";
import Login from "./container/Login";
import Register from "./container/Register";

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
      style={{ backgroundImage: `url("src/assets/login-bg.jpg")` }}
      className="flex flex-col justify-center h-screen w-screen bg-cover bg-right"
    >
      <div className="bg-white flex flex-col md:flex-row shadow-lg rounded-lg w-[90%] xl:w-[75%] 2xl:w-[60%] mx-auto">
        <div className="block w-full md:hidden">
          <img src="/src/assets/icon.png" className="w-full px-6 pt-8" />
        </div>
        <div className="hidden md:block w-[60%] h-auto p-8">
          <img src="src/assets/login-banner.png" className="rounded-xl" />
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
