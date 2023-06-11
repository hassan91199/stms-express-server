const express = require('express');
const passport = require('../auth/passport')
const User = require('../app/models/user');

const router = express.Router();
  
  /*
    Login routes -- This is where we will use the 'local'
    passport authenciation strategy. If success, send to
    /login-success, if failure, send to /login-failure
  */
  router.post('/login', passport.authenticate('local', { 
    failureRedirect: '/login-failure', 
    successRedirect: '/login-success'
  }), (err, req, res, next) => {
    if (err) next(err);
  });
  
  router.get('/login-failure', (req, res, next) => {
    console.log(req.session);
    res.json({message: 'Login Attempt Failed.'});
  });
  
  router.get('/login-success', (req, res, next) => {
    console.log(req.session);
    res.json({message: 'Login Attempt was successful.'});
  });

  module.exports = router;