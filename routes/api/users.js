const express = require('express')
var cors = require('cors');
const { Router } = require('express');

const router = express.Router();
const number = {id:2150, name:'James'}

router.get('/', async(req,res)=>{


    console.log('a GET request was made', req.body)
    
    
    
    
    })
    






router.post('/', async(req,res)=>{


console.log('a POST request was made', req.body)
number.id = req.body.id
res.send(number)


})


module.exports = router;