import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("There is error in connecting to the database: ", err);
    process.exit(1);
  }
};

export default connectDB;