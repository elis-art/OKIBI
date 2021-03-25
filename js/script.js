// <------- Promo Slider  ------->
$(document).ready(function(){
  $('.promo-list').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: "<img src='../icons/prev.png' class='prev' alt='1'>",
    nextArrow: "<img src='../icons/next.png' class='next' alt='2'>",
  });
});
window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.menu_item'),
      hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      })
  })
})

// <------- Media Menu ------->
window.addEventListener('DOMContentLoaded', () => {
  const menu2 = document.querySelector('.menu2'),
      menuItem2 = document.querySelectorAll('.menu_item2'),
      hamburger2 = document.querySelector('.hamburger2');

  hamburger2.addEventListener('click', () => {
      hamburger2.classList.toggle('hamburger_active2');
      menu2.classList.toggle('menu_active2');
  });

  menuItem2.forEach(item => {
      item.addEventListener('click', () => {
          hamburger2.classList.toggle('hamburger_active2');
          menu2.classList.toggle('menu_active2');
      })
  })
})

// <------- Team Slider  ------->
$('.team__list').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: "<img src='../icons/Arrow 4.png' class='prev' alt='1'>",
  nextArrow: "<img src='../icons/Arrow 3.png' class='next' alt='2'>",
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        arrows : false
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows : false
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows : false
      }
    }
  ]
});

// <------- Accordion  ------->
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// <------- Tabs  ------->
$(function() {
  $('.myvertical-tabs').delegate('li:not(.chosen)', 'click', function() {
    $(this).addClass('chosen').siblings().removeClass('chosen')
     .parents('.wrap-myvertical-tabs').find('.myvertical-tabs-content')
     .hide().eq( $(this).index() ).fadeIn(170);
  });
});

// <------- Commerce Slider  ------->
$('.commerce__list').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: "<img src='../icons/Arrow 4.png' class='prev' alt='1'>",
  nextArrow: "<img src='../icons/Arrow 3.png' class='next' alt='2'>",
  responsive: [
    {
      breakpoint: 557,
      settings: {
        arrows : false
      }
    }
  ]
});