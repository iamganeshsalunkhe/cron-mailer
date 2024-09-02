// import the required modules
const {emails} = require('../models');

// for getting all emails(user specific)
exports.getEmails = async (req,res)=>{
    try {
        // get userId from token
        const {userId} = req.user;

        // fetch all emails where this userId present
        const allEmails = await emails.findAll({where:{userId}});

        // send the success response
        res.status(200).json(allEmails);
        } catch (error) {
        // if any error occurs
        res.status(500).json({message:"Error while getting emails"});
        }
};

// create a new mail
exports.createMail = async(req,res)=>{
    try {
        // get userId from token
        const {userId} = req.user;

        // get all info from user
        const {senderEmail,recipientEmail,ccEmail,subject,body,scheduledTime}= req.body;

        const newEmail = await emails.create({
            userId,
            senderEmail,
            recipientEmail,
            subject,
            ccEmail,
            body,
            scheduledTime,
            status:'Scheduled'
        });
        res.status(200).json('Email scheduled successfully');
    } catch (error) {
        // if any error occurs
        res.status(500).json({message:'Error while creating a mail'});
    };
};