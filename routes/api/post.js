const express = require("express");
const router = express.Router();
const { DataBase, Users, Posts, Comments } = require("./DataBase");

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

router.post("/update", async (req, res) => {
  console.log("post get request", req.body, Posts);

  var response = [];

  for (var j = 0; j < req.body.length; j++) {
    Posts[j] = req.body[j];
  }
  console.log("xox", Posts);
  res.send(Posts);
});





router.post("/comments", async (req, res) => {
  console.log("comments get request", req.body);
var response = []
for (var j = 0; j < req.body.length; j++) {
  var match = Comments.some((comment) => comment.id === req.body[j])
  if (match){
    var matchedComment = Comments.find((comment)=> comment.id=== req.body[j])
    response.push(matchedComment) 
  }

}
 console.log(response)
res.send(response)

});

router.post("/newcomment", async (req,res) => {
  Comments.push(req.body)
for (var j=0; j<Posts.length; j++) {
if (Posts[j].id === req.body.post){
  Posts[j].comments.push(req.body.id)
}

}

res.send('thank you')

})




module.exports = router;
