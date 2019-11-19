const db = require('../database/dbConfig');

module.exports = {
  findReceivedMessageByUserId,
  findUserBy,
  addUser
};

function findReceivedMessageByUserId(id) {
  return db('messages as m')
    .join('users as u','m.sender_id', 'u.id')
    .select(
      'u.id AS sender_id',
      'u.username AS sender_username',
      'm.message')
    .where('m.receiver_id', id)
}

function findUserBy(filter) {
  return db('users')
    .where(filter)
    .first();
}

async function addUser(user) {
  const [id] = await db('users').insert(user, 'id');
  return findUserById(id);
}