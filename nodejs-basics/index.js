const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./routes")(app);

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://0.0.0.0:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const con = mongoose.connection;

con.on("open", () => {
  console.log("Database connected");
});

app.listen(3001, () => {
  console.log("Server is connected to 3001");
});
