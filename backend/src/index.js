import express from "express";
import dotenv from "dotenv";
import conceptController from "./controllers/conceptController.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/", conceptController);

app.listen(3000, () => {
  console.log("Listening port 3000");
});
