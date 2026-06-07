import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://asifmohamed491_db_user:Asif2007._@users.qtkrev3.mongodb.net/?appName=Users')
        .then(() => console.log('DB CONNECTED'));
}