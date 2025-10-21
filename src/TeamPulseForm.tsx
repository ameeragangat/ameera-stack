import { useState } from "react";
import TeamInsightCard from "./TeamInsightCard";

export default function TeamPulseForm() {
  const [energy, setEnergy] = useState("medium");
  const [mood, setMood] = useState("motivated");
  const [duration, setDuration] = useState("");
  const [comment, setComment] = useState("");
  const [result, setResult] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(true);
  };

  if (result) {
    return (
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg w-80 sm:w-96 text-center">
        <h2 className="text-xl font-bold text-indigo-600 mb-2">
          Thanks for contributing!
        </h2>
        <p className="text-gray-700 mb-4">
          Your check-in helps us understand the Software team’s rhythm today.
        </p>
        <TeamInsightCard energy={energy} mood={mood} duration={duration} />
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg w-80 sm:w-96">
      <h2 className="text-xl font-bold text-indigo-600 mb-4 text-center">
        Daily Team Check-In
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Energy Level</span>
          <select
            value={energy}
            onChange={(e) => setEnergy(e.target.value)}
            className="mt-1 w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-400"
            required
          >
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </label>

        <label className="block">
          <span className="text-gray-700">Mood</span>
          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="mt-1 w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-400"
            required
          >
            <option value="">Select</option>
            <option value="focused">Focused</option>
            <option value="motivated">Motivated</option>
            <option value="stressed">Stressed</option>
            <option value="tired">Tired</option>
            <option value="balanced">Balanced</option>
          </select>
        </label>

        <label className="block">
          <span className="text-gray-700">Focused Work Duration (min)</span>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="mt-1 w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-400"
            required
          >
            <option value="">Select</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
            <option value="60">60</option>
          </select>
        </label>

        <label className="block">
          <span className="text-gray-700">Optional comment</span>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Anything you’d like to share with the team?"
            className="mt-1 w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-400 resize-none"
            rows={2}
          />
        </label>

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-md transition"
        >
          Submit Anonymously
        </button>
      </form>
    </div>
  );
}
