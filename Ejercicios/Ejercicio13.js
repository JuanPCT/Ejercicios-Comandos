const fs = require('fs');
const csv = require('csv-parser');

const csvToJson = () => {
    const result = [];
    fs.createReadStream('./Ejercicios/aleatorio.csv')
      .pipe(csv())
      .on('data', (dato) => {
        const datosJSON = JSON.stringify(dato);
        result.push(datosJSON);
    })
    .on('end', () => {
          fs.writeFile('./Ejercicios/datos.json', `[${result.toString()}]`, (error) => {
            if (error) throw error;
          });
        console.log('El archivo CSV se ha procesado completamente');
      });
}

module.exports = csvToJson;