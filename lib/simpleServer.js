const http = require('http');
const path = require('path');
const fs = require('fs');


const querystring = require('querystring');
const template = require('art-template');

const scoreData = require('../json/scores.json');

/**
 * exampl one 
 * @param  {[type]} req    [description]
 * @param  {[type]} res){                 res.writeHead(200,{        "content-type":"text/plain"    });    res.write("hello nodejs");    res.end();}).listen(3000 [description]
 * @return {[type]}        [description]
 */
// http.createServer(function(req,res){
    
//     res.writeHead(200,{
//         "content-type":"text/plain"
//     });
    
//     res.write("nodejs");
//     res.end();
// }).listen(3000,()=>{ //回调指针函数
// 	console.log('start....');
// });

/**
 * exampl two
 * @type {[type]}
 */
var server=new http.Server();

server.on("request",function(req,res){
    res.writeHead(200,{
        "content-type":"text/plain"
    });
    res.write("nodejs");
    res.end();
});
server.listen(3000);
































