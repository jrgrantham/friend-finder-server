const router = require('express').Router();
const Users = require('../models/users-model');

router.get('/:id/', (req, res) => {
  Users.findUserById(req.decodedToken.subject)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Could not get user: ' + err.message });
    });
});

router.get('/:id/messages', (req, res) => {
  Users.findReceivedMessageByUserId(req.decodedToken.subject)
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
  Users.findSentMessageByUserId(req.decodedToken.subject)
    .then(messages => {
      res.json(messages);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Could not get messages: ' + err.message });
    });
});

router.get('/:id/question', async (req, res) => {
  try {
    const question = await Users.findQuestionsByUserId(req.decodedToken.subject);
    const answers = await Users.findQuestionAnswers(req.decodedToken.subject);
    const result = { ...question, answers };
    res.json(result);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Could not get questions: ' + err.message });
  }
});

router.get('/:id/matches', (req, res) => {
  const match = req.body.match || 0;
  Users.potentialFriends(req.decodedToken.subject, match)
    .then(friends => {
      if (process.env.DB_ENV === "production") {
        res.status(200).json(friends.rows);
      } else {
        res.status(200).json(friends);
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Could not get friends: ' + err.message });
    });
});

router.post('/:id/question', (req, res) => {
  const userId = req.decodedToken.subject;
  const answerId = req.body.answerId;
  const questionId = req.body.questionId;
  const answer = {
    user_id: userId,
    answer_id: answerId,
    question_id: questionId
  };
  Users.sendAnswer(answer)
    .then(question => {
      res.json(question);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Could not get messages: ' + err.message });
    });
});

router.post('/:id/messages', (req, res) => {
  const senderId = req.decodedToken.subject;
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
