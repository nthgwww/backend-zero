const express = require("express");
const {
  getHomepage,
  getABC,
  getTommy,
} = require("../controllers/homeController");
const router = express.Router();

// router.get('/route', handler)

//khai bao route
router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/tommy", getTommy);

module.exports = router;
