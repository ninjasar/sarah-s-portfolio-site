
var TravelingSalesman = require('./TravelingSalesman2');

function findPaths(ts){

  var paths = {};

  var findPath = function(path, roadLength){

    if(path.length == ts.cities.length){

      var roads = ts.roadsFromCity(path[path.length-1]);

      for (var city in roads) {
        if(city == path[0]) paths[path+city] = roads[city] + roadLength;
      }

    }else{

      var roads = ts.roadsFromCity(path[path.length-1]);

      for(var city in roads){
        if(!beenThere(path, city)) findPath(path + city, roadLength + roads[city]);
      }

    }

  }

  var beenThere = function(path, city){

    var result = false;
    for(var a=0; a<path.length && !result; a++) result = (path[a] == city);
    return result;

  }

  findPath('A', 0);

  return paths;

}

function findBestPath(paths){

  var shortestPathLength;
  var shortestPath;
  for(var path in paths) {
    if(shortestPath === undefined || paths[path] < shortestPath){
      shortestPath = path;
      shortestPathLength = paths[path];
    }
  }

  return {
    path : shortestPath,
    length : shortestPathLength
  };

}

console.log(findBestPath(findPaths(new TravelingSalesman(10, 25))));
