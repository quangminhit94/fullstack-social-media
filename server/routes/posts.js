const express = require('express');
const router = express.Router();
const Posts = require('../db/posts');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Posts' });
});

router.get('/get/all_posts', function (req, res, next) {
  Posts.getAll().then(posts => res.json(posts))
});

router.post('/post_to_db', function (req, res, next) {
  const body_vector = String(req.body.body)
  const title_vector = String(req.body.title)
  const user_vector = String(req.body.username)

  const search_vector = [title_vector, body_vector, user_vector]
  req.body.title, req.body.body, search_vector, req.body.uid, req.body.username
  const post = {
    title: req.body.title,
    body: req.body.body,
    search_vector: search_vector,
    user_id: req.body.uid,
    author: req.body.username,
    date_created: new Date()
  }
  // Posts.create(post).then(id => {
  //   res.json({ pid: id })
  // })
  Posts.create(post)
    .then(result => res.json(result))
});

router.put('/api/put/post', (req, res, next) => {
  const values = [req.body.title, req.body.body, req.body.uid, req.body.pid, req.body.username]
  pool.query(`UPDATE posts SET title = $1, body = $2, user_id = $3, author = $5, date_created = NOW()
              WHERE pid = $4`, values, (q_error, q_response) => {
    if (q_error) return next(q_error)
    res.json(q_response.rows)
  })

  Posts.getOne(req.body.pid).then(post => {
    if(req.session.user_id === post.uid) {
      Posts.getOne(req.body.pid)
      .update(post)
      .then(result => res.json(result))
    } else {
      res.status(401).json({message: 'not allow'})
    }
  });
})

module.exports = router;
