import React from "react";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Policy from "../components/Policy";

const PolicyPage = () => {
  return (
    <>
      <div className="fixed right-0 z-50 top-0 w-full  bg-green-50 shadow-md font-nunito">
        <Header />
        <Navbar />
      </div>
      <div className="relative mt-52 text-[#1B3735]">
        <Policy />
      </div>
      <Footer />
    </>
  );
};

export default PolicyPage;
