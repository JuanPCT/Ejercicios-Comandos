const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const { faker } = require('@faker-js/faker');

const cantidadRegistros = 10;

const columnas = [
  { id: 'nombre', title: 'nombre' },
  { id: 'apellido', title: 'apellido' },
  { id: 'email', title: 'email' }
];

const csvAleatorio = () => {
    
    const registros = [];
    for (let i = 0; i < cantidadRegistros; i++) {
      registros.push({
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        email: faker.internet.email()
      });
    }
    
    const csvWriter = createCsvWriter({
      path: './Ejercicios/aleatorio.csv',
      header: columnas,
    });
    
    csvWriter.writeRecords(registros)
      .then(() => console.log('El archivo CSV se ha creado correctamente.'));
}

module.exports = csvAleatorio;