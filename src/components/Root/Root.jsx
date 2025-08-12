import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
