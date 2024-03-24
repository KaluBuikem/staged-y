import mongoose from "mongoose";

const roomSchema = mongoose.Schema(
  {
    name: String,
    roomType: String,
    price: Number,
  },
  { timestamp: true }
);

export default mongoose.model("roomSchema", roomSchema);
