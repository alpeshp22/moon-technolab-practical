$(document).ready(function () {
  $(".menu-toggler").on("click", function () {
    $("header").toggleClass("active");
    $("body").toggleClass("fixed");
    $(this).toggleClass("active");
  });

  $(".firstSider").owlCarousel({
    margin: 10,
    loop: false,
    // autoWidth: true,
    mouseDrag: false,
    items: 1,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    touchDrag: false,
  });

  $(".nestedSlider").owlCarousel({
    margin: 15,
    loop: true,
    center: true,
    touchDrag: false,
    mouseDrag: false,
    nav: true,
    items: 1,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    // navText: ["&lsaquo;", "&rsaquo;"],
    responsive: {
      992: {
        margin: 50,
        margin: 20,
        items: 2,
        center: true,
        autoWidth: true,
      },
      575: {
        margin: 20,
        items: 2,
        center: true,
        autoWidth: true,
      },
    },
  });
});
