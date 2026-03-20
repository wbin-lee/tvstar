import SeriesSelector from "../components/SeriesSelector";
import LanguageSelector from "../components/LanguageSelector";
import { useLanguage } from "../context/LanguageContext";
import seriesList from "../data/seriesList.json";

export default function Home({ onSelectSeries }) {
  const { t } = useLanguage();

  return (
    <div>
      <div className="flex justify-end mb-4">
        <LanguageSelector />
      </div>
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
          {t.siteTitle}
        </h1>
        <p className="text-gray-400 mt-3">{t.siteSubtitle}</p>
      </div>
      <SeriesSelector series={seriesList} onSelect={onSelectSeries} />
    </div>
  );
}
