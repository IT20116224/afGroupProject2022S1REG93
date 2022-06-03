const mongoose = require('mongoose');

const cosupervisorSchema = new mongoose.Schema({

    leaderStudentID: {
        type: String,
        required: true
    },

    groupID: {
        type: String,
        required: true
    },

    cosupervisorName: {
        type: String,
        required: true
    }

})


//Create Model
const CoSupervisor = new mongoose.model("CoSupervisor", cosupervisorSchema);

module.exports = CoSupervisor; 