import React from "react";
import ProductCommonLayout from "../../commonComponent/ProductCommonLayout";
import { useGetBestSellingProductQuery } from "../../../Features/api/product.api";
import ProductCard from "../../commonComponent/ProductCard";
const BestSelling = () => {
  const { data, isLoading, error } = useGetBestSellingProductQuery();

  return (
    <div>
      <ProductCommonLayout
        ProductCard={ProductCard}
        heading={"This Month"}
        description={"Best Selling Products"}
        viewButton={true}
        isLoading={isLoading}
        partialItemShow={4}
        componentData={data?.products}
      />
    </div>
  );
};

export default BestSelling;
