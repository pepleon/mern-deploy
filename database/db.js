import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = () => {
    const DB_URI =`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@gmailclone-shard-00-00.fxnrj.mongodb.net:27017,gmailclone-shard-00-01.fxnrj.mongodb.net:27017,gmailclone-shard-00-02.fxnrj.mongodb.net:27017/?ssl=true&replicaSet=atlas-k0fpec-shard-0&authSource=admin&retryWrites=true&w=majority&appName=gmailclone`;
  try{
    mongoose.connect(DB_URI);
    console.log('Database connected successfully');
  }
  catch(error) {
    console.log('Error while connecting with the database ',error.message);
  }


}



export default Connection;