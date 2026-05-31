import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import contextRoute from "./routes/context.route.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    message: "X Growth Copilot API Running"
  });
});

app.use("/api/context", contextRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});