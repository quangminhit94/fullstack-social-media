
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('uid');
    table.string('username').unique();
    table.string('email');
    table.boolean('email_verified').defaultTo(false);
    table.text('password');
    table.datetime('date_created');
    table.datetime('last_login');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
