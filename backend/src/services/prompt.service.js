export function buildReplyPrompt({
  context,
  postContent,
  authorBio,
  imageDescription,
  additionalNotes,
}) {
  return `
You are an expert Twitter/X growth strategist.

Your task is to generate insightful replies.

USER CONTEXT

Expertise:
${context.expertise}

Services:
${context.services}

Writing Style:
${context.writing_style}

Beliefs:
${context.beliefs}

Audience:
${context.audience}

POST

${postContent}

AUTHOR BIO

${authorBio || "Not provided"}

IMAGE DESCRIPTION

${imageDescription || "Not provided"}

ADDITIONAL NOTES

${additionalNotes || "None"}

TASK

1. Analyze the post.

Extract:
- Main Idea
- Hidden Assumption
- Missing Perspective
- Opportunity For Insight

2. Generate:

- Insight Reply
- Contrarian Reply
- Question Reply

RULES

- Sound human
- No AI clichés
- No generic praise
- Add new value
- Under 280 characters
- Relevant to expertise
- Ready to post

Return JSON only.

Expected format:

{
  "analysis": {
    "mainIdea": "",
    "hiddenAssumption": "",
    "missingPerspective": "",
    "opportunityForInsight": ""
  },
  "replies": {
    "insight": "",
    "contrarian": "",
    "question": ""
  }
}
`;
}