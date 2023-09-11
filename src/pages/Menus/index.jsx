import React from "react";
import NavBar from "../../components/Navigation";
import Header from "./container/Header";
import ProductMenu from "./container/ProductMenu";
import Footer from "../Homepage/container/Footer";
import { useNavigate } from "react-router";

function ProductPage() {
  const navigate = useNavigate();
  const handleDetail = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="container mx-auto">
      <div className="px-3 lg:px-0">
        <NavBar />
      </div>
      <div className="px-6 md:px-12">
        <Header />
      </div>
      <div className="mt-4 md:mt-10 px-6 md:px-12 flex flex-col items-center gap-10">
        <ProductMenu handleDetail={handleDetail} />
      </div>
      <div className="px-6 md:px-2 xl:px-0 mt-24 mb-10">
        <Footer />
      </div>
    </div>
  );
}

export default ProductPage;
