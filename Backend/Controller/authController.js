// import required module
const bcryptjs = require('bcryptjs');
const {users} = require('../models');
const generateAuthToken = require('../Utils/authToken');



// for signup functionality

exports.signup = async (req,res)=>{
    try {
        // get required filed as input from user
        const {username,email, password} = req.body;
        
        // check the user is already exits
        const checkUser = await users.findOne({where:email});

        // if user already present 
        if (checkUser)return res.status(400).json({message:"You already have account with us!! Please login!"});


        // if user not present
        //hash the password 
        const hashPassword = await bcryptjs.hash(password,10);

        //create a new user
        const createUser = await users.create({
            username,
            email,
            password:hashPassword
        });
        // send back response
        res.status(201).json({message:"User created successfully"});
    } catch (error) {
        // if any error occurs
        res.status(500).json({message:"Error while creating a user"});
    }    
};
