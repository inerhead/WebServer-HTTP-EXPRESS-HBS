const express = require('express')
const app = express();

app.set('view engine', 'hbs');


app.use(express.static('./public-tarea'));

app.get('/handlebars', function(req, res) {
    res.render('home', {
        title: "Curso de node.js",
        name: "Gustavo Ossío"
    });
});

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

app.listen(3000);