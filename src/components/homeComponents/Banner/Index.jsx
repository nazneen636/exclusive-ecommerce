// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { assets } from "../../../helpers/assetProvider";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const bannerItem = [
  {
    id: 1,
    img: assets.banner_1,
  },
  {
    id: 2,
    img: assets.banner_2,
  },
  {
    id: 3,
    img: assets.banner_1,
  },
  {
    id: 4,
    img: assets.banner_1,
  },
  {
    id: 5,
    img: assets.banner_2,
  },
  {
    id: 6,
    img: assets.banner_1,
  },
];

export default function App() {
  return (
    <div className="h-[344px] pt-10! w-full">
      <Swiper pagination={{ clickable: true }} modules={[Pagination]}>
        {bannerItem?.map((item) => (
          <SwiperSlide key={item.id} className="h-full">
            <img
              src={item.img}
              alt=""
              className="object-cover w-full h-[344px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
