import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

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
    <div className="container mx-auto flex flex-col justify-center h-screen w-[60%]">
      <div className="flex shadow-lg rounded-lg">
        <div className="w-[60%] h-auto p-8">
          <img src="src/assets/login-banner.png" className="rounded-xl" />
        </div>
        <div className="text-center">
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
