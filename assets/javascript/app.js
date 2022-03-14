$('.customer-comment').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  dots: true,
  prevArrow:"<button type='button' class='slick-prev pull-left'><img src='./assets/img/left.png'></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><img src='./assets/img/right.png'></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 739,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const activeClass = "is-show";
toggle.addEventListener("click", function () {
  menu.classList.add(activeClass);
});
window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove(activeClass);
  }
});