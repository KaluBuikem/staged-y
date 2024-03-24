import express from "express";
import { createUser } from "../controllers/user.js";

const router = express.Router();

// router.route("/").get(getRoomHandler);
router.route("/login").post(createUser);

export default router;
