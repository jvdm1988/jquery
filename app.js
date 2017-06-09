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

var  currentImageState = "normal";

$("#src-btn").click(function() {
  if (currentImageState === "normal") {
    $("src-image").prop("src", "https://s-media-cache-ak0.pinimg.com/originals/39/09/fb/3909fb71670c490a100c3e1d792af935.jpg");
    $currentImageState = "parody";
  }

  else {
  $("src-image").prop("src", "http://webneel.com/daily/sites/default/files/images/daily/06-2013/8-starbucks-coffee-star-wars-coffee-logo-parody.jpg");
  currentImageState = "normal";
}

  $("#inout-btn").click(function (){
    var pastedImage = $("#image-input").val();
    $("#src-image").prop("src", pastedImage);
  });
});


$(document).ready(function (){
  var currentCount = 0;

  $("#increase-btn").click(function() {
    currentCount += 1;
    $("#count-tag").html(currentCount);
  });
});
