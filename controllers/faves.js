var express = require('express');
var router = express.Router();

router.get('/animals', function(req, res) {
    res.render('faves/animals', {title: 'Favorite Animals', animals: ['panda', 'tiger']});
  });

router.get('/foods', function(req, res) {
    res.render('faves/foods', {title: 'Favorite Foods', foods: ['chicken', 'pizza']});
  });
  
  module.exports = router;