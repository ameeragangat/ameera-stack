interface TeamInsightCardProps {
  energy: string;
  mood: string;
  duration: string;
}

export default function TeamInsightCard({
  energy,
  mood,
  duration,
}: TeamInsightCardProps) {
  const messages: Record<string, string> = {
    low: "Energy seems low today — might be a good time for lighter tasks or collaborative sessions",
    moderate: "The team feels balanced — perfect for steady sprint progress",
    high: "High energy day! Tackle your most challenging tickets",
  };

  return (
    <div className="mt-6 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg text-center">
      <h3 className="text-lg font-semibold text-indigo-600 mb-2">
        Today’s Pulse Insight
      </h3>

      <p className="text-gray-700 mb-2">
        {messages[energy] ||
          "We’ll have clearer insights as more people submit!"}
      </p>

      <p className="text-gray-600 text-sm">
        Mood: <span className="font-medium">{mood}</span> · Focus Duration:{" "}
        <span className="font-medium">{duration}</span> min
      </p>
    </div>
  );
}
