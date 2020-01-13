/*
   
*/
const http = require('http');
const url = require('url');
const path = require('path');
const querystring = require('querystring');
const staticServer = require('./staticServer');

http.createServer((req,res)=>{
	//start static resource server ,url include '/resource'
	if(req.url.startsWith('/resource')){
		console.log('all file direction : '+path.join(__dirname,'/../'));
       
        staticServer.staticServer(req,res,path.join(__dirname,'/../'))

	}
	
	//dynamic resource 
	if(req.url.startsWith('/login')){

		//receive get request
		if(req.method == 'GET'){
			let param = url.parse(req.url,true).query;
			//temporary not conn dataBase
			if(param.username == 'admin' && param.password == 'admin'){
				res.end('get success');
			 }else{
                res.end('get failure');
            }
		}

		//receive post request
		if(req.method == 'POST'){
			let pdata = ''; //accept use sending data
			req.on('data',(chunk)=>{
				pdata += chunk;
			});

			req.on('end',()=>{
				//analysis pdata
				let obj = querystring.parse(pdata);
				if(obj.username == 'admin' && obj.password == 'admin'){
					res.end('post success');
				}else{
					res.end('post failure');
				}
			});

		}
	}

	if(!req.url.startsWith('/resource')&& !req.url.startsWith('/login')){
		 res.end('not found resource');
	}


}).listen('80',()=>{
	console.info('running....');
})

































