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
