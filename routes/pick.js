const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Array of image file names
  const image_names = [
    'bob.jpeg', 
    'balayya.jpeg', 
    'ntr.jpeg', 
    'god style.jpeg', 
    'nwmsu.jpeg'
  ];

  res.render('randomitem', { title: 'A random item', image_names: image_names });
});

module.exports = router;