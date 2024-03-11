import mongoose from "mongoose";
import admin from "../models/adminModel.js";
import hashedPassword from "../helpers/hashPassword.js";

const mongoUrl = process.env.MONGO_URL;
const database = process.env.DB_NAME;

const dbConnect = async () => {
  try {
    await mongoose.connect(`${mongoUrl}/${database}`);

    console.log("DB connected successfully");

    const existingAdmin = await admin.findOne({ email: "admin123@gmail.com" });

    if (!existingAdmin) {
      const password = await hashedPassword("admin123");
      const defaultAdmin = new admin({
        email: "admin123@gmail.com",
        password: password,
      });

      await defaultAdmin.save();
      console.log("Default admin inserted successfully.");
    }

  } catch (err) {
    console.error("Error:", err);
    mongoose.connection.close();
  }
};

export default dbConnect;
 