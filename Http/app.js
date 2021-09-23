const express = require('express')
const app = express();



app.use(express.static('./public'));

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('*', function(req, res) {
    const rutaArray = __dirname.split("\\");
    const dir = rutaArray.splice(0, rutaArray.length - 1).join('\\');
    res.sendFile(`${dir}/public/404.html`);
});

app.listen(3000);