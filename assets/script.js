$(document).ready(function(){
    $('.plate').click(function(){
        $(this).toggleClass('active');
        $(this).parent().find('.navbar').slideToggle();
    });
});