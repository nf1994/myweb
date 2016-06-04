/**
 * Created by nick on 16-6-3.
 */
/**
 * 引入依赖模块
 */
var express = require('express'),
    http = require('http'),
    path = require('path');

var app = express(),
    server = http.Server(app);

/**
 * 设置
 */
app.set('port', process.env.PORT || 3000);  //服务启动端口
app.set('views', __dirname + '/views');     //视图文件
app.set('view engine', 'ejs');              //页面引擎
app.use('/', express.static(path.join(__dirname, 'assets')));   //静态文件路径

app.get('/', function (req, res) {
    res.render('index.ejs');    //请求跳转到 index.ejs文件
})

server.listen( app.get( 'port' ), function(){   //监听服务端口
    console.log( 'root server listening on port' + app.get( 'port' ));
});

server.on( 'close', function(){
    console.log( 'close' );
});