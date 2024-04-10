var fs = require('fs');
fs.unlink('./test.txt',function(error){
    if(error){
        console.log(error);
    }
   
});