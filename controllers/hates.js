var express = require('express');
var router = express.Router();

router.get('/animals', function(req, res) {
    res.render('hates/animals', {title: 'Hated Animals', animals: ['slow sloth', 'lazy monkey']});
  });

router.get('/foods', function(req, res) {
    res.render('hates/foods', {title: 'Hated Foods', foods: ['brusselsprouts', 'celery']});
  });
  
  module.exports = router;