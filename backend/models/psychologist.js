const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//پنل کاربری یا ارسال ایمیل برای اطلاع روانشناس از نوبت ها
const psychologistSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }
    //visit-list
    
});

module.exports = mongoose.model('User' , userSchema);
