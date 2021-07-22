
const express = require("express");
const chirpsRouter = require("./chirps");
const usersRouter = require("./");

let router = express.Router();

router.use("/chirps", chirpsRouter);
router.use("/", usersRouter);

module.exports = router;
