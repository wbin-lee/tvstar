import SeriesSelector from "../components/SeriesSelector";
import seriesList from "../data/seriesList.json";

export default function Home({ onSelectSeries }) {
  return (
    <div>
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
          Character Personality Test
        </h1>
        <p className="text-gray-400 mt-3">
          Pick a series and discover which character you are!
        </p>
      </div>
      <SeriesSelector series={seriesList} onSelect={onSelectSeries} />
    </div>
  );
}
