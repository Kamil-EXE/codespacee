var fs = require('fs')
fs.rename('./test.txt','./nowyPik',function(error){
    console.log(error);
});