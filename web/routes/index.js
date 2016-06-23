/**
 * Created by nick on 16-6-4.
 */
var issue = require('./issue.js'),
    session = require( 'express-session' ), //添加 express-session引用
    privilege = require( '../config/privilege' ),
    user = require("./user.js");

exports.all = function( app ){
    app.use( session({ //配置session
        resave: false,
        saveUninitialized: false,
        secret: 'upopen'
    }));
    app.use( function( req, res, next){
        if( privilege[ req.path ] && req.path != '/login' && !req.session.status ){
            //privilege[ req.path ] 判断该路径是否需要登录权限
            if( req.method == 'GET' ){ //如果是get请求
                res.redirect('/login'); 则执行跳转
            } else { //其它请求，基本都是POST，是不能直接redirect
                res.send( { code: 1001, msg: 'need you to log in'}); //则返回错误码，提示需要登录
            }
        } else {
            next();
        }
    })

    app.get( '/', function( req, res ){
        issue.index( req, res );
    });
    app.get( '/login', function( req, res ){
        issue.login( req, res );
    });
    app.post( '/login', function( req, res ){
        issue.loginUser( req, res );
    });
    app.get('/logout', function( req, res ){
        req.session.status = false;
        res.setHeader("Set-Cookie","username=null;" );
        res.redirect( '/' );
    });
    app.get( '/register', function( req, res ){
        issue.register( req, res );
    });
    app.post('/register', function( req, res ){
        issue.registerUser( req, res );
    });
    app.get( '/user/center', function( req, res ){
        user.center( req, res );
    });
    app.get( '/user/blog', function( req, res ){
        user.blog( req, res );
    });
    app.get( '/user/info', function( req, res ){
        user.info( req, res );
    });
}