import axios from "axios";
import InputField from "../../../components/common/Input";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router";

const Login = ({ handleSwitchToRegister }) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePw = (e) => {
    setPw(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      username: email,
      password: pw,
    };
    axios
      .post("https://api.mudoapi.tech/login", payload)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("eventHandler:", email, pw);

  return (
    <div>
      <h1 className="text-xl mb-4">Login to your Account</h1>
      <button className="flex items-center gap-2 border-2 px-10 py-1 justify-center rounded-lg">
        <Icon icon="akar-icons:google-fill" />
        <p>Login with Google</p>
      </button>
      <p className="text-xs my-8">or sign in with email</p>
      <form className="flex flex-col gap-6">
        <InputField
          data={email}
          onChange={handleChangeEmail}
          id="username"
          placeholder="Username"
        />
        <InputField
          data={pw}
          onChange={handleChangePw}
          id="password"
          placeholder="Password"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="mt-4 px-4 py-2 bg-red-700 text-white rounded-full hover:bg-red-600"
        >
          Log In
        </button>
      </form>
      <p className="text-xs mt-4">
        Doesn't have an account?
        <button
          onClick={() => handleSwitchToRegister("open")}
          className="hover:text-red-700"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;
