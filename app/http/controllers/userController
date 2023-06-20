const User = require('../../models/user');

exports.create = function(req, res, next){
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
};