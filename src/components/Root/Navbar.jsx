import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { icons } from "../../helpers/iconProvider";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoMdStarOutline } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import { LuShoppingBag, LuUser } from "react-icons/lu";
import { useSelector } from "react-redux";

const navItem = [
  {
    id: 1,
    item: "Home",
    pathRoute: "/",
  },

  {
    id: 2,
    item: "Contact",
    pathRoute: "/contact",
  },

  {
    id: 3,
    item: "Product",
    pathRoute: "/product",
  },

  {
    id: 4,
    item: "SignUp",
    pathRoute: "/singup",
  },
];
const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const wishList = useSelector((state) => state.wishList);
  const totalCartItems = cart.length;
  const totalwishListItems = wishList.length;
  const [account, setAccount] = useState(false);
  const userAccountRef = useRef(null);
  const userInfoRef = useRef(null);

  // search
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };
  return (
    <div className="pt-10! pb-6 border-b border-[#00000036]">
      <div className="container relative">
        <div className="flex justify-between items-center py-2!">
          {/* logo */}
          <h1 className="text-[24px] font-bold font-inter text-text_black000000 cursor-pointer hover:text-black_363738">
            Exclusive
          </h1>
          {/* menu */}
          <ul className="flex items-center gap-x-12">
            {navItem?.map((item) => (
              <li key={item.id} className="menuUnderLine">
                <NavLink
                  to={item.pathRoute}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-text-black-000000 text-[17px] font-normal font-poppins"
                      : isActive
                      ? "text-red-db4444 text-[17px] font-normal font-poppins "
                      : "text-text-black-000000 text-[17px] font-normal font-poppins"
                  }
                >
                  {item.item}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* search bar cart and wishlist */}
          <div className="flex items-center justify-between gap-x-6">
            <div className="relative">
              <input
                type="text"
                className="py-2! bg-white-f5f5f5 rounded px-8! w-[300px] "
                placeholder="What are you looking for?"
                value={searchTerm}
                onChange={handleChange}
              />
              <span className="absolute top-1/2 -translate-y-1/2 text-xl right-2">
                {icons.search}
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <Link
                to="/wishlist"
                className="text-text_black7D8184 opacity-80 text-xl cursor-pointer relative"
              >
                {icons.heart}
                <span className="bg-red-db4444 text-white w-6 h-6 text-sm flex! items-center justify-center rounded-full absolute -right-3 -top-3.5">
                  {totalwishListItems}
                </span>
              </Link>
              <Link to="/cart">
                {" "}
                <span className="text-text_black7D8184 opacity-80 text-2xl cursor-pointer -mb-2! relative">
                  {icons.cart}
                  <span className="bg-red-db4444 text-white w-6 h-6 text-sm flex! items-center justify-center rounded-full absolute -right-3 -top-3">
                    {totalCartItems}
                  </span>
                </span>
              </Link>
              <span
                onClick={() => setAccount(!account)}
                ref={userAccountRef}
                className="text-white-ffffff ml-4! opacity-80 text-xl cursor-pointer p-2! rounded-full bg-red-db4444 "
              >
                {icons.user}
              </span>
              {/* user dropdown */}
              {account && (
                <div
                  ref={userInfoRef}
                  className="absolute bg-gradient-to-br from-black/60 to-gray-300/30 backdrop-blur-xl  shadow-lg z-50 rounded-md top-12 right-0 p-6! flex flex-col gap-4"
                >
                  <div className="flex items-center gap-x-2 hover:bg-white_F5F5F5 hover:py-3 transition-all hover:text-text-black-000000 text-white-f5f5f5 pl-5 hover:cursor-pointer">
                    <span className=" text-3xl ">
                      <LuUser />
                    </span>
                    <h3 className="text-xl font-normal font-poppins ">
                      Manage My Account
                    </h3>
                  </div>
                  <div className="flex items-center gap-x-2 hover:bg-white_F5F5F5 hover:py-3 transition-all  hover:text-text-black-000000 text-white-f5f5f5 pl-5 hover:cursor-pointer">
                    <span className=" text-3xl">
                      <LuShoppingBag />
                    </span>
                    <h3 className="text-xl font-normal font-poppins">
                      My Order
                    </h3>
                  </div>
                  <div className="flex items-center gap-x-2 hover:bg-white_F5F5F5 hover:py-3 transition-all  hover:text-text-black-000000 text-white-f5f5f5 pl-5 hover:cursor-pointer">
                    <span className=" text-3xl">
                      <ImCancelCircle />
                    </span>
                    <h3 className=" text-xl font-normal font-poppins">
                      My Cancellations
                    </h3>
                  </div>
                  <div className="flex items-center gap-x-2 hover:bg-white_F5F5F5 hover:py-3 transition-all  hover:text-text-black-000000 text-white-f5f5f5 pl-5 hover:cursor-pointer">
                    <span className=" text-3xl">
                      <IoMdStarOutline />
                    </span>
                    <h3 className="text-xl font-normal font-poppins">
                      My Reviews
                    </h3>
                  </div>
                  <div className="flex items-center gap-x-2 hover:bg-white_F5F5F5 hover:py-3 transition-all  hover:text-text-black-000000 text-white-f5f5f5 pl-5 hover:cursor-pointer">
                    <span className="text-3xl">
                      <RiLogoutCircleLine />
                    </span>
                    <h3 className="text-xl font-normal font-poppins">Logout</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
