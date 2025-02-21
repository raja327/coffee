const Menu = require("../models/menuModel");
const Service = require("../models/serviceModel");

exports.allSearch = async (req, res) => {
  try {
    const query = req.query.q;
    console.log(query);

    if (!query) {
      return res.status(400).json({ message: "Search query is required" });
    }

    // Search in Menu and Services collections using regex (case-insensitive)
    const menuResults = await Menu.find({
      name: { $regex: query, $options: "i" },
    });
    const serviceResults = await Service.find({
      name: { $regex: query, $options: "i" },
    });

    res.json({
      menu: menuResults,
      services: serviceResults,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
