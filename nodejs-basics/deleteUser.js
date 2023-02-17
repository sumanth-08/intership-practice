const express = require("express");
const router = express.Router();
const model = require("./modules");

router.delete("/:_id", async (req, res) => {
  try {
    const id = req.params.id;
    await model.deleteOne(id);
    return res.send("Everything worked as expected");
  } catch (err) {
    console.log(err.stack);
  }
});

module.exports = router;
