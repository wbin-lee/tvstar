import ResultCard from "../components/ResultCard";

export default function Result({ character, onRestart }) {
  return (
    <div>
      <ResultCard character={character} onRestart={onRestart} />
    </div>
  );
}
