export default function SeriesSelector({ series, onSelect }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {series.map((s) => (
        <button
          key={s.id}
          onClick={() => onSelect(s.id)}
          className="group rounded-2xl overflow-hidden bg-gray-900 border border-gray-800
                     hover:border-indigo-500 transition-all duration-300 text-left
                     hover:shadow-lg hover:shadow-indigo-500/10 cursor-pointer"
        >
          <img
            src={s.thumbnail}
            alt={s.title}
            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{s.title}</h3>
          </div>
        </button>
      ))}
    </div>
  );
}
