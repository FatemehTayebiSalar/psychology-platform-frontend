const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    coach: {
        type: String,
        required: true
    },
   //videopath
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

    
});

module.exports = mongoose.model('Video' , videoSchema);
