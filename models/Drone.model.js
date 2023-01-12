const mongoose = require('mongoose')
const { Schema } = mongoose;

const droneSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    propellers: {
        type: Number, 
        required: true
    },
    maxSpeed: {
        type: Number, 
        required: true
    }
});

const Drones = mongoose.model('Drone', droneSchema);
module.exports = Drones;