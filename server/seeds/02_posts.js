exports.seed = (knex, Promise) => {
  return knex.raw('DELETE FROM "posts"; ALTER SEQUENCE posts_pid_seq RESTART WITH 1')
    .then(() => {
      const posts = [
        {
          title: 'Post number 1 title',
          body: 'Post number 1 body',
          user_id: 2,
          author: 'hello',
          date_created: new Date()
        },
        {
          title: 'Post number 2 title',
          body: 'Post number 2 body',
          user_id: 1,
          author: 'berto',
          date_created: new Date()
        },
        {
          title: 'Post number 3 title',
          body: 'Post number 3 body',
          user_id: 2,
          author: 'hello',
          date_created: new Date()
        },
        {
          title: 'Post number 4 title',
          body: 'Post number 4 body',
          user_id: 1,
          author: 'berto',
          date_created: new Date()
        }
      ]
      return knex('posts').insert(posts)
    })
};
