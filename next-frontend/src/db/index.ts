import mongoose from "mongoose";

const POSTSchema = new mongoose.Schema({
  date: String,
  id: String,
  vote: Number,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "COMMENT" }],
});

const COMMENTSchema = new mongoose.Schema({
  name: String,
  comment: String,
  vote: Number,
  date: String
})

// const CARDSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   date: String
// })

export const POST =  mongoose.models.POST || mongoose.model("POST", POSTSchema);
export const COMMENT =  mongoose.models.COMMENT || mongoose.model("COMMENT", COMMENTSchema);
// export const CARD =  mongoose.models.CARD || mongoose.model("CARD", CARDSchema);
