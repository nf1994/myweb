/**
 * Created by nick on 16-6-4.
 */

require.config({
    baseUrl: basePath,
    paths: {
        all: 'public/js/all',
        md5: 'core/js/md5'	//引用md5
    }
})

define( ['md5','all'], function( md5 ){
    $( '#registerForm' ).on( 'submit', function(){
        var data = {
            username: $('#username').val(),
            password: md5.hex_md5( $('#password').val() ),	//对password加密
            email: $('#email').val()
        }
        $.ajax({
            url: '/register',
            type: 'post',
            dataType: 'json',
            data: data,
            success: function( ret ){
                console.log( ret );
            }
        });
        return false;
    })
});