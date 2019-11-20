exports.up = function(knex) {
  return knex.schema.createTable('questionAnswers', questionAnswers => {
    questionAnswers.increments();
    questionAnswers
      .integer('question_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('questions')
      .onDelete('CASCADE')
    questionAnswers
      .integer('answer_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('answers')
      .onDelete('CASCADE')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('questionAnswers');
};