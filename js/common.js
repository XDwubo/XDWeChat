
$(window).on('resize', function () {
  var width = document.documentElement.clientWidth;
  $('html').css('font-size', (width / 750 * 100) + 'px');
}).triggerHandler('resize'); 