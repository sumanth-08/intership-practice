const jwt = require("jsonwebtoken");
require("dotenv").config();

const config = process.env;

const autheticate = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.send("autherization token is required");
  }
  try {
    const decode = jwt.verify(token, config.TOKEN_KEY);
    req.user = decode;
  } catch (err) {
    return res.send("Invalid token");
  }
  return next();
};

module.exports = autheticate;
