import BreadCrumb from "../components/commonComponent/BreadCrumb";
import ImageGallery from "../components/productDetails/ImageGallery";
import SpecificProductDetails from "../components/productDetails/SpecificProductDetails";
import {
  useGetSingleProductCategoryQuery,
  useGetSingleProductQuery,
} from "../Features/api/product.api";
import { useParams } from "react-router";
import ProductDetailsSkeleton from "../components/Skeleton/ProductDetailsSkeleton";
import ProductCommonLayout from "../components/commonComponent/ProductCommonLayout";
import ProductCard from "../components/commonComponent/ProductCard";
import ProductSkeleton from "../components/Skeleton/ProductSkeleton";

// import { useGetSingleProductQuery } from "../../Features/api/product.api";
const ProductDetails = () => {
  const params = useParams();
  const id = params.id;
  const { data, isLoading, error } = useGetSingleProductQuery(id);
  const {
    data: categoryRelatedProduct,
    isLoading: isLoadingCategoryRelatedProduct,
  } = useGetSingleProductCategoryQuery(data?.category);

  console.log(data?.category);
  console.log(categoryRelatedProduct);

  return (
    <div className="container mb-20!">
      <BreadCrumb />
      {!isLoading ? (
        <div className="grid grid-cols-3">
          <div className="col-span-2 mr-16!">
            <ImageGallery images={data?.images} />
          </div>
          <div className="">
            <SpecificProductDetails product={data} />
          </div>
        </div>
      ) : (
        <ProductDetailsSkeleton />
      )}
      <div className="mt-20!">
        <ProductCommonLayout
          ProductCard={ProductCard}
          heading={"Related Item"}
          description={false}
          isArrowsTrue={true}
          partialItemShow={4}
          componentData={categoryRelatedProduct?.products}
          isLoading={isLoadingCategoryRelatedProduct}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
ProductDetails;
