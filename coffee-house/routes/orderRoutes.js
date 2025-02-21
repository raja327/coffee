const express = require("express");
const router = express.Router();
const authProtect = require("../middlewares/authProtect");
const orderController = require("../controllers/orderController");

router.post("/", authProtect.protect, orderController.createOrder);
router.get("/", authProtect.protect, orderController.getOrders);
router.get("/:id", authProtect.protect, orderController.getOrderById);

module.exports = router;
