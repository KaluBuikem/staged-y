import { createRoom, createRoomType, createUser } from "../schemas/index.js";

const schemas = {
  "/api/v1/rooms": createRoom,
  "/api/v1/users": createUser,
  "/api/v1/rooms-types": createRoomType,
};

export const validator = (req, res, next) => {
  const path = req.path;
  const pathSchema = schemas[path];
  const validData = pathSchema.validate(req.body);
  console.log(validData);

  if (validData.error) {
    res.status(403).json({
      code: "invalid_data_passed",
      message: validData.error,
    });
    return;
  }
  next();
};
