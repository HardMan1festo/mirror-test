$(document).ready(function () {
  var longUrl = '';

  function getTinyUrl(longUrl) {
  $.ajax({
    url: 'https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyBPmtkNc4pJxkQAFXrgIpPN1GY5i-h1wP4',
    type: 'POST',
    contentType: 'application/json; charset=utf-8',
    data: '{ longUrl: "' + longUrl +'"}',
    success: function(response) {
      var tinyUrl = response.id;
      console.log(tinyUrl);
      $('#tiny-url').text(tinyUrl).attr('href', tinyUrl);
      $('#hided-button').css('opacity', 1);
      $('.link-border').css('opacity', 1);
    }
  });
  };

    $('form').on('submit', function(event) {
    event.preventDefault();
    longUrl = ($(this).serializeArray()[0].value);
    console.log(longUrl);
    getTinyUrl(longUrl);
    });

  $('#hided-button').click(function () {
    var $temp = $('<input>');
    $('body').append($temp);
    $temp.val($('#tiny-url').text()).select();
    document.execCommand('copy');
    $temp.remove();
  });
});

