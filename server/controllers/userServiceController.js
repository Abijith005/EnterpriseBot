import { token } from "morgan";
import teamModel from "../models/teamModel.js";
import verifyJwt from "../helpers/jwtVerify.js";
import subscriptionModel from "../models/subscriptionModel.js";
import mongoose from "mongoose";

export const getTeams = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const userId = verifyJwt(token).id;
    const subscriptions = await subscriptionModel.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      { $project: { teamId: 1 } },
    ]);
    const subscriptionIds = subscriptions.map((item) => item.teamId.toString());
    let teams = await teamModel.find().lean();
    teams = teams.map((item) => {
      const isSubscribed = subscriptionIds.includes(item._id.toString());
      item.subscribed = isSubscribed;
      return item;
    });

    res.status(200).json({ success: true, messages: "success", teams });
  } catch (error) {
    console.log("Error \n", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const subscribeTeam = async (req, res) => {
  try {
    const { data, teamId } = req.body;
    const fields = [];
    for (const key in data) {
      if (data[key] === true) {
        fields.push(key);
      }
    }
    if (fields.length <= 0) {
      return res.status(400).json({
        success: false,
        message: "At least one field should subscribed",
      });
    }

    const token = req.headers.authorization.split(" ")[1];
    const user_id = verifyJwt(token).id;

    await subscriptionModel.create({
      userId: user_id,
      teamId: teamId,
      subscriptions: fields,
    });
    res
      .status(200)
      .json({ success: true, message: "Subscribed team successfully" });
  } catch (error) {
    console.log("Error \n", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
