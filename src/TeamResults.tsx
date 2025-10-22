import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface TeamResultsData {
  avgEnergy: string;
  topMood: string;
  avgFocusCapacity: number;
  moodDistribution: { mood: string; count: number }[];
}

export default function TeamResults() {
  const [data, setData] = useState<TeamResultsData | null>(null);

  useEffect(() => {
    // TODO: replace this later with real API call
    const simulatedData: TeamResultsData = {
      avgEnergy: "moderate",
      topMood: "motivated",
      avgFocusCapacity: 42,
      moodDistribution: [
        { mood: "motivated", count: 5 },
        { mood: "focused", count: 3 },
        { mood: "tired", count: 2 },
        { mood: "stressed", count: 1 },
      ],
    };

    // Simulate slight delay to mimic data fetch
    setTimeout(() => setData(simulatedData), 800);
  }, []);

  if (!data)
    return (
      <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md mt-8 text-center w-80 sm:w-96">
        <p className="text-gray-500 animate-pulse">Loading team stats...</p>
      </div>
    );

  return (
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg mt-8 w-80 sm:w-96 text-center">
      <h2 className="text-xl font-bold text-indigo-600 mb-3">
        📊 Software Team Insights
      </h2>

      <p className="text-gray-700 mb-2">
        <strong>Average Energy:</strong> {data.avgEnergy}
      </p>

      <p className="text-gray-700 mb-2">
        <strong>Most Common Mood:</strong> {data.topMood}
      </p>

      <p className="text-gray-700 mb-4">
        <strong>Avg Focus Capacity:</strong> {data.avgFocusCapacity} min
      </p>

      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">
          Mood Distribution
        </h3>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={data.moodDistribution}>
            <XAxis dataKey="mood" tick={{ fontSize: 12 }} />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="count" fill="#6366F1" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
