/**
 * Created by nick on 16-6-4.
 */
var issue = require('./issue.js');

exports.all = function( app ){
    app.get( '/', function( req, res ){
        issue.index( req, res )
    });
    app.get( '/register', function( req, res ){
        issue.register( req, res ) //将register请求转向issue内的函数
    });
    app.post('/register', function( req, res ){
        issue.registerUser( req, res )
    });
}