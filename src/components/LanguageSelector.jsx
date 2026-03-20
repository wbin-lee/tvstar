import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { languages } from "../i18n/translations";

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = languages.find((l) => l.code === lang);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700
                   hover:border-indigo-500 transition-colors cursor-pointer text-sm"
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <svg className="w-3 h-3" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M1 1l4 4 4-4" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl bg-gray-900 border border-gray-700
                        shadow-xl z-50 overflow-hidden animate-fade-in">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left
                         hover:bg-gray-800 transition-colors cursor-pointer
                         ${l.code === lang ? "bg-gray-800 text-indigo-400" : ""}`}
            >
              <span>{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
