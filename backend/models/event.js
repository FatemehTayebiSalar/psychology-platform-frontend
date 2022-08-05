const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    information: {
        type: String,
        required: true
    },
    organizer: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
     // coverImage: {
    //     type: String,
    //     required: true
    // },
    

    
});

module.exports = mongoose.model('Event' , eventSchema);
