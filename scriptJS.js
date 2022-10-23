$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 400) {
    $("#course").fadeIn(5000);
  }
  if (y > 900) {
    $("#campus").fadeIn(5000);
  }
  if (y > 1300) {
    $("#facilities").fadeIn(5000);
  }
  if (y > 1600) {
    $("#testimonials").fadeIn(5000);
  }
  if (y > 2000) {
    $("#cta").fadeIn(5000);
  }
  if (y > 2300) {
    $("#footer").fadeIn(5000);
  }
});
