const fs = require('fs');

const archivo = './Ejercicios/archivo.txt';

const palabraRepetida = () => {
    fs.readFile(archivo, 'utf8', (error, contenido) => {
      if (error) {
        console.error(`Error al leer el archivo ${archivo}: ${error}`);
        return;
      }
    
      const palabras = contenido.split(/\s+/);
    
      const conteo = {};
      palabras.forEach(palabra => {
        if (palabra.trim() !== '') {
          if (conteo[palabra] === undefined) {
            conteo[palabra] = 1;
          } else {
            conteo[palabra]++;
          }
        }
      });
    
      let palabraMasComun = '';
      let conteoMaximo = 0;
      Object.keys(conteo).forEach(palabra => {
        if (conteo[palabra] > conteoMaximo) {
          palabraMasComun = palabra;
          conteoMaximo = conteo[palabra];
        }
      });
    
      console.log(`La palabra más común en el archivo es "${palabraMasComun}", con ${conteoMaximo} ocurrencias.`);
    });
}

module.exports = palabraRepetida;
