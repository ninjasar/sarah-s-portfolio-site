
const http = require('http');
const fs = require('fs');

const port = 8080;

http.createServer((request, result) => {

  try {

    var content = fs.readFileSync('.' + request.url);

    result.statusCode = 200;
    result.setHeader('Content-Type', 'text/html');
    result.end(content);

  }
  catch(err) {

    result.statusCode = 404;
    result.setHeader('Content-Type', 'text/plain');
    result.end('404 Not Found!!!!!!!');

  }

}).listen(port, undefined, () => {

  console.log(`Server running at http://127.0.0.1:${port}/`);

});
