import teamModel from "../models/teamModel.js";

export const addTeam = async (req, res) => {
  try {
    const { name, coach, captain } = req.body;

    if (!name || !coach || !captain) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    await teamModel.create({ name, captain, coach });
    res.status(200).json({ success: true, message: "Team added successfully" });
  } catch (error) {
    console.log("Error \n", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const addPlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    await teamModel.updateOne({ _id: id }, { $push: { players: name } });
    res
      .status(200)
      .json({ success: true, message: "player added successfully" });
  } catch (error) {
    console.log("Error \n", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getTeams = async (req, res) => {
  try {
    const teams = await teamModel.find().lean();
    res.status(200).json({ success: true, teams });
  } catch (error) {
    console.log("Error \n", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const changeCaptian = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    await teamModel.updateOne({ _id: id }, { $set: { captain: name } });
    return res
      .status(200)
      .json({ success: true, message: "Captain changed successfylly" });
  } catch (error) {
    console.log("Error \n", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const changeCoach = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    await teamModel.updateOne({ _id: id }, { $set: { coach: name } });
    return res
      .status(200)
      .json({ success: true, message: "Captain changed successfylly" });
  } catch (error) {
    console.log("Error \n", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
