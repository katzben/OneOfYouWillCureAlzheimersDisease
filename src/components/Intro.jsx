export default function Intro({ onStart }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
        One of You Will Cure Alzheimer's Disease
      </h1>
      <div className="text-gray-700 space-y-4 mb-6 leading-relaxed">
        <p>
          Hi, Dr. Katz here. As I mentioned in my video, I wanted to give your
          group something more interactive. Since I was a game designer before I
          was a researcher, that meant a game.
        </p>
        <p>
          You'll work through a research career aimed at curing Alzheimer's
          disease, making real decisions along the way. Play individually or as a
          group. Either way, start here:
        </p>
      </div>
      <button
        onClick={onStart}
        className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
      >
        Start
      </button>
    </div>
  )
}
