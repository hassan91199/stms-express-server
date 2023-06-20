const express = require('express');
const passport = require('../app/http/middleware/auth/passport')
const User = require('../app/models/user');

const userController = require('../app/http/controllers/userController');

const router = express.Router();



router.post('/create-user', userController.create)




module.exports = router;