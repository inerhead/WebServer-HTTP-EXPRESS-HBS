const http = require('http');


http.createServer((req, response) => {

    response.setHeader('Content-Disposition', 'attachment; filename=lista.json');
    response.writeHead(200, 'Carajo', { 'Content-Type': 'application/json' });
    const persona = {
        name: "GUSTAVO"
    };

    response.write(JSON.stringify(persona));

    response.end();
}).listen(8085);

console.log('Working...');