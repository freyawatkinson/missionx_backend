const express = require('express');
// const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');

const app = express();
// Test route to make sure the backend can be reached

app.get('/test', (req, res) => {
    res.send('Welcome to the backend of the React App! - Freya')
});

// Backend routing
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/', routesHandler);


// Set the port for the server to run on
var PORT = process.env.PORT || 4000; 
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}.`);
});

// Database connection at backend with MySQL below:

// get the client
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});
 
// simple query
connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
 
// with placeholder
connection.query(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Page', 45],
  function(err, results) {
    console.log(results);
  }
);