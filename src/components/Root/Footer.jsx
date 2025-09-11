import { IoSendOutline } from "react-icons/io5";
import { icons } from "../../helpers/iconProvider";
import { assets } from "../../helpers/assetProvider";
const Footer = () => {
  return (
    <div className="pt-20! bg-text-black-000000">
      <div className="container">
        <div className="flex justify-between items-start pb-20!">
          <div className="text-white flex flex-col items-start gap-y-4">
            <h2 className="font-inter text-[24px] font-bold text-white-ffffff cursor-pointer">
              Exclusive
            </h2>
            <h3 className="font-medium font-poppins text-[20px]">Subscribe</h3>
            <p className="font-normal font-poppins text-md">
              Get 10% off your first order
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your email"
                className="py-2! rounded-md bg-transparent border-[2px] border-white-ffffff px-3!"
              />
              <span className="inline-block absolute top-1/2 -translate-y-1/2 right-3 ">
                <IoSendOutline />
              </span>
            </div>
          </div>

          {/* Support */}
          <div className="text-white flex flex-col items-start gap-y-4">
            <h2 className="font-inter text-[20px] font-medium text-white-ffffff cursor-pointer">
              Support
            </h2>
            <p className="font-normal font-poppins text-[16px] ">
              111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
            </p>
            <a className="font-normal font-poppins text-md">
              exclusive@gmail.com
            </a>
            <a href="#">+88015-88888-9999</a>
          </div>
          {/* Support */}

          {/* account */}
          <div className="text-white flex flex-col items-start gap-y-4">
            <h2 className="font-inter text-[20px] font-medium text-white-ffffff cursor-pointer">
              Account
            </h2>
            <p className="font-normal font-poppins text-[16px] ">My Account</p>
            <a className="font-normal font-poppins text-md">Login / Register</a>
            <a href="#">Cart</a>
            <a href="#">Wishlist</a>
            <a href="#">Shop</a>
          </div>
          {/* account */}
          {/* Quick Link */}
          <div className="text-white flex flex-col items-start gap-y-4">
            <h2 className="font-inter text-[20px] font-medium text-white-ffffff cursor-pointer">
              Quick Link
            </h2>
            <p className="font-normal font-poppins text-[16px] ">
              Privacy Policy
            </p>
            <a className="font-normal font-poppins text-md">Terms Of Use</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </div>
          {/* Quick Link */}

          {/* Download  App */}
          <div className="text-white flex flex-col items-start gap-y-4">
            <h2 className="font-inter text-[20px] font-medium text-white-ffffff cursor-pointer">
              Download App
            </h2>
            <p className="font-normal font-poppins text-[14px] opacity-75 ">
              Save $3 with App New User Only
            </p>
            <div className="flex w-full ">
              <div className="w-1/2 ">
                <img src={assets.QrCode} alt={assets.QrCode} />
              </div>
              <div className="w-1/2  h-full flex flex-col gap-y-2 ">
                <div className="w-full h-1/2">
                  <img src={assets.googlePlay} alt={assets.googlePlay} />
                </div>
                <div className="w-full h-1/2">
                  <img src={assets.appStore} alt={assets.appStore} />
                </div>
              </div>
            </div>
            {/* icons */}
            <div className="flex  items-center gap-x-6 mt-6!">
              <span className="text-xl">{icons.facebook}</span>
              <span className="text-xl">{icons.twitter}</span>
              <span className="text-xl">{icons.instagram}</span>
              <span className="text-xl">{icons.linkedIn}</span>
            </div>
            {/* icons */}
          </div>
          {/*  Download  App */}
        </div>
      </div>
      {/* footer bottom */}
      <div className="text-white-ffffff flex items-center justify-center pt-7! pb-10! border-t-[1px] border-t-gray-500">
        <h4 className="text-[16px] font-normal font-poppins text-white-ffffff opacity-30">
          {" "}
          &copy; Copyright Rimel 2022. All right reserved
        </h4>
      </div>
      {/* footer bottom */}
    </div>
  );
};

export default Footer;
