import ProductCommonLayout from "../../commonComponent/ProductCommonLayout";
import { useGetBestSellingProductQuery } from "../../../Features/api/product.api";
import ProductCard from "../../commonComponent/ProductCard";
import Button from "../../commonComponent/Button";
import { Link } from "react-router";

const ExploreProducts = () => {
  const { data, isLoading, error } = useGetBestSellingProductQuery();
  return (
    <div>
      <div className="">
        <ProductCommonLayout
          ProductCard={ProductCard}
          heading={"Our Products"}
          description={"Explore Our Products"}
          isLoading={isLoading}
          partialItemShow={4}
          componentData={data?.products}
          isArrowsTrue={true}
          row={2}
        />
      </div>
      <div className="flex items-center justify-center ">
        <Link to="/product" className="">
          <Button className="mt-[76px]!" btnText={"View All Products"} />
        </Link>
      </div>
    </div>
  );
};

export default ExploreProducts;
