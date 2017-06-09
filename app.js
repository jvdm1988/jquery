console.log('APP.JS ONLINE!');

console.log( jQuery );

  // Notification that the browser finished loading
  //                 |
$(document).ready(function () {
  var userColor = prompt('What color would you like the links?');

  $('a').css('color', userColor);

  $('a').click(function (event) {
    //                      |
    // ----------------------
    // |
    event.preventDefault();

    var randomNumber = Math.floor(Math.random() * 50) + 1;

    $('h1').css('font-size', randomNumber + 'px');
  });

  var leftAmount = 0;

  $('#dino-btn').click(function () {
    leftAmount += 30;

    $('#dino-img').css('position', 'relative');
    $('#dino-img').css('left', leftAmount + 'px');
  });
});
