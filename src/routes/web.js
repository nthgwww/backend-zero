const express = require("express");
const {
  getHomepage,
  getABC,
  getTommy,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser
} = require("../controllers/homeController");
const router = express.Router();

// router.get('/route', handler)

//khai bao route
router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/tommy", getTommy);

router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);
router.post("/delete-user", postDeleteUser);

module.exports = router;
