type ReplyCardProps = {
  title: string;
  content: string;
};

export default function ReplyCard({
  title,
  content,
}: ReplyCardProps) {
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(content);
  };

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">{title}</h3>

        <button
          onClick={copyToClipboard}
          className="text-sm px-3 py-1 bg-white text-black rounded"
        >
          Copy
        </button>
      </div>

      <p className="text-zinc-300 whitespace-pre-wrap">
        {content}
      </p>
    </div>
  );
}