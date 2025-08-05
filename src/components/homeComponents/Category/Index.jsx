import React from "react";
import { category } from "../../../../Data/Data";
import { icons } from "../../../helpers/iconProvider";

const Category = () => {
  return (
    <ul className="flex flex-col gap-y-4 pr-4! border-r border-r-[#00000025] mr-5! pt-10!">
      {category?.map((item) => (
        <li
          key={item.id}
          className="text-base flex items-center justify-between cursor-pointer text-text-black-000000 hover:text-red-db4444 hover:pl-4! transition-all"
        >
          <span>{item.category}</span>
          {item?.subCategory && <span>{icons.rArrow}</span>}
        </li>
      ))}
    </ul>
  );
};

export default Category;
