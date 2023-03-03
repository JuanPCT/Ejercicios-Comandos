const http = require('http');
const fs = require('fs');

const url = "http://www.google.com";

const descargarPagina = () => {    
    http.get(url, (response) => {
      let contenido = '';
    
      response.on('data', (datos) => {
        contenido += datos;
      });
    
      response.on('end', () => {
        fs.writeFile('./Ejercicios/pagina.html', contenido, (error) => {
          if (error) throw error;
          console.log(`El archivo se ha guardado como 'pagina.html'`);
        });
      });
    }).on('error', (error) => {
      console.error(`Error al descargar la página web: ${error}`);
    });
}

module.exports = descargarPagina;