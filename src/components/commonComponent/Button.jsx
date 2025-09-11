import { Link } from "react-router";

const Button = ({ btnText, className }) => {
  return (
    <Link
      to={"/product"}
      className={`px-[48px]! py-4! bg-red-db4444 rounded text-md font-poppins font-medium text-white-ffffff hover:opacity-75 cursor-pointer ${className}`}
    >
      {btnText}
    </Link>
  );
};

export default Button;
