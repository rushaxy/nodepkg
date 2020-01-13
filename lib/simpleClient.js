const http = require('http');


/**
 * default get request 
 * @type {Object}
 */

var options = {
	// hostname : 'cn.bing.com',
	// port : 80
     
    // hostname : 'localhost',
    // port : 3000
    
	hostname : 'localhost',
	port : 80,
    // path : '/resource/data.xml',
    path : '/resource/logo.png',

    method : 'get'
}

var req=http.request(options);


req.on("response",function(res){

    res.setEncoding("utf-8");
     
    var pdata = '';
    res.on("data",function(chunk){
    	// pdata += chunk.toString()+'￥';   
    		pdata += chunk;
    });

    
    res.on('end',()=>{
    	console.info(pdata);
    })
    
    console.log(res.statusCode);
})


req.on("error",function(err){

    console.log('错误'+err.message);
});

req.end();








/**
 * get request
 * @type {[type]}
 */
// var http=require("http");
/*
var querystring=require("querystring");

var postData=querystring.stringify({
    "content":"我真的只是测试一下",
    "mid":8837
});

var options={
    hostname : 'localhost',
	port : 3000,

    // hostname:"www.imooc.com",
    // port:80,


    path:"/course/document",
    method:"get",
    headers:{
       "Accept":"application/json, text/javascript; q=0.01",
        "Accept-Encoding":"gzip, deflate",
        "Accept-Language":"zh-CN,zh;q=0.8",
        "Connection":"keep-alive",
        "Content-Length":postData.length,
        "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
        "Cookie":"imooc_uuid=6cc9e8d5-424a-4861-9f7d-9cbcfbe4c6ae; imooc_isnew_ct=1460873157; loginstate=1; apsid=IzZDJiMGU0OTMyNTE0ZGFhZDAzZDNhZTAyZDg2ZmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjkyOTk0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGNmNmFhMmVhMTYwNzRmMjczNjdmZWUyNDg1ZTZkMGM1BwhXVwcIV1c%3DMD; PHPSESSID=thh4bfrl1t7qre9tr56m32tbv0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1467635471,1467653719,1467654690,1467654957; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1467655022; imooc_isnew=2; cvde=577a9e57ce250-34",
        "Host":"www.imooc.com",
        "Origin":"http://www.imooc.com",
        "Referer":"http://www.imooc.com/video/8837",
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2763.0 Safari/537.36",
        "X-Requested-With":"XMLHttpRequest",
    }
}

var req = http.request(options,function(res){

    res.on("data",function(chunk){
        console.log(chunk.toString());
    });

    res.on("end",function(){
        console.log("评论完毕！");
    });


    console.log(res.statusCode);

});

req.on('error',(err)=>{
	console.info('错误'+err.message);
})


req.write(postData);
req.end();

*/





