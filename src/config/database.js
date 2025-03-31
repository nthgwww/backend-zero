require("dotenv").config();
const mysql = require("mysql2/promise"); // Sử dụng mysql2 với promise để dễ dàng sử dụng async/await

const connection = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3307,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || "hoidanit",
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
  });

module.exports = connection;
