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
  res.send(DataBase);
});
// LOGIN FUNCTION
router.post("/login", async (req, res) => {
  const match = Users.some((user) => user.email === req.body.email);

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
  number.count = req.body.count;
  res.send(number);
});

router.post("/register", async (req, res) => {
  DataBase.push(req.body.Profile);
  Users.push(req.body.User);

  res.send("Server message");
});

router.post("/search", async (req, res) => {
  res.send("request was received");
});

router.get("/profiles/:user_id", async (req, res) => {
  try {
    const profile = DataBase.find(
      (profile) => profile.id == req.params.user_id
    );

    res.send(profile);
  } catch (error) {
    res.send(error);
  }
});

router.get("/posts", async (req, res) => {
  res.send("hello");
});

module.exports = router;
