const express = require("express");
const app = express(); //Creates the Express App
let port = process.env.PORT ;

// Adds the Middleware
app.use(express.static("public"))

//Starts the Express Server 
if (port == null || port == "") {
    port = 8000;
  }
  app.listen(port);