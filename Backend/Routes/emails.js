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

// for updating info of mail
router.put('/email/:emailId',authenticate,emailController.updateMail);

// for deleting mail
router.delete('/email/:emailId',authenticate,emailController.deleteMail);