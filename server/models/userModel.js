import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, ["name required"]],
    },
    email: {
      type: String,
      required: [true, ["email required"]],
    },
    password: {
      type: String,
      required: [true, ["password required"]],
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", schema);

export default userModel;
