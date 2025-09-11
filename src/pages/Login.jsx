import { useState } from "react";
import { assets } from "../helpers/assetProvider";
import { icons } from "../helpers/iconProvider";
import { Link } from "react-router";
const Login = () => {
  const [eye, setEye] = useState(false);
  return (
    <div>
      <div className="py-20!">
        <div className="container">
          <div className="flex items-center gap-x-10">
            <div className="w-[50%] ">
              {/* <img src={assets.login} alt="" /> */}
              <video src={assets.login} controls autoPlay muted loop></video>
            </div>

            <div className="w-[40%]">
              <div className="flex flex-col gap-y-4">
                <h2 className="text-[36px] font-medium font-inter text-text-black-000000">
                  Log in to Exclusive
                </h2>
                <p className="text-[16px] font-normal font-poppins text-text-black-000000">
                  Enter your details below
                </p>
                <form
                  action=""
                  // onSubmit={formik.handleSubmit}
                >
                  <input
                    type="text"
                    name="emailorphone"
                    id="emailorphone"
                    placeholder="Email or Phone Number"
                    className="border-b-2 border-b-gray-200 w-[60%] py-3!"
                    // onChange={formik.handleChange}
                    // value={formik.values.emailorphone}
                  />

                  <span className="block mt-4! text-red-500">
                    {"formik.errors.emailorphone"}
                  </span>

                  <div className="relative">
                    <input
                      type={eye ? "text" : "password"}
                      name="Password"
                      id="Password"
                      placeholder="Password"
                      className="border-b-2 border-b-gray-200 w-[60%] py-3!"
                      //   onChange={formik.handleChange}
                      //   value={formik.values.Password}
                    />
                    <span
                      className="absolute right-[41%] top-1/2 -translate-y-1/2"
                      onClick={() => setEye(!eye)}
                    >
                      {eye ? (
                        <span className="cursor-pointer text-xl">
                          {icons?.openEye}
                        </span>
                      ) : (
                        <span className="cursor-pointer text-xl">
                          {icons?.closeEye}
                        </span>
                      )}
                    </span>
                  </div>

                  <span className="block mt-4! text-red-500">
                    {"formik.errors.Password"}
                  </span>

                  <div className="flex items-center gap-x-[87px] mt-[30px]!">
                    <button
                      type="submit"
                      className="py-4! px-[48px]! bg-red-db4444 font-poppins font-medium text-white-ffffff text-[16px] rounded"
                    >
                      Log In
                    </button>
                    <Link
                      to="/forgotpassword"
                      className="text-redDB4444 font-poppins font-medium  text-[16px] cursor-pointer"
                    >
                      Forget Password?
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
