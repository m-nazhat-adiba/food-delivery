import React from "react";
import { Icon } from "@iconify/react";
import Button from "../../../components/common/Button";
import Logo from "../../../assets/icon.png";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-12 xl:gap-32">
      <div className="flex flex-col md:w-[25%]">
        <img src={Logo} className="w-[50%] md:w-[80%]" />
        <p className="py-6">
          Our job is to filling your tummy with delicious food, with fast and
          free delivery
        </p>
        <div className="flex gap-6 text-2xl text-red-600">
          <Icon icon="basil:instagram-solid" />
          <Icon icon="basil:facebook-solid" />
          <Icon icon="basil:twitter-solid" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 md:w-[60%] gap-10 md:gap-16 md:pl-8">
        <div className="flex flex-col">
          <p className="font-bold text-xl pb-4">Company</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a>Why Mudocafe?</a>
            </li>
            <li>
              <a>Partner With Us</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-xl pb-4">Support</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a>Account</a>
            </li>
            <li>
              <a>Support Center</a>
            </li>
            <li>
              <a>Feedback</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>Accessbility</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-xl pb-4">About</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>News</a>
            </li>
            <li>
              <a>Menu</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:w-[30%] items-center md:items-start">
        <p className="font-bold text-lg pb-5 text-center md:text-start">
          Get in touch with us. We'd love to hear from you.
        </p>
        <Button variant="outline">Email Address</Button>
      </div>
    </div>
  );
};

export default Footer;
