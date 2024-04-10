var http = require('http');
const { listenerCount } = require('process');

http.createServer(function(req,odpowiedzSerwera){
    odpowiedzSerwera.end('Witaj!');

}).listen(3000);

console.log('Serwer uruchomiony...');
