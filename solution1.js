
var TravelingSalesman = require('./TravelingSalesman');

var ts = new TravelingSalesman(10, 25);

var paths = [];

function findPath(path){

  if(path.length == ts.cities.length){

    ts.roadsFromCity(path[path.length-1]).forEach((city) => {
      if(city == path[0]) paths.push(path+city);
    })

  }else{

    ts.roadsFromCity(path[path.length-1]).forEach(function(city){

      if(!beenThere(path, city)) findPath(path + city);

    });

  }

}

function beenThere(path, city){

  var result = false;
  for(var a=0; a<path.length && !result; a++) result = (path[a] == city);
  return result;

}

findPath('A');

console.log(paths);
