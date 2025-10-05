import React from "react";
import Header from "../Header/header";
import Main from "../Main/Main";
import Footer from "../Main/Footer/Footer";

const Wrapper = () => {
  return (
    <div className="bg-black min-h-screen max-w-[1920px] mx-auto">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Wrapper;
