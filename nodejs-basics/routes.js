const express = require("express");
const APIHandler = require("./apiHandler");

module.exports = (app) => {
  app.use(express.json());
  app.use("/api/user", APIHandler);
};
