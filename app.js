var express = require('express');
// 调用 express 实例，它是一个函数，不带参数调用时，会返回一个 express 实例，将这个变量赋予 app 变量。
var app = express();

//公开文件夹
app.use('/node_modules/',express.static('./node_modules/'));
app.use('/public/',express.static('public/'))
//模板引擎
app.engine('html',require('express-art-template'))

//post数据
bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//路由
var router =require('./router')
app.use(router);
app.listen(3000, function () {
    console.log('app is listening at port 3963');
});
