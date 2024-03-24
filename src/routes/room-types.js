import express from "express";
import {
  createRoomTypeHandler,
  getRoomTypeHandler,
} from "../controllers/room-type.js";

const router = express.Router();

router.route("/").get(getRoomTypeHandler);
router.route("/").post(createRoomTypeHandler);

export default router;
