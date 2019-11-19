exports.up = function(knex) {
  return knex.schema.createTable('questions', questions => {
    questions.increments();
    questions
      .string('question', 255)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('questions');
};
