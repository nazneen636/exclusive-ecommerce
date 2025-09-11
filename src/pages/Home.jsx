import Banner from "../components/homeComponents/Banner/Index";
import FlashSale from "../components/homeComponents/FlashSale/Index";
import BannerCategory from "../components/homeComponents/BannerCategory/Index";
import Category from "../components/homeComponents/Category/Index";
import BestSelling from "../components/homeComponents/BestSelling/Index";
import Experience from "../components/homeComponents/Experience/Index";
import ExploreProducts from "../components/homeComponents/ExploreProducts/Index";
import NewArrival from "../components/homeComponents/NewArrival/Index";
import CustomerService from "../components/homeComponents/CustomerService/Index";

const Home = () => {
  return (
    <div className="container ">
      <div className="grid grid-cols-5 ">
        <div className="h-full">
          <BannerCategory />
        </div>
        <div className="h-full col-span-4">
          <Banner />
        </div>
      </div>
      <div className="mt-32!">
        <FlashSale />
      </div>
      <div className="mt-20!">
        <Category />
      </div>
      <div className="mt-20!">
        <BestSelling />
      </div>
      <div className="mt-36!">
        <Experience timeOfOffer={2} />
      </div>
      <div className="mt-36!">
        <ExploreProducts />
      </div>
      <div className="mt-36!">
        <NewArrival />
      </div>
      <div className="mt-36!">
        <CustomerService />
      </div>
    </div>
  );
};

export default Home;
