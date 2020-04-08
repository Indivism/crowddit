const express = require("express");
const bodyParser = require("body-parser");
const user = require('.\\routes\\user');
const app = express();

//initiate mongodb server
const initiateMongoServer = require(".\\config\\db")
initiateMongoServer();


//port
const port = 3000;

//middleware
app.use(bodyParser.json());

//router middleter
app.use("/user",user);

//listen
app.listen(port);

