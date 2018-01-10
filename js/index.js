window.onload = function(){
  console.log("loaded");
}

$("#about-button").click(function() {
  console.log("#about-button clicked");
  $('html, body').animate({
    scrollTop: $('#about-section').offset().top
  }, 1900);
});

$("#portfolio-button").click(function() {
  console.log("#portfolio-button clicked");
  $('html, body').animate({
    scrollTop: $('#portfolio-section').offset().top
  }, 1900);
})

$("#contact-button").click(function() {
  console.log("#contact-button clicked");
  $('html, body').animate({
    scrollTop: $('#contact-section').offset().top
  }, 1900);
})