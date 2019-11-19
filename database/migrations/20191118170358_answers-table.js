exports.up = function(knex) {
  return knex.schema.createTable('answers', answers => {
    answers.increments();
    answers
      .string('answer', 255)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('answers');
};
