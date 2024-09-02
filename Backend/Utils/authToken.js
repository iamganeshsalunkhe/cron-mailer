// import required module
const jwt = require('jsonwebtoken');

// function to generate an authenticate on token for a user
const generateAuthToken = (user)=>{
    // payload
    const token = jwt.sign({id:user.userId,email:user.emailId}, 
    // the secret key for token
    process.env.JWT_SECRET,

    // token expiration time
    {expiresIn:'1h'}
    );
    return token;
};

module.exports = generateAuthToken;