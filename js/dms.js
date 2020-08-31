$('.move-up span').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
})
var typed = new Typed('#txt7', {
    strings: [" ", "360 Digital Marketing service"],
    typeSpeed: 150
  });