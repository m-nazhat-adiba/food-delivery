import React from "react";
import Header from "./Header";
import BenefitSection from "./BenefitSection";
import NavBar from "../../components/Navigation";
import HighlightMenus from "./HighlightMenus";
import Testimony from "./Testimony";
import GetApp from "./GetApp";
import Footer from "./Footer";

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
