import React from "react";
import ProductCard from "../commonComponent/ProductCard";
import { useSelector } from "react-redux";
import BreadCrumb from "../commonComponent/BreadCrumb";

const WishListComponent = () => {
  const wishList = useSelector((state) => state.wishList);
  return (
    <div className="container mb-10!">
      <BreadCrumb />
      <div className="grid grid-cols-4 gap-6">
        {" "}
        {wishList.length > 0 ? (
          wishList?.map((item) => <ProductCard itemData={item} />)
        ) : (
          <div className="text-lg text-red-db4444">
            No items in your WishList
          </div>
        )}
      </div>
    </div>
  );
};

export default WishListComponent;
