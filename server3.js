var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type': 'text/html'});
    var html = fs.readFileSync('./key1.html');
    res.end(html)
}).listen(3000)

console.log('serwer uruchomiony')