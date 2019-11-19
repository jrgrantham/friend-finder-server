exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
    users.increments();
    users
      .string('username')
      .notNullable()
      .unique();
    users.string('password').notNullable();
    users.string('fname');
    users.string('lname');
    users.string('avatar_url');
    users.decimal('DOB');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
