const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const mostrarMensaje = () => {
    readline.question(`Ingrese su nombre\n`, name => {
        console.log(`Hola ${name}!`);
        readline.close();
    });
}

module.exports = mostrarMensaje;