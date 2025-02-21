import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cartSlice";
import { useAddOrderMutation } from "../features/orderApi";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addOrder, { isLoading, isError, isSuccess, error }] =
    useAddOrderMutation();

  // Calculate total amount dynamically
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleOrder = async () => {
    const orderData = {
      userId: user.id,
      items: cartItems,
      totalAmount,
      status: "pending",
    };

    try {
      const res = await addOrder(orderData).unwrap();
      toast.success(res.message || "Order placed successfully!");
      dispatch(clearCart());
      navigate("/dashboard/orders");
    } catch (err) {
      console.error("Order failed:", err);
      toast.error("Failed to place order.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8 mt-12 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between p-4 border-b"
          >
            <div className="flex gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">Rs {item.price}</p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item._id))}
                    className="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400 transition"
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item._id))}
                    className="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400 transition"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => dispatch(removeItem(item._id))}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))
      )}

      {cartItems.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-bold">Total: Rs {totalAmount}</h3>
          <Link to="/dashboard/orders">
            <button
              onClick={handleOrder}
              className="mt-4 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Order Now"}
            </button>
          </Link>
        </div>
      )}

      {isSuccess && (
        <p className="text-green-500 mt-4">Order placed successfully!</p>
      )}
      {isError && (
        <p className="text-red-500 mt-4">
          Error: {error?.data?.message || "Failed to place order."}
        </p>
      )}
    </div>
  );
};

export default CartPage;
