"use client";

import { useState } from "react";
import { generateReplies } from "@/lib/api";
import ReplyCard from "@/components/ReplyCard";

export default function Home() {
  const [postContent, setPostContent] = useState("");
  const [authorBio, setAuthorBio] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState<any>(null);

  async function handleGenerate() {
    try {
      setLoading(true);

      const data = await generateReplies({
        postContent,
        authorBio,
        imageDescription,
        additionalNotes,
      });

      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Failed to generate replies");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-6">

        <h1 className="text-4xl font-bold">
          X Growth Copilot
        </h1>

        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="Paste X post..."
          className="w-full h-40 p-4 rounded-lg bg-zinc-900 border border-zinc-800"
        />

        <textarea
          value={authorBio}
          onChange={(e) => setAuthorBio(e.target.value)}
          placeholder="Author bio..."
          className="w-full h-24 p-4 rounded-lg bg-zinc-900 border border-zinc-800"
        />

        <textarea
          value={imageDescription}
          onChange={(e) => setImageDescription(e.target.value)}
          placeholder="Image description..."
          className="w-full h-24 p-4 rounded-lg bg-zinc-900 border border-zinc-800"
        />

        <textarea
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
          placeholder="Additional notes..."
          className="w-full h-24 p-4 rounded-lg bg-zinc-900 border border-zinc-800"
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full py-4 rounded-lg bg-white text-black font-semibold"
        >
          {loading ? "Generating..." : "Generate Replies"}
        </button>

        {result && (
          <div className="space-y-4">

            <ReplyCard
              title="Insight Reply"
              content={result.replies.insight}
            />

            <ReplyCard
              title="Contrarian Reply"
              content={result.replies.contrarian}
            />

            <ReplyCard
              title="Question Reply"
              content={result.replies.question}
            />

          </div>
        )}
      </div>
    </main>
  );
}