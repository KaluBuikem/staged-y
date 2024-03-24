import jwt from "jsonwebtoken";

const actions = {
  guest: ["GET"],
  admin: ["POST", "DELETE", "GET", "PATCH"],
};

export const authorization = async (req, res, next) => {
  const { accessToken } = req.cookies;
  const method = req.method;
  const { role } = jwt.decode(accessToken);
  const userActions = actions[role];
  const verifyAction = userActions.findIndex((value) => value === method);
  if (verifyAction === -1) {
    res.status(402).json({
      code: "unauthorized",
      message: "Method not allowed for account",
    });
    return;
  }
  next();
};
