export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          X Growth Copilot
        </h1>

        <div className="space-y-4">
          <textarea
            placeholder="Paste X post..."
            className="w-full h-40 p-4 rounded-lg bg-zinc-900 border border-zinc-800"
          />

          <textarea
            placeholder="Author bio..."
            className="w-full h-24 p-4 rounded-lg bg-zinc-900 border border-zinc-800"
          />

          <textarea
            placeholder="Image description..."
            className="w-full h-24 p-4 rounded-lg bg-zinc-900 border border-zinc-800"
          />

          <textarea
            placeholder="Additional notes..."
            className="w-full h-24 p-4 rounded-lg bg-zinc-900 border border-zinc-800"
          />

          <button
            className="w-full bg-white text-black py-4 rounded-lg font-semibold"
          >
            Generate Replies
          </button>
        </div>
      </div>
    </main>
  );
}