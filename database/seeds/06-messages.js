exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('messages')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('messages').insert([
        { sender_id: 1, receiver_id: 2, message: 'message 1' },
        { sender_id: 1, receiver_id: 2, message: 'message 2' },
        { sender_id: 1, receiver_id: 2, message: 'message 3' },
        { sender_id: 1, receiver_id: 2, message: 'message 4' },
        { sender_id: 1, receiver_id: 2, message: 'message 5' },
        { sender_id: 2, receiver_id: 3, message: 'message 6' },
        { sender_id: 2, receiver_id: 3, message: 'message 7' },
        { sender_id: 2, receiver_id: 3, message: 'message 8' },
        { sender_id: 2, receiver_id: 3, message: 'message 9' },
        { sender_id: 2, receiver_id: 3, message: 'message 10' },
        { sender_id: 2, receiver_id: 3, message: 'message 11' },
        { sender_id: 3, receiver_id: 4, message: 'message 12' },
        { sender_id: 3, receiver_id: 4, message: 'message 13' },
        { sender_id: 3, receiver_id: 4, message: 'message 14' },
        { sender_id: 4, receiver_id: 5, message: 'message 15' },
        { sender_id: 4, receiver_id: 5, message: 'message 16' },
        { sender_id: 4, receiver_id: 5, message: 'message 17' },
        { sender_id: 5, receiver_id: 6, message: 'message 18' },
        { sender_id: 5, receiver_id: 6, message: 'message 19' },
        { sender_id: 5, receiver_id: 6, message: 'message 20' },
        { sender_id: 5, receiver_id: 6, message: 'message 21' },
        { sender_id: 6, receiver_id: 7, message: 'message 22' },
        { sender_id: 6, receiver_id: 7, message: 'message 23' },
        { sender_id: 6, receiver_id: 7, message: 'message 24' },
        { sender_id: 7, receiver_id: 8, message: 'message 25' },
        { sender_id: 7, receiver_id: 8, message: 'message 26' },
        { sender_id: 7, receiver_id: 8, message: 'message 27' },
        { sender_id: 7, receiver_id: 8, message: 'message 28' },
        { sender_id: 8, receiver_id: 9, message: 'message 29' },
        { sender_id: 8, receiver_id: 9, message: 'message 30' },
        { sender_id: 8, receiver_id: 9, message: 'message 31' },
        { sender_id: 9, receiver_id: 10, message: 'message 32' },
        { sender_id: 9, receiver_id: 10, message: 'message 33' },
        { sender_id: 9, receiver_id: 10, message: 'message 34' },
        { sender_id: 10, receiver_id: 11, message: 'message 35' },
        { sender_id: 10, receiver_id: 11, message: 'message 36' },
        { sender_id: 10, receiver_id: 11, message: 'message 37' },
        { sender_id: 11, receiver_id: 12, message: 'message 38' },
        { sender_id: 11, receiver_id: 12, message: 'message 39' },
        { sender_id: 11, receiver_id: 12, message: 'message 40' },
        { sender_id: 11, receiver_id: 12, message: 'message 41' },
        { sender_id: 12, receiver_id: 13, message: 'message 42' },
        { sender_id: 12, receiver_id: 13, message: 'message 43' },
        { sender_id: 13, receiver_id: 14, message: 'message 44' },
        { sender_id: 13, receiver_id: 14, message: 'message 45' },
        { sender_id: 14, receiver_id: 15, message: 'message 46' },
        { sender_id: 14, receiver_id: 15, message: 'message 47' },
        { sender_id: 15, receiver_id: 1, message: 'message 48' },
        { sender_id: 15, receiver_id: 1, message: 'message 49' }
      ]);
    });
};
