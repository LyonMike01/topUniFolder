const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const product = require('./files/object');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

  
// Assign route
app.use('/', (req, res, next) => {
  res.send('Node.js Search and Filter');
});
  

// Assign route
app.use('/filter', (req, res, next) => {
    const filters = req.query;
    const filteredUsers = data.filter(user => {
      let isValid = true;
      for (key in filters) {
        console.log(key, user[key], filters[key]);
        isValid = isValid && user[key] == filters[key];
      }
      return isValid;
    });
    res.send(filteredUsers);
  });
// Start server on PORT 5000
app.listen(5000, () => {
  console.log('Server started!');
});

// http://localhost:5000?id=2
// http://localhost:5000?city=Metropolis&age=21