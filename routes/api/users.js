const express = require("express");
var cors = require("cors");
const { Router } = require("express");

const router = express.Router();
const number = { count: 2150, name: "James Smith" };

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

module.exports = router;
