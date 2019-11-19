exports.up = function(knex) {
  return knex.schema.createTable('usersAnswers', usersAnswers => {
    usersAnswers.increments();
    usersAnswers
      .integer('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
    usersAnswers
      .integer('question_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('questions')
    usersAnswers
      .integer('answer_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('answers')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('usersAnswers');
};
