import { useState } from "react";
import BreadCrumb from "../components/commonComponent/BreadCrumb";
import ProductRight from "../components/productComponent/ProductRight";
import ProductLeft from "../components/productComponent/ProductLeft";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className="container mb-20!">
      <BreadCrumb />
      <div className="grid grid-cols-4 gap-6">
        <div className="">
          <ProductLeft setSelectedCategory={setSelectedCategory} />
        </div>
        <div className="col-span-3">
          <ProductRight selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  );
};

export default Product;
