import { data, useParams } from "react-router-dom";
import { useGetOrderByIdQuery } from "../../features/orderApi";

const OrderDetails = () => {
  const { id } = useParams();
  const { data: order, error, isLoading } = useGetOrderByIdQuery(id);

  console.log(data);

  if (isLoading) return <p>Loading order details...</p>;
  if (error)
    return (
      <p className="text-red-500">
        Error: {error.data?.message || "Failed to load order."}
      </p>
    );
  if (!order) return <p className="text-gray-500">Order not found.</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Order Details</h2>

      <p className="text-lg">
        <strong>Order ID:</strong> {order._id}
      </p>
      <p>
        <strong>User:</strong> {order.userId?.name} ({order.userId?.email})
      </p>
      <p>
        <strong>Total Amount:</strong> Rs {order.totalAmount}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        <span className="font-bold text-blue-600">{order.status}</span>
      </p>

      <h3 className="mt-3 font-semibold">Items Ordered:</h3>
      <ul>
        {order.items.map((item, index) => (
          <li key={index} className="ml-4 text-gray-700">
            {item.name} - Rs {item.price} x {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetails;
