import React, { useState } from "react";
import InputField from "../../../components/common/Input";
import { Icon } from "@iconify/react";
import axios from "axios";

const Register = ({ handleSwitchToRegister }) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [isError, setIsError] = useState({});

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePw = (e) => {
    setPw(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: email,
      username: email,
      password: pw,
      roleId: 2,
    };
    axios
      .post("https://api.mudoapi.tech/register", payload)
      .then((res) => {
        console.log(res);
        handleSwitchToRegister("close");
      })
      .catch((err) => {
        setIsError(err.response.data);
        console.log(err);
      });
  };
  console.log("eventHandler:", email, pw);
  return (
    <div className="py-8 w-full flex flex-col">
      <h1 className="text-xl mb-4">Create your Account</h1>
      <button className="flex items-center gap-2 border-2 px-4 md:px-6 lg:px-12 py-2 justify-center rounded-lg">
        <Icon icon="akar-icons:google-fill" />
        <p className="text-base">Sign up with Google</p>
      </button>
      <p className="text-xs my-6">or sign up with email</p>
      <form className="flex flex-col w-full gap-6">
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
        <div className="flex flex-col w-full">
          <p className="text-red-600">{isError.message}</p>
          <button
            onClick={handleSubmit}
            type="submit"
            className="mt-4 px-4 py-2 bg-red-700 text-white rounded-full hover:bg-red-600"
          >
            Create Account
          </button>
        </div>
      </form>
      <p className="text-xs mt-4">
        Already have an account?
        <button
          onClick={() => handleSwitchToRegister("close")}
          className="hover:text-red-700"
        >
          Sign In
        </button>
      </p>
    </div>
  );
};

export default Register;
