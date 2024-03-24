import dotenv from "dotenv";
import express from "express";
import { authenticate } from "./src/middlewares/authenticate.js";
import { authorization } from "./src/middlewares/authorization.js";
import { validator } from "./src/middlewares/validator.js";
import roomTypesRouter from "./src/routes/room-types.js";
import roomRouter from "./src/routes/rooms.js";
import userRouter from "./src/routes/user.js";

// connect();

dotenv.config();
const app = express();
app.use(express.json());
app.use(validator);

app.use("/api/v1/users", userRouter);
// app.use(authenticate);
// app.use(authorization);
app.use("/api/v1/rooms", roomRouter);
app.use("/api/v1/rooms-types", roomTypesRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "This Route Not Found" });
});

app.listen(3000, () => {
  console.log("Server is running  at http://localhost:3000");
});
