import { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import seriesData from "../data/sampleSeries.json";

function calculateResult(answers, characters) {
  // Sum all trait scores from answers
  const totalTraits = {};
  for (const traitMap of answers) {
    for (const [trait, value] of Object.entries(traitMap)) {
      totalTraits[trait] = (totalTraits[trait] || 0) + value;
    }
  }

  // Find best matching character by cosine-like distance
  let bestMatch = characters[0];
  let bestScore = -Infinity;

  for (const char of characters) {
    let score = 0;
    for (const [trait, value] of Object.entries(char.traits)) {
      score += (totalTraits[trait] || 0) * value;
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = char;
    }
  }

  return bestMatch;
}

export default function Quiz({ seriesId, onFinish }) {
  const data = seriesData[seriesId];
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  if (!data) return <p className="text-center text-red-400">Series not found.</p>;

  const { questions, characters } = data;

  function handleAnswer(traits) {
    const next = [...answers, traits];
    if (current + 1 < questions.length) {
      setAnswers(next);
      setCurrent(current + 1);
    } else {
      const result = calculateResult(next, characters);
      onFinish(result);
    }
  }

  return (
    <div className="max-w-xl mx-auto">
      <ProgressBar current={current + 1} total={questions.length} />
      <QuestionCard
        key={questions[current].id}
        question={questions[current]}
        onAnswer={handleAnswer}
      />
    </div>
  );
}
