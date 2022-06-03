// Import all dependencies
const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
require("dotenv").config();


const app = express();


//backend port
const PORT = process.env.PORT;

//Require Model
const Students = require('./models/Student');
const Message = require('./models/Message');
const authenticate = require('./middleware/authenticate');
const Topic = require('./models/Topic');
const Supervisor = require('./models/Supervisor');
const CoSupervisor = require('./models/CoSupervisor');

//These Methods is Used to get data and cookies from frontend
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Hello World");
})


//mongodb url
const URL = process.env.MONGODB_URL;


//create database connection
mongoose.connect(URL)
    .then(() => {
        console.log("Connected to the database");
    }).catch((err) => console.error(err));



//Register Student
app.post('/register', async (req, res) => {
    try {

        //Get body or Data
        const name = req.body.name;
        const studentID = req.body.studentID;
        const email = req.body.email;
        const password = req.body.password;

        const createStudent = new Students({
            name: name,
            studentID: studentID,
            email: email,
            password: password
        });

        //Save MethoD is Used to Create Student or Insert Student
        const created = await createStudent.save();
        console.log(created);
        res.status(200).send("Registered Successfully!");

    } catch (error) {
        res.status(400).send(error);
    }
})


//Login Student
app.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        //Find Student if Exist
        const student = await Students.findOne({ email: email });
        if (student) {

            //Verify Password
            const isMatch = await bcryptjs.compare(password, student.password);

            if (isMatch) {

                //Generate Token which is define in Student Schema
                const token = await student.generateToken();
                res.cookie("jwt", token, {

                    //Expire Token in 24 Hours
                    expires: new Date(Date.now() + 86400000),
                    httpOnly: true
                })
                res.status(200).send("LoggedIn Succesfully!");
            } else {
                res.status(400).send("Invalid Credentials");
            }

        } else {
            res.status(400).send("Invalid Credentials");
        }

    } catch (error) {
        res.status(400).send(error);
    }
})



//Message
app.post('/message', async (req, res) => {
    try {

        //Get body or Data
        const name = req.body.name;
        const email = req.body.email;
        const message= req.body.message;
        
        const sendMsg = new Message({
            name: name,
            email: email,
            message: message           
        });

        //Save MethoD is Used to Create Student or Insert Student
        const created = await sendMsg.save();
        console.log(created);
        res.status(200).send("Message Sent Successfully!");

    } catch (error) {
        res.status(400).send(error);
    }
})



//Logout Page
app.get('/logout' , (req, res) => {
    res.clearCookie("jwt", {path : '/' })
    res.status(200).send("Student Logged Out")
})


//Authentication
app.get('/auth', authenticate, (req, res) => {

})


//Topic Registration
app.post('/topic', async (req, res) => {
    try {

        //Get body or Data
        const lname = req.body.lname;
        const leaderStudentID = req.body.leaderStudentID;
        const topic = req.body.topic;
        
        const saveTopic = new Topic({
            lname: lname,
            leaderStudentID : leaderStudentID,
            topic: topic          
        });

        //Save MethoD is Used to Create Topic or Insert Topic
        const created = await saveTopic.save();
        console.log(created);
        res.status(200).send("Topic Registered Successfully!");

    } catch (error) {
        res.status(400).send(error);
    }
})




//Request Supervisor
app.post('/supervisor', async (req, res) => {
    try {

        //Get body or Data
        const leaderStudentID = req.body.leaderStudentID;
        const groupID = req.body.groupID;
        const supervisorName = req.body.supervisorName;
        
        const saveSupervisor = new Supervisor({
            leaderStudentID : leaderStudentID,
            groupID: groupID,
            supervisorName: supervisorName          
        });

        //Save MethoD is Used to Create Supervisor or Insert Supervisor
        const created = await saveSupervisor.save();
        console.log(created);
        res.status(200).send("Request Sent Successfully!");

    } catch (error) {
        res.status(400).send(error);
    }
})


//Request Co-Supervisor
app.post('/cosupervisor', async (req, res) => {
    try {

        //Get body or Data
        const leaderStudentID = req.body.leaderStudentID;
        const groupID = req.body.groupID;
        const cosupervisorName = req.body.cosupervisorName;
        
        const saveCoSupervisor = new CoSupervisor({
            leaderStudentID : leaderStudentID,
            groupID: groupID,
            cosupervisorName: cosupervisorName          
        });

        //Save MethoD is Used to Create Supervisor or Insert Supervisor
        const created = await saveCoSupervisor.save();
        console.log(created);
        res.status(200).send("Request Sent Successfully!");

    } catch (error) {
        res.status(400).send(error);
    }
})





//Run server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})


 

