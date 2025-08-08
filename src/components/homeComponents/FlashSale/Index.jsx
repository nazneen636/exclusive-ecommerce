import React, { useEffect } from "react";
import ProductCommonLayout from "../../commonComponent/ProductCommonLayout";
import ProductCard from "../../commonComponent/ProductCard";
import Button from "../../commonComponent/Button";
import { useGetAllProductQuery } from "../../../Features/api/product.api";
import ProductSkeleton from "../../Skeleton/ProductSkeleton";

const FlashSale = () => {
  const { data, error, isLoading } = useGetAllProductQuery();
  console.log(data?.products);

  return (
    <div>
      <div className="border-b-[1px] border-b-[#00000044] mb-10!">
        <ProductCommonLayout
          ProductCard={ProductCard}
          componentData={data?.products}
          timeStamp={true}
          time={3}
          isArrowsTrue={true}
          // viewButton={true}
          heading="Today's"
          description="Flash Sales"
          isLoading={isLoading}
        />
        <div className="pb-16! mt-14! flex items-center justify-center">
          <Button btnText="View All Products" />
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
