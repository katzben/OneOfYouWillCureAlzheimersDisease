export default function ChapterIntro({ chapter, onContinue }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm text-center">
      <div className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-1">
        {chapter.label}
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">{chapter.title}</h2>
      <div className="text-sm text-gray-500 mb-4">{chapter.years}</div>
      <p className="text-gray-700 leading-relaxed mb-6 text-left">
        {chapter.intro}
      </p>
      <button
        onClick={onContinue}
        className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
      >
        Continue
      </button>
    </div>
  )
}
