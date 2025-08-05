import React from "react";

const Header = () => {
  return (
    <div className="bg-text-black-000000 py-3!">
      <div className="container">
        <div className="flex justify-between items-center ">
          <div></div>
          <div>
            <h2 className="text-white-ffffff font-poppins text-base font-normal hidden sm:block">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h2>

            {/* <h2 className="text-white-ffffff font-poppins text-[15px]  font-normal sm:hidden">
              {new String(`Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!`)
                .slice(0, 30)
                .concat("  ....")}
            </h2> */}
          </div>
          <div>
            <select
              name=""
              id=""
              className="bg-transparent text-white-ffffff font-poppins text-base font-normal"
            >
              <option value="#" className="text-text-black-000000">
                English
              </option>
              <option value="" className="text-text-black-000000">
                Bangla
              </option>
              <option value="#" className="text-text-black-000000">
                French
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
