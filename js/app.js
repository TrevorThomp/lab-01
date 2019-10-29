$(document).ready(function() {
  $('#a').css('background-color', 'blue');
  $('#b').css('background-color', 'green');
  $('#c').css('background-color', 'red');
  $('#d').css('background-color', 'saddlebrown');
  $('#e').css('background-color', 'gray');
  $('#f').css('background-color', 'salmon');
  $('#g').css('background-color', 'slateblue');
  $('#h').css('background-color', 'tan');
  $('#i').css('background-color', 'goldenrod');


  $(window).resize(function() {
    if ($('main').width() < 600) {
      $('#a').css('background-color', 'blue');
      $('#b').css('background-color', 'green');
      $('#c').css('background-color', 'red');
      $('#d').css('background-color', 'saddlebrown');
      $('#e').css('background-color', 'gray');
      $('#f').css('background-color', 'salmon');
      $('#g').css('background-color', 'slateblue');
      $('#h').css('background-color', 'tan');
      $('#i').css('background-color', 'goldenrod');
    }
    else if ($('main').width() < 768) {
      $('#a').css('background-color', 'green');
      $('#b').css('background-color', 'blue');
      $('#c').css('background-color', 'gray');
      $('#d').css('background-color', 'slateblue');
      $('#e').css('background-color', 'salmon');
      $('#f').css('background-color', 'tan');
      $('#g').css('background-color', 'yellow');
      $('#h').css('background-color', 'goldenrod');
      $('#i').css('background-color', 'saddlebrown');
    }
    else if ($('main').width() < 800) {
      $('#a').css('background-color', 'gray');
      $('#b').css('background-color', 'green');
      $('#c').css('background-color', 'blue');
      $('#d').css('background-color', 'salmon');
      $('#e').css('background-color', 'tan');
      $('#f').css('background-color', 'yellow');
      $('#g').css('background-color', 'saddlebrown');
      $('#h').css('background-color', 'slateblue');
      $('#i').css('background-color', 'goldenrod');
  }
})
});

