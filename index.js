//Permite recibir peticiones y dar respuesta desde un servidor
const http = require('http');
const colors = require('colors')

//Recibir y responder
const handleServer = function(req, res){
    res.writeHead(200, {'content-type': 'text/html'}); //CODIGO DE ESTADO HTTP
    res.write('<h1>Simple texto</h1>');
    res.end(); //ESPERANDO RESPUESTa
}


const server = http.createServer(handleServer);
server.listen(3000, function(){
    console.log('Server on port 3000'.bgWhite.red)
});