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

(function () {

      const link = document.querySelectorAll('.our_row > .hover-this');
      const cursor = document.querySelector('.cursor');

      const animateit = function (e) {
            const span = this.querySelector('.our_col');
            const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,

            move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;

            span.style.transform = `translate(${xMove}px, ${yMove}px)`;

            if (e.type === 'mouseleave') span.style.transform = '';
      };

      const editCursor = e => {
            const { clientX: x, clientY: y } = e;
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
      };

      link.forEach(b => b.addEventListener('mousemove', animateit));
      link.forEach(b => b.addEventListener('mouseleave', animateit));
      window.addEventListener('mousemove', editCursor);

})();


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