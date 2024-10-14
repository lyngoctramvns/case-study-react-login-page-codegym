const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

// middleware to parse JSON request body
app.use(bodyParser.json());

// POST route to handle registration form submission
app.post('/register', (req, res) => {
    // read existing users from file
    const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));
    
    // add new user to users array
    users.push(req.body);

    // write updated users array back to file
    fs.writeFileSync('users.json', JSON.stringify(users));

    // send response
    res.send('User registered successfully!');
});

// start server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});