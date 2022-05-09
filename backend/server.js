const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();

const app = express();
app.use(cors());


//backend port
const PORT = process.env.PORT || 8070;
//mongodb url
const URL = process.env.MONGODB_URL;

//run the server
app.listen(PORT, () => console.log(`server is running on ${PORT}`));

//create database connection
mongoose.connect(URL)
    .then(() => console.log("connected to the database"))
    .catch((err) => console.error(err));