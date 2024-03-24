import roomTypeSchema from "../models/roomTypeModel.js";

export const createRoomTypeHandler = async (req, res) => {
  const { name } = req.body;

  const result = await roomTypeSchema.create({
    name,
  });

  res.status(200).json({
    code: "success",
    data: result,
  });
};

export const getRoomTypeHandler = async (req, res) => {
  const result = await roomTypeSchema.find();

  res.status(200).json({
    code: "success",
    data: result,
  });
};
