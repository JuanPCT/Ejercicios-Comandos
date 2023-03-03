const fs = require('fs');

const archivo = './Ejercicios/archivo.txt';

const frecuenciaPalabras = () => {
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
    
      console.log('Frecuencia de palabras:');
      Object.keys(conteo).forEach(palabra => {
        console.log(`${palabra}: ${conteo[palabra]}`);
      });
    });
}

module.exports = frecuenciaPalabras;