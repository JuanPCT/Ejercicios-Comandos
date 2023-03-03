const fs = require('fs');

const archivo = './Ejercicios/archivo.txt';

const palabraAntigua = 'Hola';
const palabraNueva = 'Adios';

const reemplazarPalabra = () =>{
    fs.readFile(archivo, 'utf8', (error, contenido) => {
      if (error) {
        console.error(`Error al leer el archivo ${archivo}: ${error}`);
        return;
      }
    
      const contenidoNuevo = contenido.replace(new RegExp(palabraAntigua, 'gi'), palabraNueva);
    
      fs.writeFile(archivo, contenidoNuevo, 'utf8', (error) => {
        if (error) {
          console.error(`Error al escribir en el archivo ${archivo}: ${error}`);
          return;
        }
        console.log(`Se ha reemplazado la palabra "${palabraAntigua}" por "${palabraNueva}" en el archivo ${archivo}`);
      });
    });
}

module.exports = reemplazarPalabra;