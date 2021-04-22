// Express and cors
const express = require('express');
const cors = require('cors');


// Loading environment variables from dotenv package
require('dotenv').config();

const {port} = require('./db');
const {errorHandler, simpleLogger, allowCORS} = require('./middlewares');
const {projectRouter} = require('./routes/projectRoutes');
const {userRouter} = require('./routes/userRoutes');

// Using express
const app = express();
app.use(express.json());

// Using CORS
app.use(cors());
// Middleware allowing CORS
app.all('/*', allowCORS); 
// Logger middleware
app.use(simpleLogger);

// Register routers
app.use('/api/project', projectRouter);
app.use('/api/user', userRouter);

// 404 error handler
app.all('*', (req, res, next) => {
    const err = new HttpException(404, `Endpoint ${req.url} Not found`);
    next(err);
});


// Placing a holder for user data
const users = [];

app.use(express.json());

app.get('/backend/users', (req, res) => {
    console.log('backend/users called!')
    res.json(users);
});

app.post('/backend/user', (req, res) => {
    const user = req.body.user;
    console.log('Adding user: : : : :', user);
    users.push(user);
    res.json('user added');
});

app.get('/', (req, res) => {
    res.send('App is working!');
});

app.use(errorHandler);

// Starting the server once connected to the database

const startServer = async () => {
    try {
      await connect();
      app.listen(port, () => console.log(`🚀 Server running on port ${port}!`));
    } catch (e) {
      console.error(e);
    }
  };
  
  startServer();