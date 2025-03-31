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

const postCreateUser = async (req, res) => {
  let email = req.body.email; // Lấy dữ liệu từ form
  let name = req.body.name;
  let city = req.body.city;
  console.log(">>> check data", email, name, city); // In ra dữ liệu để kiểm tra

  let [results, fields] = await connection.query(
    ` INSERT INTO Users (email, name, city) 
    VALUES (?, ?, ?) `,[email, name, city]
  );
  console.log(">>> check results", results);
  res.send('Create user succeed!');
  
};

const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};

module.exports = {
  getCreatePage,
  getHomepage,
  getABC,
  getTommy,
  postCreateUser,
};
