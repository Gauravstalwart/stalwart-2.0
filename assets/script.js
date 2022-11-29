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
  var brands_offset = $('.case-study').offset().top;
  var brands_height_half = brands_height/3;
  var brands_height_scoll = $(window).scrollTop();
  
  if (brands_height_scoll >= brands_offset-brands_height_half ) {
      $('.case-study').addClass('color_change');
  }else{
    $('.case-study').removeClass('color_change');
  }
});


$(window).scroll(function() {
$('.our_row').slick({
	infinite: false,
	slidesToShow: 3.5,
	slidesToScroll: 1,
	autoplay: false,
    speed: 1200,
    autoplaySpeed: 700,
	dots: false,
	arrows: true,
	prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-sharp fa-solid fa-arrow-left'></i></button>",
	nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-sharp fa-solid fa-arrow-right'></i></button>",
	responsive: [
		{
			breakpoint: 999,
			settings: {
				slidesToShow: 2.5
			}
		},
	]
});
});