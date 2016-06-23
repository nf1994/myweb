/**
 * Created by nick on 16-6-5.
 */
var db = require( '../db/sql' ); //添加前面定义的db操作模块

function addUser( req, res ){ //增加用户
    var data = req.body; //post过来的数据在req.body里，get过来的数据在req.query里
    data.date = new Date(); //数据里增加时间
    db.addUser( data, function( err, doc ){
        if( !err ){
            res.send( { code: 0, msg: 'add User Success', data: doc } );
            //对查询结果返回，返回格式统一为 {code: 返回码, msg: 返回描述, data: 返回值}
        }
    })
}

function findUser( req, res ){
    var data = req.body;
    db.findUser( data, function( err, doc ){
        if( !err ){
            if( doc ){ //如果登录有查找结果
                req.session.status = true;        //则session里记录状态为true
            }
            res.send(  { code: 0, msg: 'find User Success', data: doc }  );
        }
    })
}

module.exports = {
    addUser: addUser,
    findUser: findUser
}