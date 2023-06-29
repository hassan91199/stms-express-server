const User = require('../../models/user');

exports.index = async function(req, res, next){
  try{
    const users = await User.find({});
    return res.json(users);
  }catch(err){
    return res.status(500).json({error: 'Internal Server Error'})
  }
};

exports.store = function(req, res, next){
    User.register(
        new User({ 
          name: req.body.name,
          email: req.body.email, 
          username: req.body.username 
        }), req.body.password, function (err, msg) {
          if (err) {
            return res.json(err);
          } else {
            return res.json({ message: "Successful" });
          }
        }
      )
};

exports.show = async function(req, res, next){
  try{
    const userId = req.params.id;
    const user = await User.findById(userId);

    /******************************
     * if no user exists with
     * given id 
     ******************************/
    if(!user){
      return res.status(404).json({error: 'User not found'});
    }

    return res.json(user);
  }catch{
    return res.status(500).json({error: 'Internal Server Error'});
  }
};

exports.update = async function(req, res, next){
  try{
    const userId = req.params.id;
    const updatedUserData = req.body;

    const user = await User.findByIdAndUpdate(userId, updatedUserData, {new: true});

    if(!user){
      return res.status(404).json({error: 'User not found'});
    }

    return res.json(user);
  }catch{
    return res.status(500).json({error: 'Internal Server Error'});
  }
};

exports.destroy = async function(req, res, next){
  try{
    const userId = req.params.id;
    
    const user = await User.findByIdAndDelete(userId);

    if(!user){
      return res.status(404).json({error: 'User not found'});
    }

    return res.json({message: 'User deleted successfully'});
  }catch{
    return res.status(500).json({error: 'Internal Server Error'});
  }
};