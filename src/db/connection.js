const mongoose = require('mongoose');
const config = require("../config")

const connectDB = () => {
    return new Promise( async (res, rej) => {

        try{
    
            const con = await mongoose.connect(config.DB[process.env.ENV]);
            console.log(`MongoDB connected : ${con.connection.host}`);
            res();
    
        }catch(e){
    
            console.log(e);
            process.exit(1);
    
        }
        
    });
}

module.exports = connectDB;
