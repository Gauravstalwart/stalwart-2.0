$(document).ready(function(){
    $('.plate').click(function(){
        $(this).toggleClass('active');
        $(this).parent().find('.navbar').slideToggle();
    });
});

var activeurl = window.location;
$('.navbar ul li a[href="'+activeurl+'"]').parent('li').addClass('active')


$(window).scroll(function() {
  var brands_height = $('.case-study').height();
  var brands_offset = $('.case-study').offset();
  var brands_height_scoll = $(window).scrollTop();
  console.log(brands_offset.y-brands_height/2);
  if (scroll <= 500) {
      
  }
});