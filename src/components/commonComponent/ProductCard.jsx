import { icons } from "../../helpers/iconProvider";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Star from "./Star";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Features/AllSlice/cartSlice";
import { toggleWishList } from "../../Features/AllSlice/wishListSlice";

const ProductCard = ({ itemData }) => {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList);
  const cart = useSelector((state) => state.cart);
  const isWishListed = wishList.some((item) => item.id === itemData.id);
  const isCart = cart.some((item) => item.id === itemData.id);

  if (!itemData) return null;
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="bg-white-f5f5f5 rounded-2 overflow-hidden pb-[55px]! px-4! pt-4! rounded relative group cursor-pointer">
          <div className="flex justify-between">
            {itemData.discountPercentage && (
              <span className="px-3! py-2! rounded bg-red-db4444 h-fit font-poppins text-sm text-white-ffffff font-normal">
                -{itemData?.discountPercentage}%
              </span>
            )}
            {/*  */}
            <div className="flex flex-col">
              <div
                onClick={() => dispatch(toggleWishList(itemData))}
                className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-white-ffffff cursor-pointer  text-xl"
              >
                <span>
                  {isWishListed ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart />
                  )}
                </span>
              </div>
              <Link to={`/productdetails/${itemData.id}`}>
                {" "}
                <div className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-white-ffffff cursor-pointer hover:bg-red-db4444 hover:text-white-ffffff text-xl mt-2!">
                  {" "}
                  {icons.openEye}
                </div>
              </Link>
            </div>
            {/*  */}
          </div>
          <div className="flex justify-between cursor-pointer">
            <div className="w-[172px] h-[152px] flex-1">
              <img
                src={itemData?.thumbnail}
                alt="product"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div
            onClick={() => dispatch(addToCart(itemData))}
            className="opacity-0 absolute left-0 bottom-0 font-poppins font-medium text-lg cursor-pointer flex justify-center items-center w-full h-12 bg-text-black-000000 text-white-ffffff group-hover:opacity-100 transition-all"
          >
            <h3>{isCart ? "Remove To Cart" : "Add To Cart"}</h3>
          </div>
        </div>

        <div className="flex flex-col items-start gap-y-2 mt-4!">
          <h2 className="text-lg font-poppins font-medium cursor-pointer w-full truncate">
            {itemData?.title}
          </h2>
          <div className="flex items-center gap-x-3 cursor-pointer">
            <span className="text-red-db4444 font-medium text-lg font-poppins inline-block">
              $
              {(
                itemData?.price -
                (itemData?.discountPercentage / 100) * itemData?.price
              ).toFixed(2)}
            </span>
            <span className="text-text-black-000000 opacity-50 font-medium text-lg font-poppins inline-block line-through">
              ${(itemData?.price).toFixed(2)}
            </span>
          </div>
          <div className="flex items-center gap-x-1 cursor-pointer">
            <Star rating={itemData && itemData?.rating} />
            <h3 className="text-text_black000000 opacity-50 font-medium text-lg font-poppins ml-2!">
              ({parseInt(itemData?.rating)})
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
