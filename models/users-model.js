const db = require('../database/dbConfig');

module.exports = {
  findReceivedMessageByUserId,
  findSentMessageByUserId,
  sendNewMessage,
  findUserBy,
};

function findReceivedMessageByUserId(id) {
  return db('messages as m')
    .join('users as u','m.sender_id', 'u.id')
    .select(
      'u.id as sender_id',
      'u.username as sender_username',
      'm.message')
    .where('m.receiver_id', id)
}

function findSentMessageByUserId(id) {
  return db('messages as m')
    .join('users as u','m.receiver_id', 'u.id')
    .select(
      'm.receiver_id',
      'u.username as receiver_username',
      'm.message')
    .where('m.sender_id', id)
}

async function sendNewMessage(message) {
  await db('messages').insert(message, 'id')
  return findReceivedMessageByUserId(message.sender_id)
}

function findUserBy(filter) {
  return db('users')
    .where(filter)
    .first();
}

