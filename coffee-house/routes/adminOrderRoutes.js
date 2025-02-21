const express = require("express");
const router = express.Router();
const authProtect = require("../middlewares/authProtect");
const orderController = require("../controllers/orderController");
router.get("/", authProtect.protect, orderController.getAllOrders);

module.exports = router;
