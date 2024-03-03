import mongoose from "mongoose";

export default async function dbConnect() {
  // check if we have a connection to the database or if it's currently
  // connecting or disconnecting (readyState 1, 2 and 3)
  if (mongoose.connection.readyState >= 1) {
    return;
  }
 await mongoose.connect("mongodb+srv://rahuldora21:!j8HNjW282WHLxT@test.rozga8j.mongodb.net/WhistleBlower");
 console.log("connected to database");
}