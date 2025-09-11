import Star from "../commonComponent/Star";
import { IoIosHeartEmpty } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";

const SpecificProductDetails = ({ product }) => {
  const {
    title,
    description,
    rating,
    price,
    // stock,
    // warrantyInformation,
    returnPolicy,
    discountPercentage,
    availabilityStatus,
    reviews,
    shippingInformation,
  } = product;

  const sizes = [
    { id: 1, size: "XS" },
    { id: 2, size: "S" },
    { id: 3, size: "M" },
    { id: 4, size: "L" },
    { id: 5, size: "XL" },
  ];
  return (
    <div className="">
      <div className="">
        <h2 className="text-2xl font-semibold font-inter text-text-black-000000">
          {title}
        </h2>
        <div className="flex items-start gap-x-3 mt-4!">
          <Star rating={rating} />
          <span className="inline-block text-shadow-text-black-000000 font-normal font-poppins text-md opacity-50">
            {reviews.length} Review
          </span>
          <span className="inline-block  text-text-black-000000 opacity-50">
            {" "}
            |{" "}
          </span>
          <span className="inline-block font-normal font-poppins text-md text-button-00ff66">
            {availabilityStatus}
          </span>
        </div>
        <p className="text-2xl font-normal font-inter text-text-black-000000 mt-4!">
          $ {(price - (discountPercentage * price) / 100).toFixed(2)}
        </p>

        <h4 className="text-md font-normal font-inter text-text-black-000000 mt-2! border-b-[2px] border-b-gray-300 pb-6! w-full">
          {description}
        </h4>
      </div>

      {/* card size component */}
      <div className="flex items-center gap-x-3 mt-8!">
        <h2 className="text-xl  font-normal font-inter text-text-black-000000">
          Colors:
        </h2>
        <div className="border-2 border-text-black-000000 rounded-full  w-[24px] h-[24px] flex items-center justify-center ">
          <span className="inline-block w-4 h-4 rounded-full bg-[#A0BCE0] "></span>
        </div>
        <div className="border-2 border-text-black-000000 rounded-full  w-[24px] h-[24px] flex items-center justify-center ">
          <span className="inline-block w-4 h-4 rounded-full bg-red-500 "></span>
        </div>
      </div>

      {/* size */}
      <div className="flex items-center gap-x-3 mt-4!">
        <h2 className="text-xl  font-normal font-inter text-text-black-000000">
          Size:
        </h2>

        <div className="flex items-center gap-x-3 ">
          {sizes.map((size) => (
            <div className="border-1 border-gray-300 rounded w-[36px] h-[36px] flex items-center justify-center ">
              <span
                className="inline-block text-[14px] font-bold font-poppins opacity-95"
                key={size.id}
              >
                {size?.size}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* button */}
      <div className="mt-10! flex items-center  gap-x-4">
        <div className="flex items-center">
          <span className="px-4! py-2! border-2 border-gray-300 rounded-l-lg text-[20px] font-poppins text-text-black-000000 cursor-pointer hover:bg-redDB4444 hover:text-white-ffffff">
            -
          </span>
          <span className="px-6! py-2! border-2 border-gray-300  text-[20px] font-poppins text-text-black-000000 border-l-0 cursor-pointer hover:bg-redDB4444 hover:text-white-ffffffF">
            2
          </span>
          <span className="px-4! py-2! border-2 border-gray-300 rounded-r-lg text-[20px] font-poppins text-text-black-000000 border-l-0 cursor-pointer hover:bg-redDB4444 hover:text-white-ffffff">
            +
          </span>
        </div>

        <button className="py-3! px-10! bg-red-db4444 rounded-[5px] border-none font-poppins font-medium text-white-ffffff text-base">
          Buy Now
        </button>

        <div className="border-2 border-gray-300 rounded  py-1! px-3! cursor-pointer hover:bg-red-500 hover:text-white-ffffff ">
          <span className="inline-block text-3xl font-bold  font-poppins  w-full h-full ">
            <IoIosHeartEmpty />
          </span>
        </div>
      </div>
      {/* button */}
      {/* condition  */}
      <div className="mt-10!">
        <div className="flex items-center gap-x-3 border border-gray-300 px-14! py-4! w-full">
          <span className="text-4xl">
            <TbTruckDelivery />
          </span>
          <div>
            <h4 className="text-base  font-medium font-poppins text-text-black-000000">
              Free Delivery
            </h4>
            <p className="text-base  font-medium font-poppins text-text_black000000">
              {shippingInformation}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-x-3 border border-gray-300 border-t-0 px-14! py-4! w-full">
          <span className="text-4xl ">
            <TbTruckDelivery />
          </span>
          <div>
            <h4 className="text-base  font-medium font-poppins text-text-black-000000">
              Return Delivery
            </h4>
            <p className="text-sm  font-medium font-poppins text-text-black-000000">
              {returnPolicy}
            </p>
          </div>
        </div>
      </div>
      {/* condition  */}
    </div>
  );
};

export default SpecificProductDetails;
