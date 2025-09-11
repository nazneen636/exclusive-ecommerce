import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import BreadCrumb from "../../commonComponent/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty } from "../../../Features/AllSlice/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto!">
      <BreadCrumb />
      <h1 className="text-2xl font-bold mb-6!">🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left: Cart Items */}
          <div className="col-span-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-7 gap-4 items-center p-4! border border-gray-200 shadow rounded-lg mb-4!"
              >
                {/* img */}
                <div className="w-20 h-20 bg-gray-200 rounded overflow-hidden mr-5!">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                {/* title and price */}
                <div className=" col-span-3">
                  <h2 className="font-semibold text-xl">{item.title}</h2>
                  <p className="text-gray-600 text-base">${item.price}</p>
                </div>
                {/* quantity control (static) */}
                <div className="flex items-center gap-3 mt-2!">
                  <button
                    onClick={() => dispatch(decreaseQty(item.id))}
                    className="w-8 h-8 flex items-center justify-center border rounded text-sm text-gray-800"
                  >
                    <FaMinus />
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increaseQty(item.id))}
                    className="w-8 h-8 flex items-center justify-center border rounded text-sm text-gray-800"
                  >
                    <FaPlus />
                  </button>
                </div>
                {/* total price */}
                <div className="flex items-center gap-4">
                  <span className="font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                {/* delete button */}
                <button className="text-red-500 hover:text-red-700 text-xl">
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          {/* Right: Summary */}
          <div className="p-6! border rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-semibold mb-4!">Order Summary</h2>
            <div className="flex justify-between mb-2!">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2!">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-green-600 text-white py-2! rounded mt-4! hover:bg-green-700">
              Checkout
            </button>
            <button className="w-full bg-red-500 text-white py-2! rounded mt-2! hover:bg-red-600">
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
