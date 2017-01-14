function changeColors() {

  var randNum = () => Math.floor(Math.random() * 256);
  var r = randNum();
  var g = randNum();
  var b = randNum();
  $('body').css('background-color', 'rgba(' + r + ', ' + g + ', ' + b + ', 1)');
  $('.button').css('background-color', 'rgba(' + r + ', ' + g + ', ' + b + ', 1)');
  $('#quote').css('color', 'rgba(' + r + ', ' + g + ', ' + b + ', 1)');



}

var tweetQuote;

function getQuote(){
  changeColors(quote);

  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: (res) => {

      var quote = JSON.parse(res);
      tweetQuote = quote.quote + ' -' + quote.author + ' #quotes';

      $('#quote').html('<i class="fa fa-quote-left"></i> '+quote.quote+' <i class="fa fa-quote-right"></i>'+'<br>'+'<br>');
      $('.author').html('-'+quote.author);


    }
  });

}

function tweet() {

  var textToTweet = tweetQuote;
  if (textToTweet.length > 140) {
    alert('Tweet should be less than 140 Chars');
  }
  else {
    var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(textToTweet);
    window.open(twtLink,'_blank');
  }

}

$(document).ready(() => {

  getQuote();



});
