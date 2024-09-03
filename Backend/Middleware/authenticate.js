// import the required module
const jwt = require('jsonwebtoken');
const {users}= require('../models');

module.exports = async (req,res,next)=>{
    // get token 
    const token = req.cookies.token;

     if (!token){
        return res.status(401).json({message:"Access denied. No token provided."});
     };
     try {
        // check user is valid
        const getUser = jwt.verify(token,process.env.JWT_SECRET);
        if (!getUser)return res.status(404);

        // extract user using primary key
        const user = await users.findByPk(getUser.id);
        if (!user)return res.status(404).json({message:"User not found"});

        // attach user object to request for further routes
        req.user = user;

        // call the next function
        next();
     } catch (error) {
        // if invalid token provided
        res.status(400).json({message:"Invalid token"})
     }
}