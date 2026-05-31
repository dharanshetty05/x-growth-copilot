import { getUserContext } from "../services/context.service.js";
import { buildReplyPrompt } from "../services/prompt.service.js";
import { generateCompletion } from "../services/groq.service.js";

export async function generateReplies(req, res) {
  try {
    const {
      postContent,
      authorBio,
      imageDescription,
      additionalNotes,
    } = req.body;

    if (!postContent) {
      return res.status(400).json({
        error: "Post content is required",
      });
    }

    const context = await getUserContext();

    const prompt = buildReplyPrompt({
      context,
      postContent,
      authorBio,
      imageDescription,
      additionalNotes,
    });

    const result = await generateCompletion(prompt);

    return res.json(JSON.parse(result));
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: error.message,
    });
  }
}