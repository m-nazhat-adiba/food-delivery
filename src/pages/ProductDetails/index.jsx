import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./container/Header";
import NavBar from "../../components/Navigation";
import Details from "./container/Details";
import Footer from "../Homepage/container/Footer";
import Checkout from "./container/Checkout";
import { useParams } from "react-router";

const ProductDetails = () => {
  const [detail, setDetail] = useState({});
  const param = useParams();

  const getDetails = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${param?.userId}`)
      .then((res) => {
        setDetail(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="container mx-auto">
      <div>
        <NavBar />
      </div>
      <div className="my-4 px-8">
        <Header productData={detail} />
      </div>
      <div className="flex justify-between px-8 h-full">
        <div className="w-[55%]">
          <Details productData={detail} />
        </div>
        <div className="w-[28%] my-5">
          <Checkout productData={detail} />
        </div>
      </div>
      <div className="mb-8 mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetails;
