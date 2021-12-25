const express = require('express')
var cors = require('cors');
const { Router } = require('express');

const router = express.Router();



router.post('/', async(req,res)=>{


console.log('a post was made', req.body)
const number = {id:150, name:'hello'}
res.send(number)


})


module.exports = router;