const express = require("express");
const router = express.Router();
const authProtect = require("../middlewares/authProtect");
const userController = require("../controllers/userController");

router.post("/profileUpdate", authProtect.protect, userController.userUpdate);

module.exports = router;
