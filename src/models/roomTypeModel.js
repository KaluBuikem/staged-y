import mongoose from "mongoose";

const roomTypeSchema = mongoose.Schema(
  {
    name: String,
  },
  { timestamp: true }
);

export default mongoose.model("room-type", roomTypeSchema);
