
$(document).ready(function(){
 if ( $(window).width() > 739) {    
   $('#logo-image').attr('src', 'images/D-logo-FULL.png');
 }
 else {
   $('#logo-image').attr('src', 'images/D-logo.png');
   $('#logo-image').addClass('logo-small');
 }
});



$('body').scrollspy({ target: '#navbar-example' })