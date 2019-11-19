exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
    users.increments();
    users
      .string('username', 255)
      .notNullable()
      .unique();
    users.string('password', 255).notNullable();
    users.string("fname", 128);
    users.string("lname", 128);
    users.string("avatar_url", 128);
    users.decimal("DOB");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
