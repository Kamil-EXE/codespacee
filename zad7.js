// Ćwiczenie 7 - obsluga bufora
var bufer = new Buffer("moj bufor ");
bufer.write('Jakis text budora  ');
console.log(bufer); 
console.log(bufer.toString());
console.log(bufer.toJSON());