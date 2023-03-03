
const fs = require('fs');

const directorio = './Ejercicios';

const leerDirectorio = () => {
    fs.readdir(directorio, (error, archivos) => {
        if (error) throw error;

        const archivosDeDirectorio = archivos.filter((archivo) =>
            fs.statSync(`${directorio}/${archivo}`).isFile()
        );

        console.log(`Los archivos en ${directorio} son:`);
        archivosDeDirectorio.forEach((archivo) => console.log(archivo));
    });
}

module.exports= leerDirectorio;