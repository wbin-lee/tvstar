import { useLanguage } from "../context/LanguageContext";

export default function ProgressBar({ current, total }) {
  const { t } = useLanguage();
  const pct = Math.round((current / total) * 100);

  return (
    <div className="w-full mb-6">
      <div className="flex justify-between text-sm text-gray-400 mb-1">
        <span>{t.questionOf(current, total)}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
