// Import necessary modules
const express = require('express');
const path = require('path');

// Create an instance of the express app
const app = express();

// Set the port number
const port = process.env.PORT || 3000;

// Set the view engine to Pug
app.set('view engine', 'pug');

// Set the views directory to where your pug templates are stored
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images, JavaScript) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page (or index page)
app.get('/', (req, res) => {
    res.send('Welcome to the Vehicle app!');
});

// Route for '/vehicles' to render the vehicles.pug template
app.get('/vehicles', (req, res) => {
    // Render 'vehicles.pug' and pass any data if necessary (for now, no extra data passed)
    res.render('vehicles');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
