import verifyJwt from "../helpers/jwtVerify.js";

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verify = verifyJwt(token);
    if (verify&&verify.role=='admin') {
      next();
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

export default authMiddleware;
