const router = require('express').Router();
const Users = require('../models/users-model');


router.get("/:id/messages", (req, res) => {
  Users
    .findReceivedMessageByUserId(req.params.id)
    .then(messages => {
      res.json(messages);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Could not get messages: " + err.message });
    });
});

module.exports = router