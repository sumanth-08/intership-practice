const express = require("express");
const router = express.Router();
const model = require("./loginModel");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    let encryptUserPassword = await bcrypt.hash(password, 10);

    await model.create({
      email: email,
      password: encryptUserPassword,
    });
    return res.send("Registerd successfull");
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
