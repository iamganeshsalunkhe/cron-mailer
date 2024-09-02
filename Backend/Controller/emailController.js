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


// update the mail
exports.updateMail = async(req,res)=>{
    try {
        // get emailId from req.params
        const {emailId}= req.params;

        // get data from user as input
        const {recipientEmail,ccEmail,subject,body,scheduledTime}= req.body;

        // search for email using emailId
        const emailToUpdate = await emails.findByPk(emailId);
        
        // if some data not passed by user then use already present data
        emailToUpdate.recipientEmail = recipientEmail ||emailToUpdate.recipientEmail;

        emailToUpdate.scheduledTime = scheduledTime || emailToUpdate.scheduledTime;

        emailToUpdate.subject = subject || emailToUpdate.subject;

        emailToUpdate.body = body || emailToUpdate.body;

        emailToUpdate.ccEmail = ccEmail || emailToUpdate.ccEmail;

        // save the changes
        await emailToUpdate.save();

        res.status(200).json(emailToUpdate);
        
    } catch (error) {
        // if any error occurs
        res.status(500).json({message:"Error while updating the mails"});
    }
};

// for deleting mails

exports.deleteMail = async(req,res)=>{
    try {
        // get emailId from req.params
        const {emailId}= req.params;

        // get mail from mailId
        const mailToDelete = await emails.findByPk(emailId);

        // if no mail found
        if (!mailToDelete) return res.status(404).json({message:"Mail not found"});
        
        // delete the mail
        await mailToDelete.destroy();

        // response on success
        res.status(200).json({message:"Mail deleted successfully"});
    } catch (error) {
        // if any error occurs
        res.status(500).json({message:"Error while deleting a mail"});
    };
};