exports.up = function(knex) {
  return knex.schema.createTable('messages', messages => {
    messages.increments();
    messages.text('message').notNullable();
    messages
      .integer('sender_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users');
    messages
      .integer('receiver_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('messages');
};
