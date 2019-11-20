exports.up = function(knex) {
  return knex.schema.createTable('messages', messages => {
    messages.increments();
    messages.text('message').notNullable();
    messages
      .integer('sender_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    messages
      .integer('receiver_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('messages');
};
