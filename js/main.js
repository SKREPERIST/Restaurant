$(function () {
  // //////////////////////////////////////////
  $(".reviews").slick({
    arrows: true,
    dots: true,
  });
  // /////////////////////////////////////////////
  let tabs = document.querySelectorAll(".accordion__item ");

  for (i = 0; i < tabs.length; i++) {
    tabs[i].onclick = function () {
      this.classList.toggle("active");
    };
  }
});
