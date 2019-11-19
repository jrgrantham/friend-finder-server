exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('messages')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('messages').insert([
        {
          sender_id: '1',
          receiver_id: '2',
          message: 'message for user 1 from user 2'
        },
        {
          sender_id: '1',
          receiver_id: '2',
          message: 'message for user 1 from user 2'
        },
        {
          sender_id: '1',
          receiver_id: '3',
          message: 'message for user 1 from user 3'
        },
        {
          sender_id: '1',
          receiver_id: '4',
          message: 'message for user 1 from user 4'
        },
        {
          sender_id: '1',
          receiver_id: '5',
          message: 'message for user 1 from user 5'
        },
        {
          sender_id: '2',
          receiver_id: '6',
          message: 'message for user 2 from user 6'
        },
        {
          sender_id: '2',
          receiver_id: '7',
          message: 'message for user 2 from user 7'
        },
        {
          sender_id: '2',
          receiver_id: '8',
          message: 'message for user 2 from user 8'
        },
        {
          sender_id: '2',
          receiver_id: '9',
          message: 'message for user 2 from user 9'
        },
        {
          sender_id: '2',
          receiver_id: '10',
          message: 'message for user 2 from user 10'
        },
        {
          sender_id: '2',
          receiver_id: '1',
          message: 'message for user 2 from user 1'
        },
        {
          sender_id: '3',
          receiver_id: '2',
          message: 'message for user 3 from user 2'
        },
        {
          sender_id: '3',
          receiver_id: '2',
          message: 'message for user 3 from user 2'
        },
        {
          sender_id: '3',
          receiver_id: '4',
          message: 'message for user 3 from user 4'
        },
        {
          sender_id: '4',
          receiver_id: '5',
          message: 'message for user 4 from user 5'
        },
        {
          sender_id: '4',
          receiver_id: '6',
          message: 'message for user 4 from user 6'
        },
        {
          sender_id: '4',
          receiver_id: '7',
          message: 'message for user 4 from user 7'
        },
        {
          sender_id: '5',
          receiver_id: '8',
          message: 'message for user 5 from user 8'
        },
        {
          sender_id: '5',
          receiver_id: '9',
          message: 'message for user 5 from user 9'
        },
        {
          sender_id: '5',
          receiver_id: '10',
          message: 'message for user 5 from user 10'
        },
        {
          sender_id: '5',
          receiver_id: '1',
          message: 'message for user 5 from user 1'
        },
        {
          sender_id: '6',
          receiver_id: '2',
          message: 'message for user 6 from user 2'
        },
        {
          sender_id: '6',
          receiver_id: '2',
          message: 'message for user 6 from user 2'
        },
        {
          sender_id: '6',
          receiver_id: '4',
          message: 'message for user 6 from user 4'
        },
        {
          sender_id: '7',
          receiver_id: '5',
          message: 'message for user 7 from user 5'
        },
        {
          sender_id: '7',
          receiver_id: '6',
          message: 'message for user 7 from user 6'
        },
        {
          sender_id: '7',
          receiver_id: '6',
          message: 'message for user 7 from user 6'
        },
        {
          sender_id: '7',
          receiver_id: '8',
          message: 'message for user 7 from user 8'
        },
        {
          sender_id: '8',
          receiver_id: '9',
          message: 'message for user 8 from user 9'
        },
        {
          sender_id: '8',
          receiver_id: '10',
          message: 'message for user 8 from user 10'
        },
        {
          sender_id: '8',
          receiver_id: '1',
          message: 'message for user 8 from user 1'
        },
        {
          sender_id: '9',
          receiver_id: '2',
          message: 'message for user 9 from user 2'
        },
        {
          sender_id: '9',
          receiver_id: '2',
          message: 'message for user 9 from user 2'
        },
        {
          sender_id: '9',
          receiver_id: '4',
          message: 'message for user 9 from user 4'
        },
        {
          sender_id: '10',
          receiver_id: '5',
          message: 'message for user 10 from user 5'
        },
        {
          sender_id: '10',
          receiver_id: '6',
          message: 'message for user 10 from user 6'
        },
        {
          sender_id: '10',
          receiver_id: '6',
          message: 'message for user 10 from user 6'
        },
        {
          sender_id: '11',
          receiver_id: '8',
          message: 'message for user 11 from user 8'
        },
        {
          sender_id: '11',
          receiver_id: '9',
          message: 'message for user 11 from user 9'
        },
        {
          sender_id: '11',
          receiver_id: '10',
          message: 'message for user 11 from user 10'
        },
        {
          sender_id: '11',
          receiver_id: '1',
          message: 'message for user 11 from user 1'
        },
        {
          sender_id: '12',
          receiver_id: '2',
          message: 'message for user 12 from user 2'
        },
        {
          sender_id: '12',
          receiver_id: '2',
          message: 'message for user 12 from user 2'
        },
        {
          sender_id: '13',
          receiver_id: '4',
          message: 'message for user 13 from user 4'
        },
        {
          sender_id: '13',
          receiver_id: '5',
          message: 'message for user 13 from user 5'
        },
        {
          sender_id: '14',
          receiver_id: '6',
          message: 'message for user 14 from user 6'
        },
        {
          sender_id: '14',
          receiver_id: '6',
          message: 'message for user 14 from user 6'
        },
        {
          sender_id: '15',
          receiver_id: '8',
          message: 'message for user 15 from user 8'
        },
        {
          sender_id: '15',
          receiver_id: '9',
          message: 'message for user 15 from user 9'
        }
      ]);
    });
};
