
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('uid');
    table.string('email').unique().notNullable();
    table.boolean('email_verified').defaultTo(false);
    table.text('password').notNullable();
    table.timestamp('date_created').defaultTo(knex.fn.now());
    table.datetime('last_login');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
