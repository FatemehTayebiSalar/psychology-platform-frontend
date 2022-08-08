const { transformPsychologist } = require('./merge');
const Psychologist = require('../../models/psychologist');
// const User = require('../../models/user')



module.exports = {
    psychologists: async () => {
        try{
        const psychologists = await Psychologist.find()
            return psychologists.map(psychologist =>{
                return transformPsychologist(psychologist);
            });
        } catch (err){
            throw err;
        }
    },
    createPsychologist: async(args) => {
        // if(!req.isAuth) {
        //     throw new Error('Unauthenticated!');
        // }
        const psychologist = new Psychologist({
            name: args.psychologistInput.name,
            degree: args.psychologistInput.degree,
            city: args.psychologistInput.city,
            address: args.psychologistInput.address,
            phoneNumber: args.psychologistInput.phoneNumber,
            visitAmount: +args.psychologistInput.visitAmount,
        });
        try{
        const result = await psychologist
          .save()
            const createdPsychologist = transformPsychologist(result); 
            return createdPsychologist;
        } catch (err){
            console.log(err);
            throw err;
        }
        
    }
};