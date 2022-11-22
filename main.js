let menu = document.querySelector('.menu-icons');
let navbar = document.querySelector('.menu');


menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('active')

}

let bell = document.querySelector('.notifications')

document.querySelector('#bell-icon').onclick = () => {
    bell.classList.toggle('active')
}


var swiper = new Swiper(".trending-content", {
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },

  });

  /* Zoom In Effect for Screenshots 

  let zoom = document.querySelector('.image')

  zoom.onclick = () => {
    zoom.classList.toggle('active');
  }
*/

  /* Custom Scroll Bar */

  window.onscroll = function() {mufunction()};

  function mufunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    var scrolled = (winScroll / height) * 100;
    
    document.getElementById('scroll-bar').style.width = scrolled + '%';
  }