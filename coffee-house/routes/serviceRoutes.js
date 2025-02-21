const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

router.get("/", serviceController.getAllServices);
router.get("/top-services", serviceController.getTopServices);
router.post("/", serviceController.createService);
router.get("/:id", serviceController.getService);
router.patch("/:id", serviceController.updateService);
router.delete("/:id", serviceController.deleteService);

module.exports = router;
