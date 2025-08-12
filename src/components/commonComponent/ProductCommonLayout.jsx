import Heading from "../../components/commonComponent/Heading";
// import Timer from "../../commonComponent/Timer";
import { icons } from "../../helpers/iconProvider";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

// import required modules
import { Navigation, Grid } from "swiper/modules";
import Timer from "./Timer";
import React, { useRef } from "react";
import ProductSkeleton from "../Skeleton/ProductSkeleton";
import Button from "./Button";

const ProductCommonLayout = ({
  ProductCard = () => <ProductSkeleton />,
  heading,
  description,
  time,
  timeStamp = false,
  isArrowsTrue = false,
  viewButton = false,
  partialItemShow = 4,
  componentData = [],
  isLoading = false,
  row = 1,
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div>
      <div className="flex justify-between items-end">
        <div className="flex gap-x-20 items-end">
          <Heading title={heading} description={description} />
          {timeStamp && <Timer timeOfOffer={time} />}
        </div>
        {viewButton && <Button className="mr-3!" btnText="View All" />}
      </div>
      <div className="mt-10! relative">
        <Swiper
          spaceBetween={40}
          grid={{
            rows: row,
            fill: "row",
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          modules={[Navigation, Grid]}
          slidesPerView={partialItemShow}
          className="mySwiper"
          // style={{ paddingRight: 0 }}
        >
          {isLoading ? (
            <div className="grid grid-cols-4 gap-7">
              {[...Array(4)].map((_) => (
                <ProductSkeleton />
              ))}
            </div>
          ) : componentData.length ? (
            componentData?.map((item, index) => (
              <SwiperSlide key={item.id || index}>
                <ProductCard itemData={item} />
              </SwiperSlide>
            ))
          ) : (
            [...Array(30)].map((_, index) => (
              <SwiperSlide key={index}>
                <ProductCard />
              </SwiperSlide>
            ))
          )}
        </Swiper>
        {/* arrow */}
        {isArrowsTrue && (
          <div className="flex gap-2 absolute right-0 -top-20">
            <div
              ref={prevRef}
              className={` w-11 h-11 text-text-black-000000 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-db4444 hover:text-white-ffffff transition-all`}
            >
              <span>{icons.leftArrow}</span>
            </div>
            <div
              ref={nextRef}
              className={` w-11 h-11 text-text-black-000000 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-db4444 hover:text-white-ffffff transition-all`}
            >
              <span>{icons.rightArrow}</span>
            </div>
          </div>
        )}

        {/* arrow */}
      </div>
    </div>
  );
};

export default ProductCommonLayout;
