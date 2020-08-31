var typed = new Typed('#txt5', {
    strings: [" Social Media", "Social Media Marketing Services"],
    typeSpeed: 150
  });
  $('.move-up span').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
})