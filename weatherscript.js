
const apiKey = 'a4d21341e1c7b7dc8cc1b4cd6225be89';

function getLocation(){

  if(navigator.geolocation) {

    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(function(position) {

        resolve(position.coords);

      });

    });

  }else{

    return Promise.reject(new Error('No Location Object'));

  }

}

var celTemp = 0;
function getWeather() {

  return getLocation().then((location) => {

    console.log(location);

    $.ajax({
      url : 'http://api.openweathermap.org/data/2.5/weather?lat='+location.latitude+'&lon='+location.longitude+'&APPID='+apiKey+'',
      dataType: 'jsonp',
      jsonp: 'callback',

      success: (res) => {
        celTemp = Math.round((res.main.temp - 273.15) * 10) / 10;
        $('.temp').html(celTemp + '&#8451');
        $('.btn').html('<button type="button" onclick="fahrenheit()">Switch to Fahrenheit</button>');
      }
    });

  }, (err) => {

    console.log(err);

    alert('Could not get location!');

  });

}

function fahrenheit() {
  $('.temp').html(celTemp * (9/5) + 32 + '&#8457');
  $('.btn').html('<button type="button" onclick="celsius()">Switch to Celsius</button>');
}

function celsius() {
  $('.temp').html(celTemp + '&#8451');
  $('.btn').html('<button type="button" onclick="fahrenheit()">Switch to Fahrenheit</button>');
}


$(document).ready(() => {

  getWeather();



});
