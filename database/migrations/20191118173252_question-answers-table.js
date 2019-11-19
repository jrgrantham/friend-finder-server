exports.up = function(knex) {
  return knex.schema.createTable('questionAnswers', questionAnswers => {
    questionAnswers.increments();
    questionAnswers
      .integer('question_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('questions')
    questionAnswers
      .integer('answer_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('answers')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('questionAnswers');
};