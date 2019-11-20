const db = require('../database/dbConfig');

module.exports = {
  findReceivedMessageByUserId,
  findSentMessageByUserId,
  sendNewMessage,
  findQuestionsByUserId,
  findUserBy,
  potentialFriends
};

function findReceivedMessageByUserId(id) {
  return db('messages as m')
    .join('users as u', 'm.sender_id', 'u.id')
    .select('u.id as sender_id', 'u.username as sender_username', 'm.message')
    .where('m.receiver_id', id);
}

function findSentMessageByUserId(id) {
  return db('messages as m')
    .join('users as u', 'm.receiver_id', 'u.id')
    .select('m.receiver_id', 'u.username as receiver_username', 'm.message')
    .where('m.sender_id', id);
}

async function sendNewMessage(message) {
  await db('messages').insert(message, 'id');
  return findReceivedMessageByUserId(message.sender_id);
}

// SELECT *
//   FROM questions AS q
//        LEFT JOIN
//        usersAnswers AS ua ON q.id = ua.question_id AND
//                              ua.user_id = 1
//        LEFT JOIN
//        questionAnswers AS qa ON q.id = qa.question_id
//        LEFT JOIN
//        answers AS a ON qa.answer_id = a.id
//  WHERE ua.answer_id IS NULL;

// function findQuestionsByUserId(id) {
//   return db('questions as q')
//     .leftJoin('usersAnswers as ua','ua.question_id', 'q.id')
//     .leftJoin('questionAnswers as qa', 'qa.question_id', 'q.id')
//     .leftJoin('answers as a', 'a.id', 'qa.answer_id')
//     .select(
// 'ua.user_id as user_id',
// 'q.id as question_id',
// 'q.question as question',
// 'a.id as answer_id',
// 'a.answer as answer')
// }

function findQuestionsByUserId(id) {
  return db
    .select(
      'q.id as question_id',
      'q.question as question',
      'a.id as answer_id',
      'a.answer as answer'
    )
    .from('questions as q')
    .leftJoin('questionAnswers as qa', 'qa.question_id', 'q.id')
    .leftJoin('answers as a', 'a.id', 'qa.answer_id')
    .leftJoin('usersAnswers as ua', function() {
      this.on('ua.question_id', 'q.id').on('ua.user_id', db.raw(id));
    })
    .whereNull('ua.user_id');
}

function potentialFriends(id, match) {
  return db.raw(
    `SELECT liA.user_id AS user,
    ouA.user_id AS potentialFriend,
    count( * ) AS match_probability
FROM (
        SELECT ua.user_id,
               ua.question_id,
               ua.answer_id
          FROM usersAnswers AS ua
         WHERE ua.user_id = ${id}
    )
    AS liA
    JOIN
    (
        SELECT ua.user_id,
               ua.question_id,
               ua.answer_id
          FROM usersAnswers AS ua
         WHERE ua.user_id != ${id}
    )
    AS ouA ON liA.question_id = ouA.question_id AND 
              liA.answer_id = ouA.answer_id
GROUP BY liA.user_id,
       ouA.user_id
HAVING count( * ) > ${match}
ORDER BY count( * ) DESC;`
  );
}

function findUserBy(filter) {
  return db('users')
    .where(filter)
    .first();
}
