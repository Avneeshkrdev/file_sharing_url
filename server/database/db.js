import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
// Avneesh
const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    const MONGO_URI = `mongodb+srv://avneeshkrdev:H9Y3OurjeR0OMgwn@file-sharing.q4art.mongodb.net/`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;