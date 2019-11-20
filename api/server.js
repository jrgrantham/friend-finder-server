const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../routers/auth-router.js');
const userRouter = require('../routers/users-router.js');
const authenticate = require('../routers/authenticate-middleware');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.json('server running');
});

server.use('/api/auth', authRouter);
server.use('/api/users', authenticate, userRouter);
// server.use('/api/users', userRouter);

module.exports = server;
