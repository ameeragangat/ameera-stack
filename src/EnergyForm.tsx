import { useState } from "react";
import RecommendationCard from "./RecommendationCard";

export default function EnergyForm() {
  const [energy, setEnergy] = useState("medium");
  const [mood, setMood] = useState("motivated");
  const [duration, setDuration] = useState(30);
  const [result, setResult] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(true);
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg w-80 sm:w-96">
      <h2 className="text-xl font-bold text-indigo-600 mb-4 text-center">
        Daily Energy Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Energy Level</span>
          <select
            value={energy}
            onChange={(e) => setEnergy(e.target.value)}
            className="mt-1 w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-400"
          >
            <option>low</option>
            <option>medium</option>
            <option>high</option>
          </select>
        </label>

        <label className="block">
          <span className="text-gray-700">Mood</span>
          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="mt-1 w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-400"
          >
            <option value="motivated">Motivated</option>
            <option value="tired">Tired</option>
            <option value="stressed">Stressed</option>
            <option value="relaxed">Relaxed</option>
            <option value="energized">Energized</option>
            <option value="calm">Calm</option>
          </select>
        </label>

        <label className="block">
          <span className="text-gray-700">Workout Duration (min)</span>
          <select
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            className="mt-1 w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-400"
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="45">45</option>
            <option value="60">60</option>
          </select>
        </label>

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-md transition"
        >
          Get Recommendation
        </button>
      </form>
      {result && <RecommendationCard energy={energy} duration={duration} />}
    </div>
  );
}
