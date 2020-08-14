const knex = require('./connection');

module.exports = {
  getAll: () => {
    console.log(knex)
    return knex('posts').select();
  },
  getOne: (pid) => {
    return knex('posts').where('pid', pid).first();
  },
  getByUser: function(id){
    return knex('posts').where('uid', id);
  },
  create: (post) => {
    return knex('posts')
      // .insert(post, 'pid')
      // .then(ids => {
      //   console.log(ids)
      //   return ids[0]
      // })
      .insert(post)
      .then(result => {
        console.log(result)
        return result;
      })
  },
  update: (post) => {
    return knex('posts')
      .update(post)
      .then(result => {
        console.log(result)
        return result
      })
  },
}
