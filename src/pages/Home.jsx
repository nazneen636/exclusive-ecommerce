import React from "react";
import Timer from "../components/commonComponent/Timer";
import Banner from "../components/homeComponents/Banner/Index";
import Category from "../components/homeComponents/Category";
import FlashSale from "../components/homeComponents/FlashSale/Index";

const Home = () => {
  return (
    <div className="container ">
      <div className="grid grid-cols-5 ">
        <div className="h-full">
          <Category />
        </div>
        <div className="h-full col-span-4">
          <Banner />
        </div>
      </div>
      <div className="mt-32!">
        <FlashSale />
      </div>
    </div>
  );
};

export default Home;
