$(function () {
  setTimeout(() => {
    $('#loader-wrapper').addClass('d-none', {duration: 300});
    $('#content-wrapper').removeClass('d-none', {duration: 300});
  }, 1000)

  // Intro.js scans the webpage and finds all elements with `data-hint` attribute
  introJs().start();
  introJs().addHints();
})
