const express = require("express");
const router = express.Router();
const model = require("./loginModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await model.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        { expiresIn: "36h" }
      );
      return res.status(200).json({ email: user.email, access_token: token });
    }
    return res.send("User not found");
  } catch (err) {
    return res.send(err.stack);
  }
});

module.exports = router;
