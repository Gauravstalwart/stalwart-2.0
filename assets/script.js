$(document).ready(function () {
  $(".plate").click(function () {
    $(this).toggleClass("active");
    $(this).parent().find(".navbar").slideToggle();
  });

  $(".our_col").hover(function () {
    $(".circle").addClass("drag_me");
  });
  $(".our_col").mouseleave(function () {
    $(".circle").removeClass("drag_me");
  });
});

var activeurl = window.location;
$('.navbar ul li a[href="' + activeurl + '"]')
  .parent("li")
  .addClass("active");

$(window).scroll(function () {
  var brands_height = $(".case-study").height();
  var brands_offset = $(".case-study").offset().top;
  var brands_height_half = brands_height / 3;
  var brands_height_scoll = $(window).scrollTop();

  if (brands_height_scoll >= brands_offset - brands_height_half) {
    $(".case-study").addClass("color_change");
  } else {
    $(".case-study").removeClass("color_change");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const circle = document.getElementById("circle");
  const button_2 = document.getElementsByClassName("our_col");

  document.addEventListener("mousemove", (e) => {
    circle.style.transform =
      "translate(" + e.clientX + "px, " + e.clientY + "px)";
  });
});

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

$(".our_row").slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  speed: 1200,
  autoplaySpeed: 700,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

const updateProperties = (elem, state) => {
  elem.style.setProperty("--x", `${state.x}px`);
  elem.style.setProperty("--y", `${state.y}px`);
  elem.style.setProperty("--width", `${state.width}px`);
  elem.style.setProperty("--height", `${state.height}px`);
  elem.style.setProperty("--radius", state.radius);
  elem.style.setProperty("--scale", state.scale);
};

document.querySelectorAll(".circle").forEach((cursor) => {
  let onElement;

  const createState = (e) => {
    const defaultState = {
      x: e.clientX,
      y: e.clientY,
      width: 40,
      height: 40,
      radius: "50%",
    };

    const computedState = {};

    if (onElement != null) {
      const { top, left, width, height } = onElement.getBoundingClientRect();
      const radius = window.getComputedStyle(onElement).borderTopLeftRadius;

      computedState.x = left + width / 2;
      computedState.y = top + height / 2;
      computedState.width = width;
      computedState.height = height;
      computedState.radius = radius;
    }

    return {
      ...defaultState,
      ...computedState,
    };
  };

  document.addEventListener("mousemove", (e) => {
    const state = createState(e);
    updateProperties(cursor, state);
  });

  document.querySelectorAll("a, button").forEach((elem) => {
    elem.addEventListener("mouseenter", () => (onElement = elem));
    elem.addEventListener("mouseleave", () => (onElement = undefined));
  });
});
