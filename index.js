const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

const PORT = process.env.PORT || 8000;

app.use('/faves', require('./controllers/faves'));
app.use('/hates', require('./controllers/hates'));


app.set('view engine', 'ejs');
app.use(ejsLayouts);


app.get('/', function(req, res) {
    res.render('home');
  });

app.get('faves/animals', function(req, res) {
    res.render('animals', {title: 'Favorite Animals', animals: ['panda', 'tiger']})
  });

app.get('faves/foods', function(req, res) {
    res.render('foods', {title: 'Favorite Foods', foods: ['chicken', 'pizza']})
  }); 

app.get('/animals', function(req, res) {
    res.render('animals', {title: 'Hated Animals', animals: ['slow sloth', 'lazy monkey']})
  });

app.get('/foods', function(req, res) {
    res.render('foods', {title: 'Hated Foods', foods: ['brusselsprouts', 'celery']})
  });
  

app.listen(PORT, () => {
    console.log(`Server running on PORT:`, PORT);
});