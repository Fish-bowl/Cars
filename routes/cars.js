var express = require('express');
var router = express.Router();
var cars = require('../models').cars

var cars = [
  {id: 1, make: 'Toyota', model: 'Supra mkIV', year: '1999' },
  {id: 2, make: 'Subaru', model: '22b', year: '2000' },
  {id: 3, make: 'Nissan', model: 'r32 Skyline', year: '1989' },
  {id: 4, make: 'Mazda' , model: 'rx7 spirit-R', year: '1993' }
]

router.post('/', function(req, res) {
  var cars = req.body.cars
  cars.create({ cars: cars})
    .then( function() {
      res.redirect('/cars')
    })
})

router.get('/', function(req, res) {
  // car.all()
    // .then( function(cars) {
      res.render('cars', { cars: cars })
    // })
})

module.exports = router