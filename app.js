var http = require('http')
var port = process.env.PORT || 1337;

console.log('prot: ', port);

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Azure\n');
}).listen(port);