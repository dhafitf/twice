import mongoose from "mongoose";

const MONGO_URI = `${process.env.MONGO_URI}`;

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable inside .env.local");
}

export const dbConnect = () => mongoose.connect(MONGO_URI);
