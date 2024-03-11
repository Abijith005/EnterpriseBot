import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
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


const adminModel=mongoose.model('admin',schema)

export default adminModel