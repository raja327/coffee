exports.restrictTo = async (req, res, next) => {
  if (!role.includes(req.user.role)) {
    return res.status(403).json({
      status: "fail",
      message: "You are not allowed to perform this action",
    });
  }
  next();
};
