const Menu = require("../models/menuModel");
const fs = require("fs").promises;
exports.getAllMenu = async (req, res) => {
  try {
    const menu = await Menu.find({});
    res.status(200).json({
      results: menu.length,
      status: "success",
      data: {
        menu,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.createMenu = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);
    if (!req.file) {
      return res.status(400).json({
        status: "fail",
        message: "Image is required",
      });
    }
    const imgUrl = `http://localhost:5000/uploads/${req.file.filename}`;

    const menu = await Menu.create({
      ...req.body,
      image: imgUrl,
    });

    res.status(201).json({
      status: "success",
      message: "Menu created successfully",
      data: { menu },
    });
  } catch (error) {
    console.error("Error creating menu:", error);

    // Handling MongoDB duplicate key error (code 11000)
    if (error.code === 11000) {
      return res.status(400).json({
        status: "fail",
        message: `Menu item with the name "${error.keyValue.name}" already exists. Please use a different name.`,
      });
    }

    res.status(500).json({
      status: "error",
      message: "Error creating menu",
      error: error.message,
    });
  }
};

exports.getMenu = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: menu,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateMenu = async (req, res) => {
  try {
    // Find the existing menu item
    const existingMenu = await Menu.findById(req.params.id);
    if (!existingMenu) {
      return res
        .status(404)
        .json({ status: "fail", message: "Menu item not found" });
    }

    const updateData = { ...req.body };

    // If a new file is uploaded, update the image
    if (req.file) {
      updateData.image = `http://localhost:5000/uploads/${req.file.filename}`;

      // Delete old image if it exists
      if (existingMenu.image) {
        const oldImagePath = `./uploads/${existingMenu.image.split("/").pop()}`;

        try {
          await fs.unlink(oldImagePath);
        } catch (err) {
          console.error("Error deleting old image:", err);
        }
      }
    }

    // Update the menu item
    const menu = await Menu.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: menu,
      message: "Menu updated successfully",
    });
  } catch (error) {
    console.error("Update menu error:", error);
    res
      .status(500)
      .json({ status: "error", message: "Server error", error: error.message });
  }
};

exports.deleteMenu = async (req, res) => {
  try {
    const menu = await Menu.findByIdAndDelete(req.params.id);
    if (!menu) {
      return res.status(404).json({
        status: "fail",
        message: "Menu item not found",
      });
    }
    if (menu.image) {
      try {
        const imagePath = `./uploads/${menu.image.split("/").pop()}`;
        await fs.unlink(imagePath);
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }

    res.status(200).json({
      status: "success",
      message: "Menu deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

// top 15 menus
exports.getTopMenus = async (req, res) => {
  try {
    const topMenus = await Menu.find({})
      .sort({ createdAt: -1 }) // Sorts by newest first
      .limit(15); // Limits results to 15

    res.status(200).json({
      status: "success",
      results: topMenus.length,
      menu: topMenus,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error fetching top menus",
      error: error.message,
    });
  }
};
