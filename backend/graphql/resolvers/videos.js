const { transformVideo } = require('./merge');
const Video = require('../../models/video');
// const User = require('../../models/user')



module.exports = {
    videos: async () => {
        try{
        const videos = await Video.find()
            return videos.map(video =>{
                return transformVideo(video);
            });
        } catch (err){
            throw err;
        }
    },
    createVideo: async(args) => {
        // if(!req.isAuth) {
        //     throw new Error('Unauthenticated!');
        // }
        const video = new Video({
            title: args.videoInput.title,
            coach: args.videoInput.coach,
            album: args.videoInput.album,
            //اسکیمای البوم رو درست کن و اینجا آی دی البوم رو بزار و اسم البوم رو از اونجا بگیر
            information: args.videoInput.information,
            price: +args.videoInput.price,
        });
        try{
        const result = await video
          .save()
            const createdVideo = transformVideo(result); 
            return createdVideo;
        } catch (err){
            console.log(err);
            throw err;
        }
        
    }
};