$(document).ready(function () {
  $(".plate").click(function () {
    $(this).toggleClass("active");
    $(this).parent().find(".navbar").slideToggle();
  });

  // $(".our_col").hover(function () {
  //   $(".circle").addClass("drag_me");
  // });
  // $(".our_col").mouseleave(function () {
  //   $(".circle").removeClass("drag_me");
  // });
});

var activeurl = window.location;
$('.navbar ul li a[href="' + activeurl + '"]')
  .parent("li")
  .addClass("active");

const el = $(".case-study");
if (el.length) {
  $(window).scroll(function () {
    var brands_height = $(".case-study").height();
    var brands_offset = el.offset().top;
    var brands_height_half = brands_height / 3;
    var brands_height_scoll = $(window).scrollTop();
    if (brands_height_scoll >= brands_offset - brands_height_half) {
      $(".case-study").addClass("color_change");
    } else {
      $(".case-study").removeClass("color_change");
    }
  });
}

// window.addEventListener("DOMContentLoaded", () => {
//   const circle = document.getElementById("circle");
//   const button_2 = document.getElementsByClassName("our_col");

//   document.addEventListener("mousemove", (e) => {
//     circle.style.transform =
//       "translate(" + e.clientX + "px, " + e.clientY + "px)";
//   });
// });

// const cards = document.querySelectorAll(".our_col");
// cards.forEach((card) => {
//   const height = card.clientHeight;
//   const width = card.clientWidth;

//   const mouseMoveHandler = (evt) => {
//     evt.preventDefault();

//     requestAnimationFrame(() => {
//       const xRotation = -30 * ((evt.layerY - height / 2) / height);
//       const yRotation = 20 * ((evt.layerX - width / 2) / width);

//       card.style.transform = `perspective(1000px) scale(1.05) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
//     });
//   };

//   card.addEventListener("mousemove", mouseMoveHandler);

//   card.addEventListener("mouseenter", (evt) => {
//     evt.preventDefault();
//     card.addEventListener("mousemove", mouseMoveHandler);
//   });

//   card.addEventListener("mouseout", (evt) => {
//     evt.preventDefault();
//     card.style.transform = "perspective(1000px) scale(1) rotateX(0) rotateY(0)";
//     card.removeEventListener("mousemove", mouseMoveHandler);
//   });

//   card.addEventListener("click", (evt) => {
//     evt.preventDefault();
//     card.style.animation = "spin 1s ease-in-out";
//     setTimeout(() => {
//       card.style.animation = "";
//     }, 1000);
//   });
// });

jQuery(".our_row").length > 0 &&
  jQuery(".our_row").slick({
    infinite: false,
    slidesToShow: 3,
    autoplay: false,
    speed: 1200,
    autoplaySpeed: 700,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2.8,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });



var $status = $('.pagingInfo');
var $slickElement = $('.slider');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '  --------  ' + slick.slideCount);
});


$slickElement.slick({
    infinite: false,
    slidesToShow: 1,
    autoplay: false,
    speed: 1200,
    autoplaySpeed: 700,
    dots: false,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-sharp fa-solid fa-arrow-left'></i></button>",
	nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-sharp fa-solid fa-arrow-right'></i></button>",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
