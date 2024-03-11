import { credentialsValidation } from "../helpers/inputValidations.js";
import { createAccessToken, createRefreshToken } from "../helpers/jwtSign.js";
import adminModel from "../models/adminModel.js";
import bcrypt from "bcrypt";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    if (!credentialsValidation({ email, password })) {
      return res
        .status(400)
        .json({ success: false, message: "Input validation failed" });
    }

    const admin = await adminModel.findOne({ email: email });

    if (admin) {
      const verifyPassword = await bcrypt.compare(password, admin.password);
      if (verifyPassword) {
        const refreshToken = createRefreshToken({
          id: admin._id,
          email: admin.email,
          role: "admin",
        });
        const accessToken = createAccessToken({
          id: admin._id,
          email: admin.email,
          role: "admin",
        });
        return res.status(200).json({
          success: true,
          message: "Login successfull",
          accessToken,
          refreshToken,
        });
      } else {
        return res
          .status(401)
          .json({ success: false, message: "Incorrect password" });
      }
    } else {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.log("Error \n", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
