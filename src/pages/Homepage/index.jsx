import React from "react";
import Header from "./container/Header";
import BenefitSection from "./container/BenefitSection";
import NavBar from "../../components/Navigation/index";
import HighlightMenus from "./container/HighlightMenus";
import Testimony from "./container/Testimony";
import GetApp from "./container/GetApp";
import Footer from "./container/Footer";

const Homepage = () => {
  return (
    <div className="container mx-auto">
      <NavBar />
      <div className="mt-5">
        <Header />
      </div>
      <div className="mt-28">
        <BenefitSection />
      </div>
      <div className="mt-40">
        <HighlightMenus />
      </div>
      <div className="mt-36">
        <Testimony />
      </div>
      <div className="mt-60">
        <GetApp />
      </div>
      <div className="mt-36 mb-14">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
