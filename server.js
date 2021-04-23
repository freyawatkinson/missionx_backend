// Express and cors
const express = require('express');
const cors = require('cors');


// Loading environment variables from dotenv package
// require('dotenv').config();

const { port } = require('./config');
const { connect } = require('./db')
const { errorHandler, simpleLogger, allowCORS } = require('./middlewares');
const  projectRouter  = require('./routes/project.routes');
const  userRouter = require('./routes/user.routes');

// Using express
const app = express();
app.use(express.urlencoded({ extended: true }));
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

app.use(errorHandler);

// Starting the server once connected to the database

const startServer = async () => {
  try {
    await connect(); // database connected.
    app.listen(port, () => console.log(`🚀 Server running on port ${port}!`));
  } catch (e) {
    console.error(e);
  }
};

startServer();