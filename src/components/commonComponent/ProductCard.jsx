import React from "react";
import { icons } from "../../helpers/iconProvider";
import { assets } from "../../helpers/assetProvider";
import { FaStar } from "react-icons/fa";
import Star from "./Star";

const ProductCard = ({ itemData }) => {
  return (
    <div className="">
      <div className="w-[260px] ">
        <div className="bg-white-f5f5f5 rounded-2 overflow-hidden pb-[55px]! px-4! pt-4! rounded relative group cursor-pointer">
          <div className="flex justify-between">
            {itemData.discountPercentage && (
              <span className="px-3! py-2! rounded bg-red-db4444 h-fit font-poppins text-sm text-white-ffffff font-normal">
                -{itemData?.discountPercentage}%
              </span>
            )}
            {/*  */}
            <div className="flex flex-col">
              <div className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-white-ffffff cursor-pointer hover:bg-red-db4444 hover:text-white-ffffff text-xl">
                <span>{icons.heart}</span>
              </div>
              <div className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-white-ffffff cursor-pointer hover:bg-red-db4444 hover:text-white-ffffff text-xl mt-2!">
                <span> {icons.openEye}</span>
              </div>
            </div>
            {/*  */}
          </div>
          <div className="flex justify-between cursor-pointer">
            <div className="w-[172px] h-[152px] flex-1">
              <img
                src={itemData?.thumbnail}
                alt="product"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div className="opacity-0 absolute left-0 bottom-0 font-poppins font-medium text-lg cursor-pointer flex justify-center items-center w-full h-12 bg-text-black-000000 text-white-ffffff group-hover:opacity-100 transition-all">
            <h3>Add To Cart</h3>
          </div>
        </div>

        <div className="flex flex-col items-start gap-y-2 mt-4!">
          <h2 className="text-lg font-poppins font-medium cursor-pointer w-full truncate">
            {itemData?.title}
          </h2>
          <div className="flex items-center gap-x-3 cursor-pointer">
            <span className="text-red-db4444 font-medium text-lg font-poppins inline-block">
              $
              {(
                itemData?.price -
                (itemData?.discountPercentage / 100) * itemData?.price
              ).toFixed(2)}
            </span>
            <span className="text-text-black-000000 opacity-50 font-medium text-lg font-poppins inline-block line-through">
              ${(itemData?.price).toFixed(2)}
            </span>
          </div>
          <div className="flex items-center gap-x-1 cursor-pointer">
            <Star rating={itemData && itemData?.rating} />
            <h3 className="text-text_black000000 opacity-50 font-medium text-lg font-poppins ml-2!">
              ({itemData?.reviews?.length})
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
