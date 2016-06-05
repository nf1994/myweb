/**
 * Created by nick on 16-6-5.
 */
var mongoose = require( 'mongoose'  ); //引用模块

mongoose.connect( 'mongodb://127.0.0.1/myDB', function( err ){
    //连接mongoose，连接本地127.0.0.1,mongo的默认端口是 27017
    if( !err ){
        console.log( 'DB == connect to mongodb' );
    } else {
        throw err;
    }
} );

var Schema = mongoose.Schema;

var UserSchema = new Schema({ //创建User表模型，数据可据需求增减
    username: String,
    password: String,
    email: String,
    disabled: Boolean, //后面加注册后的邮件验证功能
    date: Date,
    power: Number  //后面会用到权限功能
});

var UserModel = mongoose.model( 'User', UserSchema, 'User' );

function initData( data, db ){ //对参数做预处理，以防出现不合要求的参数，后面这块会做扩展
    var query = {};
    for( var key in data ){
        if( db.tree[ key ] ){
            query[ key ] = data[ key ];
        }
    }
    return query;
}

function addUser( data, cb ){ //增加用户
    data = initData( data, UserSchema );
    ( new UserModel( data )).save( function( err, doc  ){
        cb( err, doc );
    })
}
function findUser( data, cb ){ //查找用户
    data = initData( data, UserSchema );
    UserModel.findOne( data ).exec( function( err, doc ){
        cb( err, doc );
    })
}

module.exports = {
    addUser: addUser,
    findUser: findUser
}