const Order = require("../models/orderModel");

// 📌 Create an order
exports.createOrder = async (req, res) => {
  try {
    const { userId, items, totalAmount, status } = req.body;

    if (!userId || !items || !totalAmount) {
      return res.status(400).json({ message: "Missing required fields!" });
    }

    const newOrder = new Order({
      userId,
      items,
      totalAmount,
      status: status || "pending",
    });

    await newOrder.save();
    res
      .status(201)
      .json({ message: "Order placed successfully!", order: newOrder });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Error placing order", error });
  }
};

// 📌 Get all orders
exports.getOrders = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you get `userId` from authentication middleware
    const orders = await Order.find({ userId }).populate(
      "userId",
      "name email"
    );
    // Fetch only the logged-in user's orders
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
exports.getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(req.params.id).populate(
      "userId",
      "name email"
    );
    console.log(order);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch order", error });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("userId", "name email"); // Populate user details
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders", error });
  }
};
