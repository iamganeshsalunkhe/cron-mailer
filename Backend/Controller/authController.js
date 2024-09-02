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

// for login functionality

exports.login = async (req,res)=>{
    try {
        // get input from user 
        const {email,password} = req.body;

        // find the user using email
        const user = await users.findOne({where:{email}});

        // if email not exists in our system
        if (!user) return res.status(400).json({message:"Invalid email or you don't have account with us!!"});

        // is password is correct
        const checkPassword = await bcryptjs.compare(password,user.password);

        // if password wrong
        if (!checkPassword)return res.status(400).json({message:"Invalid password"});

        // if password correct
        // generate token
        const token = generateAuthToken(user);

        res.cookie('token',token,{
            httpOnly:true,
            maxAge:3600000,
            secure:false,
            sameSite:'Lax'
        })
        res.status(200).json({message:"Logged in successfully"});
    } catch (error) {
        // if any error occurs
        res.status(500).json({message:"Error while logging in"});
    };
};

// forgot password functionality

exports.forgotPassword = async (req,res)=>{
    try {
        // get the required input from user
        const {email,password}= req.body;
        const user = await users.findOne({where:{email}});

        // if user not exists
        if (!user)return res.status(404).json({message:"User not found!"});

        const hashPassword = await bcryptjs.hash(password,10);
        
        // changes the old password with new one
        user.password = hashPassword;

        await user.save();
        res.status(200).json({message:"Password changed successfully"});

    } catch (error) {
        // if any error occurs
        res.status(400).json({message:"Error while updating password"})        
    }
};

// logout functionality
exports.logout = async (req,res)=>{
    res.clearCookies('token');
    res.status(200).json({message:"Logged out successfully"});
}