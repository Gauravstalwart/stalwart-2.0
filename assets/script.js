$(document).ready(function(){
    $('.plate').click(function(){
        $(this).toggleClass('active');
        $(this).parent().find('.navbar').slideToggle();
    });



  
});



var activeurl = window.location;
$('.navbar ul li a[href="'+activeurl+'"]').parent('li').addClass('active')