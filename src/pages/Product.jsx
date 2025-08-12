import React from "react";
import BreadCrumb from "../components/commonComponent/BreadCrumb";
import ProductRight from "../components/productComponent/ProductRight";
import ProductLeft from "../components/productComponent/ProductLeft";

const Product = () => {
  return (
    <div className="container mb-20!">
      <BreadCrumb />
      <div className="grid grid-cols-4 gap-6">
        <div className="">
          <ProductLeft />
        </div>
        <div className="col-span-3">
          <ProductRight />
        </div>
      </div>
    </div>
  );
};

export default Product;
