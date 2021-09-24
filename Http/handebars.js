const express = require('express');
var hbs = require('hbs');
const app = express();

// Handlebars
const dirArray = __dirname.split("\\");
const dirRoot = dirArray.splice(0, dirArray.length - 1).join('\\');
hbs.registerPartials(dirRoot + '/views/partials', function(err) {
    if (err)
        console.log(`APP Error: ${err}: ${dirRoot}`);
});
app.set('view engine', 'hbs');

// Serve static content
app.use(express.static('./public-handebars'));


app.get('/', function(req, res) {
    console.log('HOMEN RENDER');
    res.render('home', {
        title: "Curso de node.js",
        name: "Gustavo Ossío"
    });
});

app.get('/generic', function(req, res) {
    console.log('GENERIC RENDER');
    res.render('generic', {
        title: "Curso de node.js",
        name: "Gustavo Ossío"
    });
});

app.get('/', function(req, res) {
    res.send('Hello World');
});


app.get('*', function(req, res) {

    res.sendFile(`${dirRoot}/public/404.html`);
});

app.listen(3000);