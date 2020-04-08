const mongoose = require('mongoose');

//connect to mongoDB
const mongouri = 'mongodb+srv://cs411project:abdu@cluster1-z0srl.mongodb.net/test?retryWrites=true&w=majority';

const initiateMongoServer = async() =>{
    try{
        await mongoose.connect(mongouri,{
            useNewUrlParser: true,
            useUnifiedTopology: true 
        });
        console.log("Connected to DataBase!");
    } catch(err){
        console.log(err);
        throw err;
    }
};

module.exports = initiateMongoServer;