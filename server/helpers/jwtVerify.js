import jwt from "jsonwebtoken";

const verifyJwt = (token) => {
  try {
    const secret = process.env.JWT_SIGNATURE;
    const userInfo = jwt.verify(token, secret);
    return userInfo;
  } catch (error) {
    return false;
  }
};

export default verifyJwt;
