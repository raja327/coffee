const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Menu name is required"],
      unique: [true, "Menu name must be unique"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Menu price is required"],
      min: [0, "Price cannot be negative"],
    },
    category: {
      type: String,
      required: [true, "Menu category is required"],
      trim: true,
    },
    image: {
      type: String, // Store the image URL
      default: "https://via.placeholder.com/150", // Default image
    },
    description: {
      type: String,
      required: [true, "Menu description is required"],
      trim: true,
      maxlength: [500, "Description should not exceed 500 characters"],
    },
  },
  { timestamps: true } // Adds createdAt & updatedAt fields automatically
);

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
