$(function () {
  $("#hide").click(function () {
    $(".box").hide(1000);
  })
  $("#show").click(function () {
    $(".box").show(1000);
  })
  $("#hide_show").click(function () {
    $(".box").toggle(1000);
  })
  $("#slide_up").click(function () {
    $(".box").slideUp(1000);
  })
  $("#slide_down").click(function () {
    $(".box").slideDown(1000);
  })
  $("#slide_down_up").click(function () {
    $(".box").slideToggle(1000);
  })
  $("#fadeIn").click(function () {
    $(".box").fadeIn(1000);
  })
  $("#fadeOut").click(function () {
    $(".box").fadeOut(1000);
  })
  $("#fadeToggle").click(function () {
    $(".box").fadeToggle(1000);
  })
  $("#classcome").click(function () {
    $(".box").addClass("gf");
  })
  $("#classgo").click(function () {
    $(".box").removeClass("gf");
  })
  $("#class-come-go").click(function () {
    $(".box").toggleClass("gf");
  })
})