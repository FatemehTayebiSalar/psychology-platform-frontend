const { transformPodcast } = require('./merge');
const Podcast = require('../../models/podcast');
// const User = require('../../models/user')



module.exports = {
    podcasts: async () => {
        try{
        const podcasts = await Podcast.find()
            return podcasts.map(podcast =>{
                return transformPodcast(podcast);
            });
        } catch (err){
            throw err;
        }
    },
    createPodcast: async(args) => {
        // if(!req.isAuth) {
        //     throw new Error('Unauthenticated!');
        // }
        const podcast = new Podcast({
            title: args.podcastInput.title,
            narrator: args.podcastInput.narrator,
            album: args.podcastInput.album,
            //اسکیمای البوم رو درست کن و اینجا آی دی البوم رو بزار و اسم البوم رو از اونجا بگیر
            information: args.podcastInput.information,
            price: +args.podcastInput.price,
        });
        try{
        const result = await podcast
          .save()
            const createdPodcast = transformPodcast(result); 
            return createdPodcast;
        } catch (err){
            console.log(err);
            throw err;
        }
        
    }
};