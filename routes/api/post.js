const express = require('express')
const router = express.Router();

router.post('/posts', async(req,res)=>{


console.log('a post was made')



})

module.exports = router;