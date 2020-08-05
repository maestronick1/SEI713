var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use('/faves', require('./controllers/faves'));

app.listen(3000)

app.get('/', function(req, res) {
    res.render('home');
  });
//   app.get('/animals', function(req, res) {
//     res.render('animals', {title: 'Favorite Animals', animals: ['sand crab', 'corny joke dog']})
//   });
//   app.get('/food', function(req, res) {
//     res.render('food', {title: 'Favorite food', foods: ['crab', 'steak', 'lobster']})
//   });
app.get('/animals', function(req, res) {
    res.render('animals', {title: 'Hate Animals', animals: ['scorpions', 'spiders']})
  });
app.get('/food', function(req, res) {
    res.render('food', {title: 'Favorite food', foods: ['candy', 'processed meats', 'anchovies']})
  });
app.use('/faves', require('./controllers/faves'));