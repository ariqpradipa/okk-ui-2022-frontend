import React, { useState } from "react";
import Merch from "../components/Merch/Merch";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Header/Navbar";
import Sponsor from "../components/Sponsor/Sponsor";

const PageMerch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${isOpen ? "fixed h-screen w-full" : ""} merchBody flex flex-col min-h-screen min-w-[300px]`}>
      <Navbar isOpen={isOpen} setIsOpen={toggle} />
      
      <Merch />
      <Sponsor />
      <Footer />
    </div>
  );
};

export default PageMerch;
