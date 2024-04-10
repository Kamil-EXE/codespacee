var fs = require('fs');
fs.mkdir('./przyklady/node',function(error,){
    if(error){
        console.log(error);
    }else{
        console.log('katalog utworzono');
    }
   
});