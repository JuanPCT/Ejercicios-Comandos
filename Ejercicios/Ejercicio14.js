const fs = require('fs');
const path = require('path');

const directorio = './Ejercicios';

const infoArchivos = () =>{
    fs.readdir(directorio, (error, archivos) => {
      if (error) {
        console.error(`Error al leer el directorio ${directorio}: ${error}`);
        return;
      }
    
      archivos.forEach((archivo) => {
        const rutaArchivo = path.join(directorio, archivo);
    
        fs.stat(rutaArchivo, (error, stats) => {
          if (error) {
            console.error(`Error al obtener información del archivo ${rutaArchivo}: ${error}`);
            return;
          }
    
          console.log(`${archivo} - Tamaño: ${stats.size} bytes, Creado: ${stats.birthtime}, Modificado: ${stats.mtime}`);
        });
      });
    });
}

module.exports = infoArchivos;
