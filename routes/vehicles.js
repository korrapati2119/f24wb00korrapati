var express = require('express');
var router = express.Router();

// Route for the Vehicles page
router.get('/vehicles', (req, res) => {
  // Array of vehicles to display
  let results = [
    { vehicle_name: 'Sedan', vehicle_type: 'Car', max_speed: 180 },
    { vehicle_name: 'Sport Bike', vehicle_type: 'Motorcycle', max_speed: 220 },
    { vehicle_name: 'SUV', vehicle_type: 'Car', max_speed: 160 }
  ];

  // Render the vehicles.pug template and pass the data
  res.render('vehicles', { title: 'Search Results - Vehicles', results: results });
});

module.exports = router;
