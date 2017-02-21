var express = require('express'),
pug = require('pug'),
path = require('path'),
data = require('./data/products.json');
 
var app = express(); 
 
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public'))); 

app.get('/', function(req, res){
    res.render('index');
});
app.get('/:viewname', function(req, res){
    res.render(req.params.viewname);
});
app.get('/menu1', function(req, res){
    res.render('menu1', data);
});

app.listen(3000);