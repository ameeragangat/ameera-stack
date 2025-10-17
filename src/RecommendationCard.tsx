interface RecommendationCardProps {
  energy: string;
  duration: number;
}

export default function RecommendationCard({
  energy,
  duration,
}: RecommendationCardProps) {
  // TODO: Replace with real Youtube suggestions based on energy level
  const recommendations: Record<string, { title: string; link: string }> = {
    low: {
      title: "15-Min Gentle Stretch & Mobility",
      link: "https://www.youtube.com/watch?v=qHJZG7H7R28",
    },
    medium: {
      title: "20-Min Pilates Power Flow",
      link: "https://www.youtube.com/watch?v=5cQmz3MCYIY",
    },
    high: {
      title: "25-Min HIIT Full Body Workout",
      link: "https://www.youtube.com/watch?v=ml6cT4AZdqI",
    },
  };

  const video = recommendations[energy];
  return (
    <div className="mt-6 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg text-center">
      <h3 className="text-lg font-semibold text-indigo-600 mb-2">
        Today’s Recommendation
      </h3>

      <p className="text-gray-700 mb-3">
        Since you have <span className="font-medium">{energy}</span> energy and
        about <span className="font-medium">{duration}</span> minutes, you could
        try:
      </p>

      <a
        href={video.link}
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition"
      >
        {video.title}
      </a>
    </div>
  );
}
