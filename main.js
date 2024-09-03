$(document).ready(function () {
  $(".menu-toggler").on("click", function () {
    $("header").toggleClass("active");
    $("body").toggleClass("fixed");
  });

  $(".firstSider").owlCarousel({
    margin: 10,
    loop: false,
    // autoWidth: true,
    mouseDrag: false,
    items: 1,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
  });

  $(".nestedSlider").owlCarousel({
    margin: 20,
    loop: true,
    center: true,
    mouseDrag: false,
    nav: true,
    items: 2,
    autoWidth: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    // navText: ["&lsaquo;", "&rsaquo;"],
    responsive: {
      992: {
        margin: 50,
      },
    },
  });
});
