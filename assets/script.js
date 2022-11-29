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

$(document).ready(function(){
  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', (e)=>{
    cursor.style.left = e.pageX +'px';
    cursor.style.top = e.pageY +'px';
  })
});

$(document).ready(function() {
$('.our_row').slick({
	infinite: false,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: false,
    speed: 1200,
    autoplaySpeed: 700,
	dots: false,
	arrows: false,
	responsive: [
		{
			breakpoint: 1025,
			settings: {
				slidesToShow: 3
			}
		},
        {
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		},
	]
});
});