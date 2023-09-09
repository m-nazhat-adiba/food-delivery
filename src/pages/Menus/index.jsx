import React from "react";
import NavBar from "../../components/Navigation";
import Header from "./container/Header";
import ProductMenu from "./container/ProductMenu";
import Footer from "../Homepage/container/Footer";
import { useNavigate } from "react-router";

function index() {
  const navigate = useNavigate();
  const handleDetail = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <div className="container mx-auto">
        <NavBar />
      </div>
      <div className="container mx-auto px-12">
        <Header />
      </div>
      <div className="container mx-auto mt-10 px-12 flex flex-col items-center gap-10">
        <ProductMenu handleDetail={handleDetail} />
      </div>
      <div className="container mx-auto mt-24 mb-10">
        <Footer />
      </div>
    </div>
  );
}

export default index;
