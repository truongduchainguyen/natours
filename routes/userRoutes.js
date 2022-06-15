const express = require('express');
const userConstroller = require('./../controllers/userController');

const router = express.Router();

router
    .route('/')
    .get(userConstroller.getAllUsers)
    .post(userConstroller.createUser);

router
    .route('/:id')
    .get(userConstroller.getUser)
    .patch(userConstroller.updateUser)
    .delete(userConstroller.deleteUser);

module.exports = router;


