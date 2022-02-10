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

  res.send(DataBase);
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
  console.log("a register POST request was made", req.body.User);
  DataBase.push(req.body.Profile);
  Users.push(req.body.User);
  console.log(Users, DataBase);
  res.send("Server message");
});

router.post("/search", async (req, res) => {
  console.log(req.body);

  res.send("request was received");
});

router.get("/profiles/:user_id", async (req, res) => {
  console.log(req.params.user_id);
  try {
    const profile = DataBase.find(
      (profile) => profile.id == req.params.user_id
    );
    console.log(profile);
    res.send(profile);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
