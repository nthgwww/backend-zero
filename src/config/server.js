const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // Thêm middleware để parse dữ liệu form

const homeController = require("../controllers/homeController");

app.post("/delete-user", homeController.postDeleteUser);
app.post("/update-user", homeController.postUpdateUser);
app.post("/create-user", homeController.postCreateUser);

// Other configurations and routes
