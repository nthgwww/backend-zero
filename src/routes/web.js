const express = require("express");
const {
  getHomepage,
  getABC,
  getTommy,
} = require("../controllers/homeController");
const router = express.Router();
const mysql = require("mysql2/promise");

// router.get('/route', handler)

//khai bao route
router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/tommy", getTommy);

//test connection
(async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "123456",
    database: "hoidanit",
  });

  try {
    const [results, fields] = await connection.query(
      'select * from Users'
    );
    console.log('>>> results=', results); // results contains rows returned by server
    // console.log('>>> fields=', fields); 
    // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }
})();

module.exports = router;
