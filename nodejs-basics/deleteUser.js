const express = require("express");
const router = express.Router();
const model = require("./modules");
// const ObjectId = require("mongodb").ObjectID;

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // const data = await model.deleteOne({ _id: ObjectId(id) });
    const data = await model.findByIdAndDelete(id);
    return res.send(data);
  } catch (err) {
    console.log(err.stack);
  }
});

module.exports = router;
