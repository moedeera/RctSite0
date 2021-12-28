const express = require('express')
var cors = require('cors');
const { Router } = require('express');

const router = express.Router();
const number = {id:2150, name:'hello'}

router.get('/', async(req,res)=>{


    console.log('a GET request was made', req.body)
    
    res.send(number)
    
    
    })
    






router.post('/', async(req,res)=>{


console.log('a post was made', req.body)
const number = {id:5, name:'hello'}
res.send(number)


})


module.exports = router;