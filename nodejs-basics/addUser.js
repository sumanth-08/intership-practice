const express = require("express");
const router = express.Router();
const model = require("./modules");
const { uplods } = require("./multer");
const autheticate = require("./authentiction");

router.post("/", autheticate, uplods.single("image"), async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || name === "") {
      return res.send("name is required");
    }
    const oldEmail = await model.findOne({ email });
    if (oldEmail) {
      return res.send("email is already exist");
    }
    if (!req.file) {
      return res.send("image is required");
    }

    console.log(req.file);
    const saveData = new model({
      name: name,
      email: email,
      image: req.file.path,
    });
    await saveData.save();
    return res.send("Everything worked as expected");
  } catch (err) {
    console.log(err.stack);
  }
});

module.exports = router;
