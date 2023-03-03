const fs = require('fs');

const archivoEntrada = './Ejercicios/archivo.txt';

const archivoSalida = './Ejercicios/archivo_ordenado.txt';

const ordenarLineas = () =>{
    fs.readFile(archivoEntrada, 'utf8', (error, contenido) => {
      if (error) {
        console.error(`Error al leer el archivo ${archivoEntrada}: ${error}`);
        return;
      }
    
      const lineasOrdenadas = contenido.split('\n').sort();
    
      fs.writeFile(archivoSalida, lineasOrdenadas.join('\n'), 'utf8', error => {
        if (error) {
          console.error(`Error al escribir el archivo ${archivoSalida}: ${error}`);
          return;
        }
        console.log(`El archivo ${archivoSalida} ha sido creado y ordenado alfabéticamente.`);
      });
    });
}

module.exports = ordenarLineas;