const http = require('http');


http.createServer((req, response) => {

    response.write('HOLA MUNDO');
    response.end();
}).listen(8085);

console.log('Working...');