//Permite interactuar con archivos del OS
const fs = require('fs');

//Crear un archivo (nombre, texto, functionerror)
//Codigo Asynchrono
fs.writeFile('./texto.txt', 'linea uno', function(err)
{
    if (err){
        console.log(err);
    }
    else {
        console.log("Archivo creado")
    }
});

console.log("Ultima linea de codigo");


//Leer archivo texto.txt
//Codigo Asynchrono
fs.readFile('./texto.txt', function(err, data){
    if (err){
        console.log(err)
    }
    console.log(`Data procesada: ${data.toString()}`)    
})