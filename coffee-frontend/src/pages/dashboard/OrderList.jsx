import { data } from "react-router-dom";
import { useGetOrdersQuery } from "../../features/orderApi";

const OrderList = () => {
  const { data: orders, error, isLoading } = useGetOrdersQuery();
  console.log(data);
  if (isLoading) return <p>Loading orders...</p>;
  if (error) return <p className="text-red-500">Failed to load orders.</p>;

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Order List</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="border p-4 mb-4 rounded-md shadow">
            <h3 className="font-semibold">Order ID: {order._id}</h3>
            <p>
              User: {order.userId?.name} ({order.userId?.email})
            </p>
            <p>Total Amount: Rs {order.totalAmount}</p>
            <p>
              Status:{" "}
              <span className="font-bold text-blue-600">{order.status}</span>
            </p>

            <h4 className="mt-3 font-semibold">Items:</h4>
            <ul>
              {order.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center ml-4 text-gray-700"
                >
                  <img src={item.image} className="w-16 h-16" alt={item.name} />
                  {item.name} - Rs {item.price} x {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderList;
