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
    <div className="bg-red-100 flex flex-col justify-center h-screen ">
      <div className="bg-white flex shadow-lg rounded-lg w-[60%] mx-auto">
        <div className="w-[60%] h-auto p-8">
          <img src="src/assets/login-banner.png" className="rounded-xl" />
        </div>
        <div className="text-center mx-auto my-auto">
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
