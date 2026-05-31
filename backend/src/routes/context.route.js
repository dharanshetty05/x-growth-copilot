import express from "express";
import { getUserContext } from "../services/context.service.js";

const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const context = await getUserContext();

    res.json(context);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

export default router;