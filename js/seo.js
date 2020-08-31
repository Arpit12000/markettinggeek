$('.move-up span').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
})
var typed = new Typed('#txt6', {
    strings: ["Search Engine ", "SEO Services"],
    typeSpeed: 150
  });