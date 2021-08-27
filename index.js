const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
app.use('/faves', require('./controllers/faves'));

const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.use(ejsLayouts);


app.get('/', function(req, res) {
    res.render('home');
  });

app.get('/animals', function(req, res) {
    res.render('animals', {title: 'Favorite Animals', animals: ['sand crab', 'corny joke dog']})
  });

  app.get('/foods', function(req, res) {
    res.render('foods', {title: 'Favorite Foods', foods: ['chicken', 'pizza']})
  });
  

  



app.listen(PORT, () => {
    console.log(`Server running on PORT:`, PORT);
});