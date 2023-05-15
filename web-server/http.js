'use strict'

//import fs from 'node:fs/promises'
const http = require('http');
const host = '127.0.0.1';
const port = 3000;


const server = http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type': 'text/html'}); //writeHead es de cabecera, y el codigo 200 indica que todo está ok
  res.write('El servidor de Lukk ha arrancado!');
  res.end(); //indicamos que los encabezados y el cuerpo de la respuesta han sido enviados
}).listen(3000, '127.0.0.1');


/*let indexHTML = (req, res) =>{
  res.setHeader('Conteny-Type', 'text/html');
  res.writeHead(200);
  res.end('index.html');
}*/

const errors = ((req, res) => {
  console.log(server.req.url);
  console.log(req.method);
  if(req.url === '/') return indexHTML(req, res);

  res.writeHead(404);
  res.end(http.STATUS_CODES[404]);

  if (req.method !== http.get) {
    res.writeHead(405);
    res.end(http.STATUS_CODES[405]);
  }
  

});

/*server.listen((port, host) =>{
  console.log(`Servidor corriendo en: http://${host}:${port}`);
});*/

//get es el metodo por defecto que utilizamos
//para acceder a la web
//crtl + c detiene el servidor desde la terminal (lo refresca) y puedes volver a ejecutarlo con los cambios realizados