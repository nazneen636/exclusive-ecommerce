import React from "react";
import { useGetProductByCategoryQuery } from "../../Features/api/product.api";

const ProductLeft = () => {
  const { data, isLoading, error } = useGetProductByCategoryQuery();
  console.log(data);

  return (
    <div className="">
      <h1 className="font-poppins font-bold text-xl text-text-black-000000 mb-4! cursor-pointer">
        Shop By Category
      </h1>
      {isLoading ? (
        <ul className="h-[40vh] overflow-y-scroll">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between hover:bg-gray-200 transition-all pr-6!"
            >
              <li className="flex animate-pulse bg-gray-300 rounded w-full py-2! my-3!"></li>
            </div>
          ))}
        </ul>
      ) : (
        <ul className="h-[50vh] overflow-y-scroll">
          {data?.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <li className="font-poppins transition-all text-md text-text-black-000000 hover:px-5! hover:text-red-db4444 font-normal py-3! cursor-pointer capitalize">
                {item}
              </li>
            </div>
          ))}
        </ul>
      )}
      <div className="mt-4! border-b border-b-gray-200"></div>
      <div>
        <h1 className="font-poppins font-bold text-xl text-text-black-000000 mb-4! mt-8! cursor-pointer">
          Shop by Color
        </h1>
        <ul>
          <li className="font-poppins hover:px-5! transition-all text-md text-text-black-000000 font-normal py-3! cursor-pointer capitalize">
            <div className="flex items-center gap-x-2">
              <span className="inline-block w-5 h-5 rounded-full bg-red-500 "></span>
              <p>Red</p>
            </div>
          </li>

          <li className="font-poppins hover:px-5! transition-all text-md text-text-black-000000 font-normal py-3! cursor-pointer capitalize">
            <div className="flex items-center gap-x-2">
              <span className="inline-block w-5 h-5 rounded-full bg-blue-500 "></span>
              <p>Blue</p>
            </div>
          </li>

          <li className="font-poppins hover:px-5! transition-all text-md text-text-black-000000 font-normal py-3! cursor-pointer capitalize">
            <div className="flex items-center gap-x-2">
              <span className="inline-block w-5 h-5 rounded-full bg-green-500 "></span>
              <p>Green</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductLeft;
