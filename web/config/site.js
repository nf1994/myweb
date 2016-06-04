/**
 * Created by nick on 16-6-4.
 */
var siteTitle = '优品开源', //站点名称
    pageTitle = { //各页面名称
        '/': '首页',
        '/index': '首页',
        '/register': '注册'
    },
    basePath = 'http://127.0.0.1:3000';  //设置页面根路径
    module.exports = { //对外开放配置
    setting: function( req, path, file ){
        return {
            title: pageTitle[ req.path ] + '-' + siteTitle, //组成当前页面标题
            basePath: basePath,
            currentPage: ( path || '' ) + ( file || req.path.replace(/(\/[a-z|A-Z]*)?$/,function($1){return $1 + $1}) ), //据当前访问路径生成静态文件路径
        }
    }
}