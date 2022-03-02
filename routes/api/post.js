const express = require("express");
const router = express.Router();
var { DataBase, Users, Posts, Comments } = require("./DataBase");

router.post("/", async (req, res) => {
  var response = [];

  for (var j = 0; j < req.body.length; j++) {
    if (Posts.some((post) => post.id === req.body[j])) {
      const match = Posts.find((post) => post.id === req.body[j]);
      response.push(match);
    }
  }

  res.send(response);
});

router.post("/update", async (req, res) => {
  var response = [];

  for (var j = 0; j < req.body.length; j++) {
    Posts[j] = req.body[j];
  }

  res.send(Posts);
});

router.post("/comments", async (req, res) => {
  var response = [];
  for (var j = 0; j < req.body.length; j++) {
    var match = Comments.some((comment) => comment.id === req.body[j]);
    if (match) {
      var matchedComment = Comments.find(
        (comment) => comment.id === req.body[j]
      );
      response.push(matchedComment);
    }
  }

  res.send(response);
});

router.post("/newcomment", async (req, res) => {
  Comments.push(req.body);
  for (var j = 0; j < Posts.length; j++) {
    if (Posts[j].id === req.body.post) {
      Posts[j].comments.push(req.body.id);
    }
  }

  res.send("thank you");
});

router.post("/newpost", async (req, res) => {
  Posts.push(req.body);
  DataBase = DataBase.map((profile) =>
    profile.id === req.body.Poster
      ? { ...profile, Posts: [...profile.Posts, req.body.id] }
      : profile
  );
  var match = 99;
  for (var j = 0; j < DataBase.length; j++) {
    if (DataBase[j].id === req.body.Poster) {
      match = j;
    }
  }

  console.log(Posts);
  res.send("thanks");
});

module.exports = router;
