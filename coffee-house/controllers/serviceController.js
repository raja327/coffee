const Service = require("../models/serviceModel");
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find({});
    res.status(200).json({
      results: services.length,
      status: "success",
      data: {
        services,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: service,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.createService = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(200).json({
      status: "success",
      message: "Service created successfully",
      data: {
        service,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      message: "Service updated successfully",
      data: {
        service,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Service deleted successfully",
      data: {
        service,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getTopServices = async (req, res) => {
  try {
    const topServices = await Service.find({})
      .sort({ createdAt: -1 }) // Sorts by newest first
      .limit(4); // Limits results to 15

    res.status(200).json({
      status: "success",
      results: topServices.length,
      service: topServices,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error fetching top menus",
      error: error.message,
    });
  }
};
