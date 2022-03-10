const express = require("express");
const router = express.Router();
var { DataBase, Users, Posts, Comments } = require("./DataBase");

var authentication = true
function isUserAuthenticated(req,res,next){
   console.log('log')
   next()
}


//Retrieve All
router.get("/",async(req,res,next)=>{
    console.log('get request made')

    res.send(DataBase)

})



//Retrieve Friends
router.post("/friends", async (req, res) => {
const matches = []

for(var j=0; j<req.body.length; j++){
for(var k=0; k<req.body.length; k++ ){

    if (DataBase[k].id===req.body[j]){
        matches.push(DataBase[k])
    }
}}
res.send(matches)
});



module.exports = router;