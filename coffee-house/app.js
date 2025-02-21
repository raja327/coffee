const express = require("express");
const cors = require("cors");

const serviceRouter = require("./routes/serviceRoutes");
const authRouter = require("./routes/authRoutes");
const menuRouter = require("./routes/menuRoutes");
const userRouter = require("./routes/userRoutes");
const orderRouter = require("./routes/orderRoutes");
const adminOrderRouter = require("./routes/adminOrderRoutes");
const searchRouter = require("./routes/searchRouter");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// ROUTES
app.use("/api/services", serviceRouter);
app.use("/api/auth", authRouter);
app.use("/api/menus", menuRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/search", searchRouter);
app.use("/api/admin/orders", adminOrderRouter);

// Start server

module.exports = app;
