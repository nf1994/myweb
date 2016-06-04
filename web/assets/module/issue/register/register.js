/**
 * Created by nick on 16-6-4.
 */
define( function(){
    $( '#registerForm' ).on( 'submit', function(){
        var data = {
            username: $('#username').val(),
            password: $('#password').val(),
            email: $('#email').val()
        };
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