const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // Thêm middleware để parse dữ liệu form

// Other configurations and routes