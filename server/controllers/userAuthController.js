import { credentialsValidation } from "../helpers/inputValidations.js";
import { createAccessToken, createRefreshToken } from "../helpers/jwtSign.js";
import verifyJwt from "../helpers/jwtVerify.js";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const valid = credentialsValidation({ name, email, password });
    if (!valid) {
      return res
        .status(400)
        .json({ success: false, message: "Input validation failed" });
    }
    const user=await userModel.find({email:email})
    if (user) {
      return res.status(409).json({ success:false,message: 'User with this email already exists' });
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    userModel.create({ name, email, password: hashedPassword });
    return res
      .status(200)
      .json({ success: true, message: "user registration successfull" });
  } catch (error) {
    console.log("Error \n", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const valid=credentialsValidation({ email, password })
    if (!valid) {
      return res
        .status(400)
        .json({ success: false, message: "Input validation failed" });
    }

    const user = await userModel.findOne({ email: email });

    if (user) {
      const verifyPassword = await bcrypt.compare(password, user.password);
      if (verifyPassword) {
        const refreshToken = createRefreshToken({
          id: user._id,
          email: user.email,
          role: "user",
        });
        const accessToken = createAccessToken({
          id: user._id,
          email: user.email,
          role: "user",
        });
        return res.status(200).json({
          success: true,
          message: "Login successfull",
          accessToken,
          refreshToken,
          _id:user._id
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


