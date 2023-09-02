import React from "react";
import InputField from "../../components/common/Input";
import { Icon } from "@iconify/react";

const Register = ({ handleSwitchToRegister }) => {
  return (
    <div>
      <h1 className="text-xl mb-4">Create your Account</h1>
      <button className="flex items-center gap-2 border-2 px-10 py-1 justify-center rounded-lg">
        <Icon icon="akar-icons:google-fill" />
        <p>Sign up with Google</p>
      </button>
      <p className="text-xs my-6">or sign up with email</p>
      <form className="flex flex-col gap-6">
        <InputField id="email" placeholder="Email Address" />
        <InputField id="password" placeholder="Password" />
        <InputField id="password" placeholder="Password Confirmation" />
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-red-700 text-white rounded-full hover:bg-red-600"
        >
          Create Account
        </button>
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
