const express = require('express')


const router = express.Router();

router.post('/', async(req,res)=>{


console.log('a post was made')

res.send('hello')



})


module.exports = router;