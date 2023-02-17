const express = require("express");
const autheticate = require("./authentiction");
const router = express.Router();
const model = require("./modules");

router.get("/", autheticate, async (req, res) => {
  try {
    const data = await model.find();
    return res.status(200).json({ "Everything worked as expected": data });
  } catch (err) {
    console.log(err.stack);
  }
});

module.exports = router;
