require("dotenv").config();
const express = require("express"); //commondjs
const configViewEngine = require("./config/viewEngine");  
const webRouter = require("./routes/web");
const app = express(); //add express to app
const port = process.env.PORT || 3000;
const hostname = process.env.HOST || "localhost";

//config template engine
configViewEngine(app);

//khai bao route
app.use('/', webRouter);
// app.use('/v1', webRouter);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
