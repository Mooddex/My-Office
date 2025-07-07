const jwt = require("jsonwebtoken");
const User = require("../models/User"); // adjust the path if needed

const requireAuth = async (req, res, next) => {
  // your logic
};

module.exports = { requireAuth };
