import mongoose from "mongoose";

export async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
  } catch (e) {
    throw new Error("Could not connect to mongoDB using mongoose.");
  }
}
