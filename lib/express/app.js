/**
 * Express that HelloWorld
 * 
 */
var express = require('express');
var app = express();

// bind router 
app.get('/',(req,res)=>{
	//response request
	 res.send('Hello World!');
})

var server = app.listen(3000,'localhost',()=>{
	//listening demain or ip
	var host = server.address().address;
	//listening port
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s',host,port);

});

// console.log(server);