$(function () {
  setTimeout(() => {
    $('#loader-wrapper').addClass('d-none', {duration: 300});
    $('#content-wrapper').removeClass('d-none', {duration: 300});
  }, 3000)
})
