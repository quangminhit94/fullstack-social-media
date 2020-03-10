exports.seed = (knex, Promise) => {
  return knex.raw('DELETE FROM "users"; ALTER SEQUENCE users_uid_seq RESTART WITH 3')
    .then(() => {
      const users = [
        {
          uid: 1,
          username: 'berto',
          email: 'berto.ort@gmail.com',
          password: 'pineapple',
          date_created: new Date()
        },
        {
          uid: 2,
          username: 'hello',
          email: 'hello@cjr.co.de',
          password: 'keyboard_cat',
          date_created: new Date()
        }
      ]
      return knex('users').insert(users)
    })
};
