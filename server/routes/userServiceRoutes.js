import express from "express";
import { getTeams, subscribeTeam } from "../controllers/userServiceController.js";

const router = express.Router();

router.get('/getTeams',getTeams)

router.post('/subscribeTeam',subscribeTeam)

export default router
