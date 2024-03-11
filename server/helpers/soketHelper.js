import subscriptionModel from "../models/subscriptionModel.js";

export const getSubsribedUsers = async (teamId, field) => {
  try {
    const users = await subscriptionModel
      .find({
        $and: [{ teamId: teamId }, { subscriptions: field }],
      })
      .populate("teamId")
      .lean();
    let team;
    const subscribers = users.map((item) => {
      team = item.teamId?.name;
      return item.userId.toString();
    });
    return { team: team, subscribers: subscribers };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
