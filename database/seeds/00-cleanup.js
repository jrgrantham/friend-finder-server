exports.seed = async function(knex) {
  if (
    process.env.DB_ENV === "development" ||
    process.env.DB_ENV === "testing"
  ) {
    await knex("usersAnswers").truncate();
    await knex("questionAnswers").truncate();
    await knex("messages").truncate();
    await knex("answers").truncate();
    await knex("questions").truncate();
    await knex("users").truncate();
  }
};