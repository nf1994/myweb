/**
 * Created by nick on 16-6-4.
 */
var site = require( '../config/site' ), //引入site Config
    user = require( '../controls/user' );

function index( req, res ){
    res.render( 'issue/index.ejs', site.setting( req, '/issue/index', '/index' ) );
} //首页没有页面路径，需要指定path及 filename

function register( req, res ){
    res.render( 'issue/register.ejs', site.setting( req, '/issue' ) ); //配置信息，供ejs调用
}

function registerUser( req, res ){
    user.addUser( req, res );
    //这里原本是要处理数据库存储操作，这里先走通ajax通信，验证能成功获取数据
}

function login( req, res ) {
    // console.log("test!!!!");
    res.render( 'issue/login.ejs', site.setting( req, '/issue' ) );
}

function loginUser( req, res ){
    user.findUser( req, res );
}

module.exports = {
    register : register,
    index : index,
    registerUser : registerUser,
    login : login,
    loginUser : loginUser
}