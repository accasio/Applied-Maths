var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));


app.get('/', function (req, res)
{
    res.render('index.html');
});

app.listen(PORT);
console.log('Server running at 127.0.0.1:' + PORT);