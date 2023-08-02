const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require('path'); // if we are changing the path of any folder

const connectDB = require('./server/database/connection')



const app = express();

//creating env file and importing it
dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080;

//log requests -- it prints log msg using morgan ie get post
app.use(morgan('tiny'));

// connect mongoDB
connectDB();

// parse request to bodyparser
app.use(bodyparser.urlencoded({extended:true}));

// set view engine
app.set("view engine","ejs");
// app.set("views", path.resolve(__dirname,"views/ejs")) // ie file / name but we are not using here so 

// load assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/img', express.static(path.resolve(__dirname,"assets/img")))
app.use('/js', express.static(path.resolve(__dirname,"assets/js")))


// all the routers in router.js file inside routes folder 
// load routers
app.use('/', require('./server/routes/router'))

app.listen(3000, ()=> {console.log(`Server is running on http://localhost:${3000}`)});