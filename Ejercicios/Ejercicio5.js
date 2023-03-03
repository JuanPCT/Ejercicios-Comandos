const fs = require('fs');

const leerArchivo = () => {
    try {
        const data = fs.readFileSync('./Ejercicios/archivo.txt', 'utf8');
        console.log(data);
      } catch (error) {
        console.error(error);
      }
}

module.exports = leerArchivo;