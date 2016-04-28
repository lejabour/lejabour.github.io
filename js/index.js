
$(document).ready(function(){
 if ( $(window).width() > 739) {    
   $('#logo-image').attr('src', 'images/d-logo-FULL.png');
 }
 else {
   $('#logo-image').attr('src', 'images/d-logo.png');
   $('#logo-image').addClass('logo-small');
 }
});



$('body').scrollspy({ target: '#navbar-example' })