const express = require('express');
const passport = require('../app/http/middleware/auth/passport')
const User = require('../app/models/user');

const router = express.Router();

  /*
    Protected Route -- Look in the account controller for
    how we ensure a user is logged in before proceeding.
    We call 'isAuthenticated' to check if the request is 
    authenticated or not. 
  */
  router.get('/', function(req, res) {
    console.log(req.session)
    if (req.isAuthenticated()) {
      res.json({ message: 'Welcome to dashboard' })
    } else {
      res.json({ message: 'You are not authenticated' })
    }
  })

  module.exports = router;