var fs = require('fs');
fs.readdir('./','utf8',function(error,odczytaj){
    console.log(odczytaj);
    console.log(error);
});