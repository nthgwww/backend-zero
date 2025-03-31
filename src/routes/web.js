const express = require("express");
const {
  getHomepage,
  getABC,
  getTommy,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");
const router = express.Router();

// router.get('/route', handler)

//khai bao route
router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/tommy", getTommy);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);

module.exports = router;
