import React from "react";

import { assets } from "../../../helpers/assetProvider";
import Heading from "../../commonComponent/Heading";

const NewArrival = () => {
  return (
    <div className="">
      <div className="container">
        <Heading title={"Featured"} description={"New Arrival"} />
        <div className="grid grid-cols-2 gap-[30px] mt-[60px]!">
          <div className="h-full">
            <img
              src={assets.banner_newArrival_1}
              alt={assets.banner_newArrival_1}
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
          <div className="grid grid-rows-2 gap-y-[30px]">
            <div className="w-full h-full rounded-sm">
              <img
                src={assets.banner_newArrival_2}
                alt={assets.banner_newArrival_2}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-x-[30px]">
              <div className="bg-text_black000000 h-full">
                <img
                  src={assets.banner_newArrival_3}
                  alt={assets.banner_newArrival_3}
                  className="w-full h-full object-cover p-4 rounded-sm"
                />
              </div>
              <div className=" bg-text-black-000000  h-full">
                <img
                  src={assets.banner_newArrival_4}
                  alt={assets.banner_newArrival_4}
                  className="w-full h-full object-cover p-4 rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
