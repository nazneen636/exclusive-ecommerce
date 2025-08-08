import React from "react";

const CategoryItem = ({ itemData }) => {
  return (
    <div className="">
      <div className="w-full cursor-pointer text-text-black-000000 transition hover:bg-red-db4444 hover:text-white-ffffff h-[145px] bg-transparent rounded border-[1px] border-text-black-7d8184 flex items-center justify-center ">
        <div className="flex flex-col items-center gap-y-3">
          <span className="text-[34px]">{itemData?.img}</span>
          <h1 className="text-lg font-poppins font-normal">{itemData?.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
