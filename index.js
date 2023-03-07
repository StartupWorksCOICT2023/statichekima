var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
//serving static file
app.use(express.static("public"));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('index');
});

// about page
app.get('/about', function(req, res) {
  res.render('aboutUs');
});

//registration page
app.get('/registration', function(req, res) {
  res.render('registration');
});

//gallery page
app.get('/gallery', function(req, res) {
  res.render('gallery');
});

app.listen(8080);
console.log('Server is listening on port 8080');