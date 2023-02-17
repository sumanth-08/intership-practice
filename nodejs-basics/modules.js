// const data = "this is awesome";

// module.exports = data;

const mongoose = require("mongoose");

const schema = mongoose.Schema;

const ModelSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    data: Buffer,
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("test", ModelSchema);
