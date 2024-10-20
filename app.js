// Student Name: Jaykumar Suthar
// ASU ID: 1230576687
// Date : 09/03/2024

// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (if needed)
app.use(express.static('public'));

// Render the form 
app.get('/', (req, res) => {
    res.render('index');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const studentInfo = {
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        description: req.body.description,
    };

    res.send('Student information submitted successfully!');
        // Log the submitted data to the console
    console.log('Submitted Student Information:', studentInfo);

});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
