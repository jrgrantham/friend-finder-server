const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../models/auth-model');

router.get('/', (req, res) => {
  Users.findAllUsers()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      res.json('unable to get all users ' + error);
    });
});

router.post('/register', (req, res) => {
  // implement registration
  const { username, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  const newUser = {
    username,
    password: hash
  };
  Users.addUser(newUser)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.json('failed to add newUser to database ' + error.message);
    });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  Users.findUserBy({ username })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome back ${user.username}!!`,
          token: token
        });
      } else {
        res.status(401).json({ message: 'incorrect username or password' });
      }
    })
    .catch(error => {
      res.status(500).json('verification error' + error.message);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id
  };
  const options = {
    expiresIn: '1d'
  };
  const secret = process.env.SECRET;
  const result = jwt.sign(payload, secret, options);
  return result;
}

module.exports = router;
