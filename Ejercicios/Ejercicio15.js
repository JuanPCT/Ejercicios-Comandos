const fs = require('fs');

const archivo = './Ejercicios/archivo.txt';

const letra = 'h';

const palabras = () =>{
    fs.readFile(archivo, 'utf8', (error, contenido) => {
      if (error) {
        console.error(`Error al leer el archivo ${archivo}: ${error}`);
        return;
      }
    
      const expresion = new RegExp(`\\b${letra}\\w*\\b`, 'gi');
    
      const palabras = contenido.match(expresion);
    
      console.log(`Palabras que empiezan con la letra "${letra}":`);
      console.log(palabras);
    });
}

module.exports = palabras;