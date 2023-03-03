const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const jsonToCsv = () => {
    fs.readFile('./Ejercicios/datos.json', 'utf-8', (error, datos) => {
      if (error) throw error;
    
      const datosJSON = JSON.parse(datos);
      const datosCSV = datosJSON.map((dato) => {
        return {
          nombre: dato.nombre,
          apellido: dato.apellido,
          email: dato.email,
        };
      });
    
      const csvWriter = createCsvWriter({
        path: './Ejercicios/datos.csv',
        header: [
          { id: 'nombre', title: 'Nombre' },
          { id: 'apellido', title: 'Apellido' },
          { id: 'email', title: 'Email' },
        ],
      });
    
      csvWriter
        .writeRecords(datosCSV)
        .then(() =>
          console.log('Los datos se han guardado correctamente en "datos.csv"')
        );
    });
}

module.exports = jsonToCsv;
