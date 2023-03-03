const http = require('http');

const iniciarServidor = () => {
    const server = http.createServer((req, res) => {
        if (req.method === 'GET') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hola, mundo!\n');
        } else {
            res.statusCode = 405;
            res.end();
        }
    });

    const puerto = 3000;
    server.listen(puerto, () => {
        console.log(`El servidor está escuchando en el puerto ${puerto}`);
    });
}

module.exports = iniciarServidor;