const express = require('express');
const path = require ('path');
const routes = require('./routes');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.all('/', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
});

app.get('/', (req, res) => {
  // res.send('Home#index')
  res.render('toys/index')
});

app.use('/', routes);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
