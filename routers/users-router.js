const router = require('express').Router();
const Users = require('../models/users-model');

router.get('/:id/messages', (req, res) => {
  Users.findReceivedMessageByUserId(req.params.id)
    .then(messages => {
      res.json(messages);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Could not get messages: ' + err.message });
    });
});

router.get('/:id/messages/sent', (req, res) => {
  Users.findSentMessageByUserId(req.params.id)
    .then(messages => {
      res.json(messages);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Could not get messages: ' + err.message });
    });
});

router.post('/:id/messages', (req, res) => {
  const senderId = req.params.id;
  const messageContent = req.body.message;
  const recipientId = req.body.recipient;
  const newMessage = {
    sender_id: senderId,
    receiver_id: recipientId,
    message: messageContent
  };
  Users.sendNewMessage(newMessage)
    .then(messages => {
      res.json(messages);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Could not get messages: ' + err.message });
    });
});

module.exports = router;
