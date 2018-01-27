var animateThis = $('html, body');

$("#about-button").click(function() {
  animateThis.animate({
    scrollTop: $('#about-section').offset().top
  }, 1900);
})

$("#portfolio-button").click(function() {
  animateThis.animate({
    scrollTop: $('#portfolio-section').offset().top
  }, 1900);
})

$("#contact-button").click(function() {
  animateThis.animate({
    scrollTop: $('#contact-section').offset().top
  }, 1900);
})