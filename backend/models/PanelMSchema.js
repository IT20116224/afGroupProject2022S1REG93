const mongoose = require("mongoose");

const PanelMSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
        lastName:{
            type:String,
            required: true
        },
        email:{
            type:String,
            required: true,
            unique: true
        },
        nic: {
            type:String,
            required: true,
            unique: true            
        },
        address: {
            type:String
        },
        phone: {
            type:Number
        },

        edu:{
            type:String
        }
});

const panelmembers = new mongoose.model("panelmembers", PanelMSchema );

module.exports = panelmembers;

