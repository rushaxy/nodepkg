const path = require('path');
const fs = require('fs');
const mime = require('../json/mime.json');
const url = require('url');


exports.staticServer = (req,res,root)=>{
	
    let pathName = url.parse(req.url,true).pathname;
    

    console.info('request content : '+pathName);
    console.log('file address :'+path.join(root,pathName));


	fs.readFile(path.join(root,pathName) , (err,fileContent)=>{

		if(err){
            // no   corresponding file was found
            res.writeHead(404,{
                'Content-Type':'text/plain; charset=utf8'
            });
            res.end('页面走丢了');
            
        }else{
        	

        	let dtype = 'text/html';//file sending type 
        	let ext = path.extname(req.url);
        	if(mime[ext]){
        		dtype = mime[ext]
        	}


        	//if ile Content，set encode utf8
        	if(dtype.startsWith('text')){
        		dtype +='; charset=utf8';
        	}//other type file eg photo and so on, leave coding behind for now


        	//set repley head infomation
        	res.writeHead(200,{
        		'Content-Type':dtype
        	});

        	res.end(fileContent);//transfer stream file



        }


	});
}






























