import TeamPulseForm from "./TeamPulseForm";
import TeamResults from "./TeamResults";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 p-4">
      <h1 className="text-4xl font-extrabold text-white mb-4 drop-shadow-md mt-10">
        Team Pulse Check
      </h1>
      <p className="text-white/90 text-center mb-8 max-w-md">
        Share how you're feeling today and help the{" "}
        <strong>Software team</strong> stay connected. Your response is{" "}
        <strong>anonymous</strong>.
      </p>
      <TeamPulseForm />
      <TeamResults />
    </div>
  );
}
