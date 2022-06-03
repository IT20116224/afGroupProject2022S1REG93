const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Student Schema or Document Structure
const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    studentID: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    tokens: [
        {
            token : {
                type: String,
                required: true
            }
        }
    ]
})

//Hashing Password to Secure
studentSchema.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password = bcryptjs.hashSync(this.password, 10);
    }
    next();
})


// Generate Tokens to Verify Student
studentSchema.methods.generateToken = async function() {
    try{
        let generatedToken = jwt.sign({_id : this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token : generatedToken});
        await this.save();
        return generatedToken;
    } catch (error) {
        console.log(error)
    }
}


//Create Model
const Students = new mongoose.model('Student', studentSchema);

module.exports = Students; 

