require("dotenv").config();
const express = require("express"); //commondjs
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const app = express(); //add express to app
const port = process.env.PORT || 3000;
const hostname = process.env.HOST || "localhost";
const connection = require("./config/database");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//config template engine
configViewEngine(app);

//khai bao route
app.use("/", webRouter);
// app.use('/v1', webRouter);

connection.query("select * from Users", function (err, results, fields) {
  console.log(">>> results=", results); // results contains rows returned by server
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
