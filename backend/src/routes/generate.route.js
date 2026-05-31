import express from "express";
import { generateReplies } from "../controllers/generate.controller.js";

const router = express.Router();

router.post("/", generateReplies);

export default router;