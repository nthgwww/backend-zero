const express = require("express");
const router = express.Router();

//khai bao route
router.get("/", (req, res) => {
  res.send("Hello World with TommyHo & nodemon!");
});

router.get("/abc", (req, res) => {
  res.send("Check ABC!");
});

router.get("/tommy", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router;
