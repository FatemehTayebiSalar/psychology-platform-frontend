const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },

    joinedEvents:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }
    ],

    joinedPodcasts:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Podcast'
        }
    ],

    joinedVideos:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Video'
        }
    ]
    
});

module.exports = mongoose.model('User' , userSchema);
