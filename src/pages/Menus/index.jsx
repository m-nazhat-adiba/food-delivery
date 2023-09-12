import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/Navigation";
import Header from "./container/Header";
import ProductMenu from "./container/ProductMenu";
import Footer from "../Homepage/container/Footer";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

function ProductPage() {
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const [menus, setMenus] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(1);
  const [search, setSearch] = useState(searchParam.get("menu"));

  const getMenus = (name = searchParam.get("menu")) => {
    axios
      .get(`https://api.mudoapi.tech/menus?perPage=10&page=${currentPage}`, {
        params: { name: name },
      })
      .then((res) => {
        const data = res?.data?.data?.Data;
        setCurrentPage(res.data.data.currentPage);
        setNextPage(res.data.data.nextPage);
        setMenus(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDetail = (id) => {
    navigate(`/product/${id}`);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSearchSubmit = () => {
    getMenus(search);
  };

  useEffect(() => {
    getMenus();
  }, [currentPage]);

  return (
    <div className="container mx-auto">
      <div className="px-6 xl:px-0">
        <NavBar
          handleSearch={handleSearch}
          handleSearchSubmit={handleSearchSubmit}
          value={search}
        />
      </div>
      <div className="px-6 md:px-10 2xl:px-12">
        <Header />
      </div>
      <div className="mt-4 md:mt-10 px-6 md:px-10 2xl:px-12 flex flex-col items-center gap-10">
        <ProductMenu
          handleDetail={handleDetail}
          menus={menus}
          currentPage={currentPage}
          nextPage={nextPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className="px-6 xl:px-0 mt-24 mb-10">
        <Footer />
      </div>
    </div>
  );
}

export default ProductPage;
