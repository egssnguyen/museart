// JavaScript Document
$('#slide').owlCarousel({
  loop: true, // cho lap lại
  items: 1, // xuất hiện 1 ảnh thôi
  smartSpeed: 1000, // tốc độ thay đổi ảnh
  autoplay: true, // cho phép tự động chạy
  autoplayTimeout: 5000, // thời gian chờ khi chuyển ảnh khi chạy tự động
  nav: false,
  dots: true,
})
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $("header").css("background-color", "#A32021");
      $("header").css("box-shadow", "-2px 2px 2px 1px #000000");
      $(".menuleft ul li a").css("color", "#EEEEEE");
      $(".menuright ul li a").css("color", "#eeeeee");
    } else {
      $("header").css("background-color", "transparent");
      $(".menuleft ul li a").css("color", "#343434");
      $(".menuright ul li a").css("color", "#343434");
      $("header").css("box-shadow", "0px 0px 0px 0px");
    }
  })
});
$('#boxmes').owlCarousel({
  loop: true, // cho lap lại
  items: 1, // xuất hiện 1 ảnh thôi
  smartSpeed: 1000, // tốc độ thay đổi ảnh
  autoplay: true, // cho phép tự động chạy
  autoplayTimeout: 5000, // thời gian chờ khi chuyển ảnh khi chạy tự động
  nav: false,
  dots: false,
})
