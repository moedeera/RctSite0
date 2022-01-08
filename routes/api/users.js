const express = require("express");
var cors = require("cors");
const { Router } = require("express");
const { DataBase, Users } = require("./DataBase");

const router = express.Router();
const number = { count: 2150, name: "James Smith" };

var User = {
  name: "",
  email: "",
  password: "",
};

router.get("/", async (req, res) => {
  console.log("a GET request was made", req.body);

  res.send(number);
});

router.post("/", async (req, res) => {
  const match = Users.some((user) => user.email === req.body.email);
  console.log("a GET request was made", req.body, match);
  if (match) {
    const user = Users.find((user) => user.email === req.body.email);
    if (user.password === req.body.password) {
      const profile = DataBase.find((profile) => profile.id === user.id);
      profile.login = true;
      res.send(profile);
    } else {
      res.send("Incorrect Password");
    }
  } else {
    res.send("No User with that Email");
  }
});

router.post("/update", async (req, res) => {
  console.log("a POST request was made", req.body);
  number.count = req.body.count;
  res.send(number);
});

router.post("/register", async (req, res) => {
  console.log(
    "a register POST request was made",
    req.body.name,
    req.body.email,
    req.body.password
  );
  User.name = req.body.name;
  User.email = req.body.email;
  User.password = req.body.password;

  res.send("Server message");
});

module.exports = router;
