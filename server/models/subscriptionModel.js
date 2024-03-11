import mongoose from "mongoose";

const validSubscriptions = ["coach", "captain", "players"];

const schema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "team",
  },
  subscriptions: [{
    type: String,
    enum: validSubscriptions, 
    required: true,
  }],
});

export default mongoose.model("Subscription", schema);
