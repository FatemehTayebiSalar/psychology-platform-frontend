const Event = require('../../models/event');
// const User = require('../../models/user');
//const Podcast = require('../../models/podcast');
const { dateToString } = require('../../helpers/date');

const events = async eventIds => {
    try {
        const events = await Event.find({_id: {$in: eventIds}})
        return events.map(event => {
           return transformEvent(event);
        });
    }catch (err) {
        throw err;
    };
}

const singleEvent = async eventId =>{
    try{
        const event = await Event.findById(eventId);
        return transformEvent(event);
    } catch (err){
        throw err;
    }
};

// const user = async userId => {
//     try{
//     const user = await User.findById(userId)
//         return {
//             ...user._doc,
//             _id: user._id,
//             createdEvents: events.bind(this,user._doc.createdEvents)
//         };
//     }catch (err){
//         throw err;
//     }
// };


const transformEvent = event => {
    return {
        ...event._doc,
        _id: event.id,
        date: dateToString(event._doc.date)
    };
};

const transformPodcast = podcast => {
    return {
        ...podcast._doc,
        _id: podcast.id,
    };
};

const transformVideo = video => {
    return {
        ...video._doc,
        _id: video.id,
    };
};

const transformPsychologist = psychologist => {
    return {
        ...psychologist._doc,
        _id: psychologist.id,
    };
};


// const transformBooking = booking => {
//     return { 
//         ...booking._doc,
//         _id: booking.id ,
//         user: user.bind(this,booking._doc.user),
//         event: singleEvent.bind(this,booking._doc.event),
//         createdAt: dateToString(booking._doc.createdAt),
//         updatedAt: dateToString(booking._doc.updatedAt)
//     };
// };



// exports.user = user;
// exports.events = events;
// exports.singleEvent = singleEvent;

// exports.transformBooking = transformBooking;
exports.transformEvent = transformEvent;
exports.transformPodcast = transformPodcast;
exports.transformVideo = transformVideo;
exports.transformPsychologist = transformPsychologist;
