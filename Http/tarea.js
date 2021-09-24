const express = require('express');
require('dotenv').config();
const app = express();

const port = process.env.PORT;


app.use(express.static('./public-tarea'));


app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/generic', function(req, res) {
    const rutaArray = __dirname.split("\\");
    const dir = rutaArray.splice(0, rutaArray.length - 1).join('\\');
    res.sendFile(`${dir}/public-tarea/generic.html`);
});

app.get('/elements', function(req, res) {
    const rutaArray = __dirname.split("\\");
    const dir = rutaArray.splice(0, rutaArray.length - 1).join('\\');
    res.sendFile(`${dir}/public-tarea/elements.html`);
});

app.get('*', function(req, res) {
    const rutaArray = __dirname.split("\\");
    const dir = rutaArray.splice(0, rutaArray.length - 1).join('\\');
    res.sendFile(`${dir}/public/404.html`);
});

app.listen(port);