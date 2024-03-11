import jwt from "jsonwebtoken";
export const createRefreshToken = (payload) => {
  try {
    const secret = process.env.JWT_SIGNATURE;
    const token = jwt.sign(payload, secret, {
      algorithm: "HS256",
      expiresIn: "1day",
    });

    return token;
  } catch (error) {
    console.log("Error \n", error);
    throw new Error("jwt sign error");
  }
};

export const createAccessToken = (payload) => {
  try {
    const secret = process.env.JWT_SIGNATURE;
    const token = jwt.sign(payload, secret, {
      algorithm: "HS256",
      expiresIn: "30m",
    });
    return token;
  } catch (error) {
    console.log("Error \n", error);
    throw new Error("jwt sign error");
  }
};
