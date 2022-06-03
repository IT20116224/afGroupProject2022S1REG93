const Students = require('../models/Student');
const jwt = require('jsonwebtoken');

const authenticate = async (req, res) => {

    try{

        //Get the Cookies
        const token = req.cookies.jwt;

        if(!token) {
            res.status(401).send("No token")
        }else {

            const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
            const rootStudent = await Students.findOne ({_id : verifyToken._id, "tokens.token" : token });

            if(!rootStudent) {
                res.status(401).send("User Not Found")
            }else{
                res.status(200).send("Authorized User")
            }
        }

        next()

    }catch (error) {
        res.status(401).send("Error")
        console.log(error)
    }
}

module.exports = authenticate;