$(document).ready(function () {
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
    margin: 50,
    loop: true,
    center: true,
    mouseDrag: false,
    nav: true,
    items: 2,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    // navText: ["&lsaquo;", "&rsaquo;"],
    responsive: {
      1171: {
        autoWidth: true,
      },
    },
  });
});
