// import the required modules
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// configuration of dotenv
dotenv.config();

// initiate port
const PORT = process.env.PORT || 4200;

// initiate app
const app = express();

// using middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:5173',
    credential:true
}
));

// importing routes
const authRoute = require('./Routes/auth');


// using routes
app.use('/',authRoute);


// listening
app.listen(PORT,()=>{
    console.log(`Server listening on PORT ${PORT}`);
});