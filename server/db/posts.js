const knex = require('./connection');

module.exports = {
  getAll: () => {
    console.log(knex)
    return knex('posts').select();
  },
  getOne: (pid) => {
    return knex('posts').where('pid', pid).first();
  },
  create: (post) => {
    return knex('posts')
      .insert(post, 'pid')
      .then(ids => {
        console.log(ids)
        return ids[0]
      })
  }
}
