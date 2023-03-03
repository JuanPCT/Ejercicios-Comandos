const fs = require('fs');

const modificarArchivo = () => {

    const fs = require('fs');

    try {
        const contenidoEntrada = fs.readFileSync('./Ejercicios/archivo.txt', 'utf8');

        const contenidoModificado = contenidoEntrada.toUpperCase();

        fs.writeFileSync('./Ejercicios/archivo-modificado.txt', contenidoModificado, 'utf8');

        console.log('Se ha modificado el contenido.');
    } catch (error) {
        console.error(error);
    }
}

module.exports = modificarArchivo;
