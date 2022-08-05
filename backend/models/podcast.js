const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const podcastSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    narrator: {
        type: String,
        required: true
    },
    // coverImage: {
    //     type: String,
    //     required: true
    // },
    album: {
        type: String,
        required: true
    },
    information: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
    //filepath
    
});

module.exports = mongoose.model('Podcast' , podcastSchema);
