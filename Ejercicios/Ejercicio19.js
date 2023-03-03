const fs = require('fs');

const archivo = './Ejercicios/archivo.txt';

const lineaMasLarga = () =>{
    fs.readFile(archivo, 'utf8', (error, contenido) => {
      if (error) {
        console.error(`Error al leer el archivo ${archivo}: ${error}`);
        return;
      }
    
      const lineas = contenido.split('\n');
    
      let lineaMasLarga = '';
      lineas.forEach(linea => {
        if (linea.length > lineaMasLarga.length) {
          lineaMasLarga = linea;
        }
      });
    
      console.log(`La línea más larga del archivo es: ${lineaMasLarga}`);
    });
}

module.exports = lineaMasLarga;