import { getSubsribedUsers } from "../helpers/soketHelper.js";

function socketConnect(io, activeUsers) {
  console.log("hello");
  io.on("connection", (socket) => {
    socket.on("join", (newUserId) => {
      try {
        console.log("new user joined");
        if (!activeUsers.has(newUserId)) {
          activeUsers.set(newUserId, {
            user_id: newUserId,
            socketId: socket.id,
          });
        }
      } catch (error) {
        console.log("Socket error", error);
      }
    });

    socket.on("offline", () => {
      try {
        console.log("logout");
        activeUsers.forEach((value, key) => {
          if (value.socketId === socket.id) {
            activeUsers.delete(key);
          }
        });
      } catch (error) {
        console.log("Socket error", error);
      }
    });

    socket.on("updateData", async (data) => {
      try {
        const { teamId, name, field } = data;
        const { team, subscribers } = await getSubsribedUsers(teamId, field);
        const socketIds = [];
        subscribers.forEach((item) => {
          if (activeUsers.has(item)) {
            socketIds.push(activeUsers.get(item).socketId);
          }
        });
        let message;
        if (field === "player") {
          message = `${team} has been added a ${field} new ${field} is ${name}.`;
        } else {
          message = `${team} has been changed ${field} new ${field} is ${name}.`;
        }

        socketIds.forEach((socketId) => {
          io.sockets.sockets.get(socketId)?.join("commonRoom");
        });

        io.to("commonRoom").emit("dataUpdated", {
          message: message,
          teamId,
          name,
          field,
        });

        io.of("/").adapter.rooms.delete("commonRoom");
      } catch (error) {
        console.log("Socket error", error);
      }
    });
  });
}

export default socketConnect;
