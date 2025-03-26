const express = require("express"); //commondjs

const app = express(); //add express to app
const port = 8080;

//khai bao route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.send("Check ABC!");
});

app.get("/tommy", (req, res) => {
  res.send("<h1>Tommy dep trai</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
