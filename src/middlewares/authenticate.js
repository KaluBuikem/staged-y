import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const authenticate = async (req, res, next) => {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    res.status(400).json({
      code: "unauthenticated",
      message: "pls sign in",
    });
    return;
  }

  const { email } = jwt.decode(accessToken);
  const checkUser = await userModel.findOne({ email: email });
  if (!checkUser) {
    res.status(400).json({
      code: "unauthenticated",
      message: "pls sign in",
    });
  }

  next();
};
