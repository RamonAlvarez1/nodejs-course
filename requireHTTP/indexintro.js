//Permite recibir peticiones y dar respuesta desde un servidor
const http = require('http');

//Recibir y responder
http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/html'}); //CODIGO DE ESTADO HTTP
    res.write('<h1>Simple texto</h1>');
    res.end(); //ESPERANDO RESPUESTa
}).listen(3000); //Puerto en donde hara el listen