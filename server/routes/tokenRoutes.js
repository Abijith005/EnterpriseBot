import express from "express";
import { getNewToken } from "../controllers/tokenController.js";

const router = express.Router();

router.get("/accessToken/:token", getNewToken);

export default router;
