import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
//error
import connectDB from "./config/connectDB";

//error

require("dotenv").config();

// const cors = require('cors');
let app = express();
// app.use(cors({origin: true}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials" , true)
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();


// let port = process.env.port || 6969;
//Port === undefined => port = 6969
let port = 8989;
app.listen(port, () => {
  //callback
  console.log("Backend Nodejs is runing on the port : " + port);
});
