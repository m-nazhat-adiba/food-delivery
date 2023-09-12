import React, { useState } from "react";
import Header from "./container/Header";
import BenefitSection from "./container/BenefitSection";
import NavBar from "../../components/Navigation/index";
import HighlightMenus from "./container/HighlightMenus";
import Testimony from "./container/Testimony";
import GetApp from "./container/GetApp";
import Footer from "./container/Footer";
import { useNavigate } from "react-router";

const Homepage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearchSubmit = () => {
    !searchTerm ? null : navigate(`/menus?menu=${searchTerm}`);
  };

  return (
    <div className="container mx-auto">
      <div className="px-6 xl:px-0">
        <NavBar
          handleSearch={handleSearch}
          handleSearchSubmit={handleSearchSubmit}
        />
      </div>
      <div className="px-6 xl:px-0 mt-5">
        <Header />
      </div>
      <div className="px-6 xl:px-0 mt-28">
        <BenefitSection />
      </div>
      <div className="px-6 2xl:px-8 mt-28 xl:mt-40">
        <HighlightMenus />
      </div>
      <div className="px-6 xl:px-0 mt-28 xl:mt-36">
        <Testimony />
      </div>
      <div className="px-6 xl:px-0 mt-32 xl:mt-60">
        <GetApp />
      </div>
      <div className="mt-36 md:mb-14 mb-10 px-6 xl:px-0">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
