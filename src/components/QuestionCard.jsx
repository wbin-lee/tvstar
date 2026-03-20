export default function QuestionCard({ question, onAnswer }) {
  return (
    <div className="animate-fade-in">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
        {question.text}
      </h2>
      <div className="grid gap-3">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onAnswer(opt.traits)}
            className="w-full text-left px-5 py-4 rounded-xl bg-gray-900 border border-gray-800
                       hover:border-indigo-500 hover:bg-gray-800 transition-all duration-200
                       cursor-pointer active:scale-[0.98]"
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}
