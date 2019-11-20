exports.up = function(knex) {
  return knex.schema.createTable('usersAnswers', usersAnswers => {
    usersAnswers.increments();
    usersAnswers
      .integer('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
    usersAnswers
      .integer('question_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('questions')
      .onDelete('CASCADE')
    usersAnswers
      .integer('answer_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('answers')
      .onDelete('CASCADE')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('usersAnswers');
};
