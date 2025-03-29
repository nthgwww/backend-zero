const connection = require("../config/database");

const getHomepage = (req, res) => {
  //test connection
  return res.render('home.ejs')
};

const getABC = (req, res) => {
  res.send("Check ABC!");
};

const getTommy = (req, res) => {
  res.render("sample.ejs");
};

module.exports = { getHomepage, getABC, getTommy };
