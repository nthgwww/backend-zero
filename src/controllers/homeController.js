const connection = require("../config/database");

const getHomepage = (req, res) => {
  //test connection
  return res.render("home.ejs");
};

const getABC = (req, res) => {
  res.send("Check ABC!");
};

const getTommy = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  console.log(">>> check req.body", req.body); // Kiểm tra dữ liệu từ form
  res.send("create new user");
};

module.exports = { getHomepage, getABC, getTommy, postCreateUser };
