const express = require("express");
const router = express.Router();

const addUser = require("./addUser");
const listUser = require("./listUser");
const updateUser = require("./updateUser");
const deleteUser = require("./deleteUser");
const signUp = require("./signUp");
const login = require("./login");

router.use("/add_user", addUser);
router.use("/list_user", listUser);
router.use("/update_user", updateUser);
router.use("/delete_user", deleteUser);
router.use("/sign_up", signUp);
router.use("/login", login);

module.exports = router;
