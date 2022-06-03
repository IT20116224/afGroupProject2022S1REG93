const mongoose = require('mongoose');

const supervisorSchema = new mongoose.Schema({

    leaderStudentID: {
        type: String,
        required: true
    },

    groupID: {
        type: String,
        required: true
    },

    supervisorName: {
        type: String,
        required: true
    }

})


//Create Model
const Supervisor = new mongoose.model("Supervisor", supervisorSchema);

module.exports = Supervisor; 