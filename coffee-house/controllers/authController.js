const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.signUp = async (req, res) => {
  // const { email } = req.body;
  // console.log(email);
  try {
    const alreadyExist = await User.findOne({ email: req.body.email });
    if (alreadyExist) {
      return res.status(400).json({
        status: "fail",
        message: "User already exist",
      });
    }
    const user = await User.create(req.body);

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(201).json({
      status: "success",
      token,
      data: {
        user,
        message: "User created successfully",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    // console.log(user.email);
    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "User not found",
      });
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ status: "fail", message: "Wrong password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.status(200).json({
      status: "success",
      message: "User logged in successfully",
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        name: user.name,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Something went wrong on server",
    });
  }
};
