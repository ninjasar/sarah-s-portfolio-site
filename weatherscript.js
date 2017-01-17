
const apiKey = 'a4d21341e1c7b7dc8cc1b4cd6225be89';
var city = '';
var country = '';
function getLoc() {
  $.ajax({
    url: "http://ipinfo.io/json",
    dataType: 'jsonp',
    jsonp: 'callback',
    success: (res) => {
      city = res.city;
      country = res.country;
      getWeather();
    }
  });
}

/*function getLocation(){

  if(navigator.geolocation) {

    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(function(position) {

        resolve(position.coords);

      });

    });

  }else{

    return Promise.reject(new Error('No Location Object'));

  }

}*/

var kelvinTemp = 0;
var outside = '';
function getWeather() {

  //return getLocation().then((location) => {

    //console.log(location);

    $.ajax({
      url : 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID='+apiKey+'',
      dataType: 'jsonp',
      jsonp: 'callback',

      success: (res) => {
        kelvinTemp = res.main.temp;
        outside = res.weather[0].main;
        celsius();
      }
    });

  /*}, (err) => {

    console.log(err);

    alert('Could not get location!');

  });*/

}

function iconGen(outside) {
  switch(outside){
    case 'Clouds' :
      return '<i class="fa fa-cloud"></i>';
    case 'Clear':
      return '<i class="fa fa-sun-o" aria-hidden="true"></i>';
    case 'Rain':
      return '<i class="fa fa-tint"></i>';
    case 'Snow':
      return '<i class="fa fa-snowflake-o" aria-hidden="true"></i>';
    case 'Thunderstorm':
      return '<i class="fa fa-bolt" aria-hidden="true"></i>';
    default:
      return '<i class="fa fa-cloud"></i>';
  }
}

function fahrenheit() {
  $('.temp').html(`
    ${Math.round(((kelvinTemp - 273.15) * (9/5) + 32) * 10) / 10}&#8457<br><br>
    ${outside}<br><br>
    ${iconGen(outside)}<br><br>
    <div class = "btn"><button type="button" onclick="celsius()">Switch to Celsius</button></div>
  `);
}

function celsius() {
  $('.temp').html(`${Math.round((kelvinTemp - 273.15) * 10) / 10}&#8451<br><br>
  ${outside}<br><br>
  ${iconGen(outside)}<br><br>
  <div class = "btn"><button type="button" onclick="fahrenheit()">Switch to Fahrenheit</button></div>
  `);
}


$(document).ready(() => {
  getLoc();




});
