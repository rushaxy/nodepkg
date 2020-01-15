const express = require('express');
const router = express.Router();

router.get('/hi',(req,res)=>{
	res.send('hi server');
});

router.get('/hello',(req,res)=>{
	res.send('hello router');
});

router.post('/abc',(req,res)=>{
	res.send('abc router')
})

module.exports = router;