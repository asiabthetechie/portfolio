const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// A console.log to alert that the server is up and running.
app.listen(port, () => 
    console.log(`Listening on port ${port}`)
    );

// Create a GET route
app.get('/', (req, res) => {
    res.send({ 
        express: 'EXPRESS BACKEND CONNECTED TO REACT APP'});
});