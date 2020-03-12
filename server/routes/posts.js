const express = require('express');
const router = express.Router();
const Posts = require('../db/posts');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Posts' });
});

router.get('/all', function (req, res, next) {
  Posts.getAll().then(posts => res.json(posts))
});

router.get('/post_to_db', function (req, res, next) {
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
  Posts.create(post).then(ids => {
    res.json(ids[0])
  })
});

module.exports = router;
