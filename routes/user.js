const express = require('express');
const passport = require('../app/http/middleware/auth/passport')
const User = require('../app/models/user');

const userController = require('../app/http/controllers/userController.js');

const router = express.Router();


router.get('/users', userController.index)              //List all users
router.post('/users', userController.store)             //Create(add) a user
router.get('/users/:id', userController.show)           //Show a user
router.put('/users/:id', userController.update)         //Update(edit) a user
router.delete('/users/:id', userController.destroy)     //Delete a user




module.exports = router;