import { useState } from "react";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

export default function App() {
  const [page, setPage] = useState("home");
  const [seriesId, setSeriesId] = useState(null);
  const [result, setResult] = useState(null);

  function handleSelectSeries(id) {
    setSeriesId(id);
    setPage("quiz");
  }

  function handleFinish(character) {
    setResult(character);
    setPage("result");
  }

  function handleRestart() {
    setSeriesId(null);
    setResult(null);
    setPage("home");
  }

  return (
    <div className="min-h-screen px-4 py-10 max-w-3xl mx-auto">
      {page === "home" && <Home onSelectSeries={handleSelectSeries} />}
      {page === "quiz" && <Quiz seriesId={seriesId} onFinish={handleFinish} />}
      {page === "result" && <Result character={result} onRestart={handleRestart} />}
    </div>
  );
}
