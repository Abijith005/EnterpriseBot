import { createAccessToken } from "../helpers/jwtSign.js";
import verifyJwt from "../helpers/jwtVerify.js";

export const getNewToken = async (req, res) => {
    try {
  
      const { token } = req.params;
      const verify = verifyJwt(token);
      if (verify) {
        const { id, email, role } = verify;
        const newAccessToken = createAccessToken({ id, email, role });
        res
          .status(200)
          .json({ success: true, message: "New access token issued" ,accessToken:newAccessToken});
      } else {
        res
          .status(401)
          .json({ success: false, message: "Unauthorized please login again" });
      }
    } catch (error) {
      console.log("Error \n", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  };