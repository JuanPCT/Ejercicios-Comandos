const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const archivoEntrada = './Ejercicios/aleatorio.csv';
const archivoSalida = './Ejercicios/aleatorio-procesados.csv';

const columnas = [
  { id: 'nombreCompleto', title: 'nombreCompleto' },
  { id: 'email', title: 'email' }
];

const csvWriter = createCsvWriter({
  path: archivoSalida,
  header: columnas,
});

const csvModificado = () => {

  const records = [];
  fs.createReadStream(archivoEntrada)
    .pipe(csv())
    .on('data', async(dato) => {
      
      const nombreCompleto = dato.nombre + ' ' + dato.apellido;
      const email = dato.email.toUpperCase();
      records.push({
        nombreCompleto: nombreCompleto, email: email
      });
      await csvWriter.writeRecords(records)
        .catch((error) => console.error(error));
    })
    .on('end', () => {      
      console.log('Se ha terminado de procesar el archivo CSV.');
    });
}

module.exports = csvModificado;
