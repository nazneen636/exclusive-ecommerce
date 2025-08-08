import { BsSmartwatch, BsThreeDotsVertical } from "react-icons/bs";
import {
  FaAngleRight,
  FaCarSide,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegHeart,
  FaRegStar,
  FaRegUser,
  FaStar,
  FaStarHalfAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import {
  IoCartOutline,
  IoEyeOffOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { LiaAngleRightSolid } from "react-icons/lia";
import { LuGamepad, LuShieldCheck } from "react-icons/lu";
import { MdOutlineCameraAlt, MdOutlineRemoveRedEye } from "react-icons/md";
import { PiHeadphonesDuotone } from "react-icons/pi";
import { RiComputerLine } from "react-icons/ri";
import { TfiHeadphoneAlt, TfiMobile } from "react-icons/tfi";
import { VscSend } from "react-icons/vsc";

export const icons = {
  heart: <FaRegHeart />,
  search: <IoSearchOutline />,
  cart: <IoCartOutline />,
  leftArrow: <FaArrowLeftLong />,
  rightArrow: <FaArrowRightLong />,
  openEye: <MdOutlineRemoveRedEye />,
  closeEye: <IoEyeOffOutline />,
  computer: <RiComputerLine />,
  phone: <TfiMobile />,
  smartWatch: <BsSmartwatch />,
  camera: <MdOutlineCameraAlt />,
  headphone: <PiHeadphonesDuotone />,
  gaming: <LuGamepad />,
  fullStar: <FaStar />,
  halfStar: <FaStarHalfAlt />,
  blankStar: <FaRegStar />,
  car: <FaCarSide />,
  shield: <LuShieldCheck />,
  facebook: <FaFacebookF />,
  instagram: <FaInstagram />,
  linkedIn: <FaLinkedinIn />,
  twitter: <FaTwitter />,
  send: <VscSend />,
  customerSupport: <TfiHeadphoneAlt />,
  threeDot: <BsThreeDotsVertical />,
  user: <FaRegUser />,
  rArrow: <LiaAngleRightSolid />,
};
