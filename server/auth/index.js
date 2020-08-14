const express = require('express')
const bcrypt = require('bcrypt');
const router = express.Router()
const User = require('../db/user');

router.get('/', (req, res) => {
  res.json({
    message: '🍣'
  })
})

// * [x] Users can login to the app with valid email/password
// * [x] Users cannot login to the app with a blank or missing email
// * [x] Users cannot login to the app with a blank or incorrect password

function validateUser(user) {
  const validEmail = typeof user.email === 'string' &&
    user.email.trim() !== '';
  const validPassword = typeof user.password === 'string' &&
    user.password.trim() !== '' &&
    user.password.trim().length >= 6;
  return validEmail && validPassword;
}

router.post('/sign_up', (req, res, next) => {
  if (validateUser(req.body)) {
    User
      .getOneByEmail(req.body.email)
      .then(user => {
        if (!user) {
          // user not found mean unique
          // hash password
          const myPlainPassword = req.body.password
          const saltRounds = 10
          bcrypt.hash(myPlainPassword, saltRounds)
            .then(hash => {
              // insert pws to db
              const user = {
                email: req.body.email,
                username: req.body.email.substring(0, req.body.email.indexOf('@')),
                password: hash,
                date_created: new Date()
              }
              User.create(user).then(id => {

                res.json({
                  hash,
                  id,
                  message: '⚡'
                })
              })
              // redirect
            })
        }
        else {
          res.status(409).json('Email in use');
          // next(new Error('Email in use'))
        }
      })
  }
  else {
    // send an error
    res.status(401).json('Invalid User');
    // next(new Error('Invalid User'))
  }
})

router.post('/login', (req, res, next) => {
  if (validateUser(req.body)) {
    User.getOneByEmail(req.body.email).then(user => {
      if (user) {
        // compare password with hash password
        bcrypt.compare(req.body.password, user.password)
          .then(result => {
            if (result) {
              // set-cookie header
              const isSecure = req.app.get('env') !== 'development';
              res.cookie('user_id', user.uid, {
                httpOnly: true,
                signed: true,
                secure: isSecure, // when production
              })
              res.json({
                user_id: user.uid,
                message: 'Logging in...'
              })
            }
            else {
              res.status(401).json('Invalid login');
              // next(new Error('Invalid login'))
            }
          })
      }
      else {
        res.status(401).json('Invalid login');
        // next(new Error('Invalid login'))
      }
    })
  }
  else {
    res.status(401).json('Invalid login');
    // next(new Error('Invalid login'))
  }

})

router.get('/logout', (req, res) => {
  res.clearCookie('user_id')
  res.json({
    message: 'lock'
  })
})

module.exports = router