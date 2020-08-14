const knex = require('./connection');

module.exports = {
  getOne: function (id) {
    return knex('users').where('uid', id).first();
  },
  getOneByEmail: function (email) {
    return knex('users').where('email', email).first();
  },
  create: (user) => {
    return knex('users').insert(user, 'uid').then(ids => {
      return ids[0]
    })
  }
}
