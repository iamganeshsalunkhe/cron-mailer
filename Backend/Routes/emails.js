// import required modules
const express = require('express');
const emailController = require('../Controller/emailController');
const authenticate = require('../Middleware/authenticate');

const router = express.Router();

// define routes
//for getting all emails
router.get('/email',authenticate,emailController.getEmails);

// for creating mail 
router.post('/email',authenticate,emailController.createMail);