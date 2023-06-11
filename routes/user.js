const express = require('express');
const passport = require('../auth/passport')
const User = require('../app/models/user');

const router = express.Router();

router.post('/create-user', function (req, res) {
    User.register(
      new User({ 
        email: req.body.email, 
        username: req.body.username 
      }), req.body.password, function (err, msg) {
        if (err) {
          res.json(err);
        } else {
          res.json({ message: "Successful" });
        }
      }
    )
  })
  
  

  module.exports = router;