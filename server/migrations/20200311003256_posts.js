
exports.up = function (knex, Promise) {
  return knex.schema.createTable('posts', table => {
    table.increments('pid');
    table.string('title');
    table.text('body');
    table.integer('user_id').references('users.uid').unsigned().onDelete('cascade');
    table.string('author').references('users.username');
    table.datetime('date_created');
    table.specificType('like_user_id', 'integer ARRAY');
    table.integer('likes').defaultTo(0);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('posts');
};
