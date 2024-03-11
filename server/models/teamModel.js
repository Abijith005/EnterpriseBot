import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, ["name is required"]],
  },
  players: {
    type: Array,
    default: [],
  },
  captain: {
    type: String,
    default: null,
  },
  coach: {
    type: String,
    default: null,
  },
});

const teamModel = mongoose.model("team", schema);

export default teamModel;
