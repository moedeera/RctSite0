const express = require("express");
var cors = require("cors");
const { Router } = require("express");

const router = express.Router();
const number = { count: 2150, name: "James Smith" };

var JamesAccount= {

  name:'James Johnson', email:'JJ@g',password:'123',
  posts:'',likes:''
  
  }


var User = {

name:'', email:'',password:'',

}

router.get("/", async (req, res) => {
  console.log("a GET request was made", req.body);

  res.send(number);
});

router.post("/", async (req, res) => {
  console.log("a GET request was made", req.body);

  res.send(number);
});

router.post("/update", async (req, res) => {
  console.log("a POST request was made", req.body);
  number.count = req.body.count;
  res.send(number);
});

router.post("/register", async (req, res) => {
  console.log("a register POST request was made", 
  req.body.name, req.body.email,req.body.password);
  User.name = req.body.name;
  User.email = req.body.email;
  User.password = req.body.password;
  
  res.send('Server message');
});




module.exports = router;
