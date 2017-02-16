/*var hello = 0;
hello.parse();
4 + 5 = 'no'
function name(sarah, jake) {
  if(true) {
    console.log(sarah);
  }
}
name('f', 'd');

var h = {
  'mmm' : 5,
  'no' : 'make me',
  nf : [hi, 'yello', 67]
}
*/
var isOnline;
function getData() {
  $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
  console.log(data);
});
}

$(document).ready(function(){
  $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
    console.log(data);
  });
});
