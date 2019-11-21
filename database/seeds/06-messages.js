exports.seed = function(knex) {
  // return knex('messages')
  //   .del()
  //   .then(function() {
      return knex('messages').insert([
        {
          sender_id: '1',
          receiver_id: '2',
          message: 'message from user 1 to user 2'
        },
        {
          sender_id: '1',
          receiver_id: '2',
          message: 'message from user 1 to user 2'
        },
        {
          sender_id: '1',
          receiver_id: '3',
          message: 'message from user 1 to user 3'
        },
        {
          sender_id: '1',
          receiver_id: '4',
          message: 'message from user 1 to user 4'
        },
        {
          sender_id: '1',
          receiver_id: '5',
          message: 'message from user 1 to user 5'
        },
        {
          sender_id: '2',
          receiver_id: '6',
          message: 'message from user 2 to user 6'
        },
        {
          sender_id: '2',
          receiver_id: '7',
          message: 'message from user 2 to user 7'
        },
        {
          sender_id: '2',
          receiver_id: '8',
          message: 'message from user 2 to user 8'
        },
        {
          sender_id: '2',
          receiver_id: '9',
          message: 'message from user 2 to user 9'
        },
        {
          sender_id: '2',
          receiver_id: '10',
          message: 'message from user 2 to user 10'
        },
        {
          sender_id: '2',
          receiver_id: '1',
          message: 'message from user 2 to user 1'
        },
        {
          sender_id: '3',
          receiver_id: '2',
          message: 'message from user 3 to user 2'
        },
        {
          sender_id: '3',
          receiver_id: '2',
          message: 'message from user 3 to user 2'
        },
        {
          sender_id: '3',
          receiver_id: '4',
          message: 'message from user 3 to user 4'
        },
        {
          sender_id: '4',
          receiver_id: '5',
          message: 'message from user 4 to user 5'
        },
        {
          sender_id: '4',
          receiver_id: '6',
          message: 'message from user 4 to user 6'
        },
        {
          sender_id: '4',
          receiver_id: '7',
          message: 'message from user 4 to user 7'
        },
        {
          sender_id: '5',
          receiver_id: '8',
          message: 'message from user 5 to user 8'
        },
        {
          sender_id: '5',
          receiver_id: '9',
          message: 'message from user 5 to user 9'
        },
        {
          sender_id: '5',
          receiver_id: '10',
          message: 'message from user 5 to user 10'
        },
        {
          sender_id: '5',
          receiver_id: '1',
          message: 'message from user 5 to user 1'
        },
        {
          sender_id: '6',
          receiver_id: '2',
          message: 'message from user 6 to user 2'
        },
        {
          sender_id: '6',
          receiver_id: '2',
          message: 'message from user 6 to user 2'
        },
        {
          sender_id: '6',
          receiver_id: '4',
          message: 'message from user 6 to user 4'
        },
        {
          sender_id: '7',
          receiver_id: '5',
          message: 'message from user 7 to user 5'
        },
        {
          sender_id: '7',
          receiver_id: '6',
          message: 'message from user 7 to user 6'
        },
        {
          sender_id: '7',
          receiver_id: '6',
          message: 'message from user 7 to user 6'
        },
        {
          sender_id: '7',
          receiver_id: '8',
          message: 'message from user 7 to user 8'
        },
        {
          sender_id: '8',
          receiver_id: '9',
          message: 'message from user 8 to user 9'
        },
        {
          sender_id: '8',
          receiver_id: '10',
          message: 'message from user 8 to user 10'
        },
        {
          sender_id: '8',
          receiver_id: '1',
          message: 'message from user 8 to user 1'
        },
        {
          sender_id: '9',
          receiver_id: '2',
          message: 'message from user 9 to user 2'
        },
        {
          sender_id: '9',
          receiver_id: '2',
          message: 'message from user 9 to user 2'
        },
        {
          sender_id: '9',
          receiver_id: '4',
          message: 'message from user 9 to user 4'
        },
        {
          sender_id: '10',
          receiver_id: '5',
          message: 'message from user 10 to user 5'
        },
        {
          sender_id: '10',
          receiver_id: '6',
          message: 'message from user 10 to user 6'
        },
        {
          sender_id: '10',
          receiver_id: '6',
          message: 'message from user 10 to user 6'
        },
        {
          sender_id: '11',
          receiver_id: '8',
          message: 'message from user 11 to user 8'
        },
        {
          sender_id: '11',
          receiver_id: '9',
          message: 'message from user 11 to user 9'
        },
        {
          sender_id: '11',
          receiver_id: '10',
          message: 'message from user 11 to user 10'
        },
        {
          sender_id: '11',
          receiver_id: '1',
          message: 'message from user 11 to user 1'
        },
        {
          sender_id: '12',
          receiver_id: '2',
          message: 'message from user 12 to user 2'
        },
        {
          sender_id: '12',
          receiver_id: '2',
          message: 'message from user 12 to user 2'
        },
        {
          sender_id: '13',
          receiver_id: '4',
          message: 'message from user 13 to user 4'
        },
        {
          sender_id: '13',
          receiver_id: '5',
          message: 'message from user 13 to user 5'
        },
        {
          sender_id: '14',
          receiver_id: '6',
          message: 'message from user 14 to user 6'
        },
        {
          sender_id: '14',
          receiver_id: '6',
          message: 'message from user 14 to user 6'
        },
        {
          sender_id: '15',
          receiver_id: '8',
          message: 'message from user 15 to user 8'
        },
        {
          sender_id: '15',
          receiver_id: '9',
          message: 'message from user 15 to user 9'
        }
      ]);
    // });
};
