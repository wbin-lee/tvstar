export default function ResultCard({ character, onRestart }) {
  return (
    <div className="animate-fade-in max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6">You are...</h2>
      <div className="rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-lg shadow-indigo-500/10">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-indigo-400">{character.name}</h3>
          <p className="text-gray-300 mt-3 leading-relaxed">{character.description}</p>
        </div>
      </div>
      <button
        onClick={onRestart}
        className="mt-8 px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500
                   transition-colors duration-200 font-semibold cursor-pointer"
      >
        Take Another Quiz
      </button>
    </div>
  );
}
