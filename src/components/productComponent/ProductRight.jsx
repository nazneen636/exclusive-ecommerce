import { useState } from "react";
import ProductCard from "../commonComponent/ProductCard";
import {
  useGetAllProductQuery,
  useGetProductBySearchQuery,
  useGetSingleProductCategoryQuery,
} from "../../Features/api/product.api";
import { icons } from "../../helpers/iconProvider";
import ProductSkeleton from "../Skeleton/ProductSkeleton";

const ProductRight = ({ selectedCategory }) => {
  const { data, isLoading } = useGetAllProductQuery();
  const { data: categoryProduct, isLoading: categoryProductLoading } =
    useGetSingleProductCategoryQuery(selectedCategory, {
      skip: !selectedCategory,
    });
  const { data: searchProduct } = useGetProductBySearchQuery("phone");
  console.log(searchProduct);

  const [page, setPage] = useState(1);
  const [pagePerShow, setPagePerShow] = useState(9);
  const product = selectedCategory
    ? categoryProduct?.products || []
    : data?.products || [];
  let totalPage = Math.ceil((product?.length || 0) / pagePerShow);

  const handlePerPageShow = (e) => {
    setPagePerShow(Number(e.target.value));
    setPage(1);
  };

  const handlePerItem = (index) => {
    if (index > 0 && index <= totalPage) {
      setPage(index);
    }
  };
  if (isLoading || categoryProductLoading) {
    return (
      <div className="grid grid-cols-3 gap-7">
        {[...new Array(6)].map((_) => (
          <ProductSkeleton />
        ))}
      </div>
    );
  }
  return (
    <div>
      <div className="flex gap-3 justify-end items-center mb-[30px]! ">
        <h2 className="font-poppins font-normal text-base text-text-black-000000">
          Show :
        </h2>
        <div className="relative">
          <select
            name=""
            id=""
            value={pagePerShow}
            onChange={handlePerPageShow}
            className="px-[40px]! w-full border border-[#D9D9D9]! rounded-sm py-1! appearance-none"
          >
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="18">18</option>
            <option value="36">36</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 -z-10">
            {icons.downArrow}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-7">
        {product?.slice(page * 9 - 9, page * pagePerShow).map((item) => (
          <div key={item.id} className="">
            <ProductCard itemData={item} />
          </div>
        ))}
      </div>

      {/* pagination */}

      <div
        aria-label="Page navigation example"
        className="flex items-center justify-center mt-20!"
      >
        <ul class="flex -space-x-px h-8 text-sm ">
          <li className="w-full">
            <span
              onClick={() => handlePerItem(page - 1)}
              className="flex items-center justify-center px-3! py-3! h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-red-db4444 hover:text-white-ffffff cursor-pointer"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </span>
          </li>
          {[...new Array(totalPage)]?.map((_, index) => (
            <li key={index} className="w-full">
              <span
                onClick={() => handlePerItem(index + 1)}
                className={
                  index + 1 === page
                    ? `flex items-center justify-center px-3! py-1.5! h-10 border border-transparent bg-red-db4444 text-white-ffffff text-base`
                    : `flex items-center justify-center px-3! py-1.5! h-10 text-gray-500 bg-white border border-gray-300 hover:bg-white hover:text-gray-600 text-base cursor-pointer`
                }
              >
                {index + 1}
              </span>
            </li>
          ))}

          <li>
            <span
              onClick={() => handlePerItem(page + 1)}
              className="flex items-center justify-center px-3! py-3! h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-red-db4444 hover:text-white-ffffff cursor-pointer"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductRight;
