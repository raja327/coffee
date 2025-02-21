const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const menuController = require("../controllers/menuController");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files in 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const extName = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimeType = allowedTypes.test(file.mimetype);

    if (mimeType && extName) {
      return cb(null, true);
    } else {
      return cb(new Error("Only JPEG, JPG, and PNG files are allowed!"));
    }
  },
});

// Routes
router.get("/", menuController.getAllMenu);
router.get("/top-menus", menuController.getTopMenus);
router.get("/:id", menuController.getMenu);
router.put("/:id", upload.single("image"), menuController.updateMenu);
router.delete("/:id", menuController.deleteMenu);

// Route to create a menu with image upload
router.post("/", upload.single("image"), menuController.createMenu);

module.exports = router;
