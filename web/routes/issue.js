/**
 * Created by nick on 16-6-4.
 */
var site = require( '../config/site' ); //引入site Config
var user = require( '../controls/user' );

function index( req, res ){
    res.render( 'issue/index.ejs', site.setting( req, '/issue/index', '/index' ) );
} //首页没有页面路径，需要指定path及 filename

function register( req, res ){
    res.render( 'issue/register.ejs', site.setting( req, '/issue' ) ); //配置信息，供ejs调用
}

function registerUser( req, res ){
    // user.addUser( req, res );
    console.log("test");
    res.send( { code: 0, msg: 'register info access success',data: req.body } );
    //这里原本是要处理数据库存储操作，这里先走通ajax通信，验证能成功获取数据
}

module.exports = {
    register : register,
    index : index,
    registerUser : registerUser
}