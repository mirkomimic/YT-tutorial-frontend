$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 50) {
    $("#course").fadeIn(5000);
  }
  if (y > 200) {
    $("#campus").fadeIn(5000);
  }
  if (y > 800) {
    $("#facilities").fadeIn(5000);
  }
  if (y > 1600) {
    $("#testimonials").fadeIn(5000);
  }
  if (y > 2200) {
    $("#cta").fadeIn(5000);
  }
  if (y > 3000) {
    $("#footer").fadeIn(5000);
  }
});
