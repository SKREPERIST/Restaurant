$(function () {
  new WOW().init();

  $(".burger").on("click", function () {
    $(".header__menu").slideToggle();
  });

  let burg = document.querySelector(".burger");
  burg.onclick = () => {
    burg.classList.toggle("active");
  };

  $(".intro__slider").slick();

  $(".popular__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  });

  var mixer = mixitup(".choise__box");
  // var mixer = mixitup('.gall__box');
});
