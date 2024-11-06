const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Array of image file names
  const image_names = [
    'bob.jpg', 
    'balayya.jpg', 
    'ntr.jpg', 
    'god style.jpg', 
    'nwmsu.jpg'
  ];

  res.render('randomitem', { title: 'A random item', image_names: image_names });
});

module.exports = router;