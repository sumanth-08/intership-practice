const express = require("express");
const router = express.Router();
const model = require("./modules");

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email } = req.body;
    const updateData = {
      name: name,
      email: email,
    };
    const options = { new: true };
    await model.findByIdAndUpdate(id, updateData, options);
    return res.send("Everything worked as expected");
  } catch (err) {
    console.log(err.stack);
  }
});

module.exports = router;
