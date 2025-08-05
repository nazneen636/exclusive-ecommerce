import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
