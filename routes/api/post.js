const express = require("express");
const router = express.Router();
const { DataBase, Users, Posts } = require("./DataBase");

router.post("/", async (req, res) => {
  console.log("post get request", req.body);

  var response = [];

  for (var j = 0; j < req.body.length; j++) {
    if (Posts.some((post) => post.id === req.body[j])) {
      const match = Posts.find((post) => post.id === req.body[j]);
      response.push(match);
    }
  }

  res.send(response);
});

module.exports = router;
