/**
 * Created by nick on 16-6-7.
 */
define( function(){
    var username = $.cookies.get( 'username' );

    if( username ){
        $( '.afterLogin' ).show();
        $( '.menu_username' ).html( username );
    } else {
        $( '.beforeLogin' ).show();
    }
})