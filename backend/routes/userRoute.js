const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

router
    .route('/')
    .get(userController.getAllUsers)
router
    .route('/signin')
    .post(userController.getUserByCredentials)
router
    .route('/register')
    .post(userController.registerUser)

router
    .route('/:id')
    .get(userController.getUserById)
    .delete(userController.deleteUserById) 

module.exports = router;