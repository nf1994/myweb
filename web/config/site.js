/**
 * Created by nick on 16-6-4.
 */
var siteTitle = '宁峰', //站点名称
    pageTitle = { //各页面名称
        '/': '首页',
        '/index': '首页',
        '/register': '注册',
        '/login': '登录',
        '/user/center': '用户中心',
        '/user/info': '用户信息',
        '/user/blog': '用户博客'
    },
    basePath = 'http://127.0.0.1';  //设置页面根路径

module.exports = { //对外开放配置
    siteTitle: siteTitle,
    pageTitle: pageTitle,
    basePath: basePath,
    setting: function( req, path, file ){
        return {
            title: pageTitle[ req.path ] + '-' + siteTitle, //组成当前页面标题
            basePath: basePath,
            currentPage: ( path || '' ) + ( file || req.path.replace(/(\/[a-z|A-Z]*)?$/,function($1){return $1 + $1}) ), //据当前访问路径生成静态文件路径
        }
    }
}