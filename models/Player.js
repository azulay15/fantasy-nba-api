const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Player', PlayerSchema )