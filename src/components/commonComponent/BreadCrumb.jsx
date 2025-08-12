import React from "react";
import { Link, useLocation } from "react-router";

const BreadCrumb = () => {
  const { pathname } = useLocation();
  const pathNameArr = pathname.split("/").filter((path) => path);
  let BreadCrumbPath = "";

  return (
    <div className="py-16! container flex">
      <span>
        <Link to="/" className="text-text-black-000000 opacity-50">
          Home
          <span className=" px-3!">/</span>
        </Link>
      </span>
      <div className="">
        {pathNameArr?.map((name, index) => {
          BreadCrumbPath += `/${name}`;
          const isLast = index === pathNameArr?.length - 1;
          return isLast ? (
            <span
              key={index}
              className="opacity-50 text-text-black-000000 font-poppins capitalize"
            >
              {name}
            </span>
          ) : (
            <Link
              key={index}
              to={BreadCrumbPath}
              className="opacity-50 text-text-black-000000 font-poppins  mx-2! rounded-sm flex gap-3 capitalize"
            >
              {name}
              <span className=" pl-3!">/</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BreadCrumb;
