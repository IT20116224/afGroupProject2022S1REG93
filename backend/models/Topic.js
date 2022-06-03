const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({

    lname: {
        type: String,
        //required: true
    },

    leaderStudentID: {
        type: String,
        required: true
    },

    topic: {
        type: String,
        required: true
    }

})

//Create Model
const Topic = new mongoose.model("Topic", topicSchema);

module.exports = Topic; 