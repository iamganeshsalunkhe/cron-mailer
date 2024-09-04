// import the required modules
const express = require('express');
const authController = require('../Controller/authController');
const authenticate = require('../Middleware/authenticate');

const router = express.Router();

// define routes
// for  signup
router.post('/signup',authController.signup);

// for login 
router.post('/login',authController.login);

// for forgot password 
router.post('/forgotPassword',authController.forgotPassword);

// for logout 
router.post('/logout',authenticate,authController.logout);

module.exports = router;
