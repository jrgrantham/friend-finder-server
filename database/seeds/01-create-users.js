exports.seed = function(knex) {
  return knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert([
        { username: 'James', password: '1234' },
        { username: 'Megan', password: '1234' },
        { username: 'Mildred', password: '1234' },
        { username: 'Peter', password: '1234' },
        { username: 'Martin', password: '1234' },
        { username: 'Lisa', password: '1234' },
        { username: 'Colin', password: '1234' },
        { username: 'Lewis', password: '1234' },
        { username: 'Duro', password: '1234' },
        { username: 'Samuel', password: '1234' },
        { username: 'Ben', password: '1234' },
        { username: 'Ollie', password: '1234' },
        { username: 'Ayomide', password: '1234' },
        { username: 'Damien', password: '1234' },
        { username: 'Conor', password: '1234' }
      ]);
    });
};
